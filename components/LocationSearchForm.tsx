import * as React from 'react';
import 'twin.macro';
import useSWR from 'swr';
import Input from './ui/Input';

const fetcher = (...args) => fetch(...args).then((res) => res.json());

const useAPI = (url: string) => {
  const { data, error } = useSWR(url, fetcher);
  return {
    data: data,
    isLoading: !error && !data,
    isError: error,
  };
};

interface City {
  city: string;
}

const LocationSearchForm = (): JSX.Element => {
  const [userCity, setUserCity] = React.useState<City | void>('Orlando');
  const [returnedData, setReturnedData] = React.useState(null);

  React.useEffect(() => {
    console.log(userCity);
  }, [userCity]);

  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (
    e
  ): void => {
    return setUserCity(e.currentTarget.value);
  };

  return (
    <div tw="mt-16 w-full">
      <h2 tw="mb-8 text-3xl font-bold tracking-tighter md:text-4xl">
        Location
      </h2>
      <div tw="h-auto w-full">
        <div tw="relative">
          <Input
            type={'search'}
            value={userCity}
            onChangeHandler={handleChange}
          />{' '}
          <button
            tw="bg-blue-200 text-white rounded-lg text-xl absolute top-0 right-0 bottom-0 mt-1 mr-1 mb-1 px-8 font-semibold hover:bg-blue-400 focus:outline-none focus:ring"
            type="submit"
            onClick={() => {
              return console.log(userCity);
            }}
          >
            Search
          </button>
        </div>
      </div>
    </div>
  );
};

export default LocationSearchForm;
