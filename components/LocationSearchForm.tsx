import * as React from 'react';
import 'twin.macro';
import Input from './ui/Input';
interface City {
  city: string;
}

const LocationSearchForm = (props): JSX.Element => {
  const [userCity, setUserCity] = React.useState<City | undefined>('');

  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (
    e
  ): string => {
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
              setFinalCitySubmit(userCity);
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
