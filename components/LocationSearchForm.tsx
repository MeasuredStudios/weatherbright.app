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
  const [userCity, setUserCity] = React.useState<City | null>(null);
  const [returnedData, setReturnedData] = React.useState(null);

  React.useEffect(() => {
    const API_KEY = process.env.REACT_APP_WEATHER_API_KEY;
    const API_URL = 'https://api.openweathermap.org/data/2.5/weather';
    const finalURL = API_URL + `?q=${userCity}&appid=${API_KEY}&units=metric`;
    return setReturnedData(useAPI(finalURL).data);
  }, [userCity]);

  return (
    <>
      <h1 tw="font-bold text-5xl tracking-tight mb-4">Location</h1>
      <div tw="h-auto w-full">
        <div tw="relative">
          <Input />{' '}
          <button
            type="submit"
            tw="bg-blue-300 text-white rounded text-xl absolute top-0 right-0 bottom-0 mt-1 mr-1 mb-1 px-8 font-semibold hover:bg-blue-400 focus:outline-none focus:ring"
          >
            Search
          </button>
        </div>
        <div>
          <p>{JSON.stringify(returnedData)}</p>
        </div>
      </div>
    </>
  );
};

export default LocationSearchForm;
