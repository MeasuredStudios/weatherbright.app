import * as React from 'react';
import 'twin.macro';
import { CityContext } from '../utils/context/cityContext';
import Input from './ui/Input';

const LocationSearchForm = (): JSX.Element => {
  const userCity = React.useContext(CityContext);

  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (
    e
  ): void => {
    return userCity.setState({
      city: e.currentTarget.value,
      shouldFetch: userCity.state.shouldFetch,
    });
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
            value={userCity.state.city}
            onChangeHandler={handleChange}
          />{' '}
          <button
            tw="bg-blue-200 text-white rounded-lg text-xl absolute top-0 right-0 bottom-0 mt-1 mr-1 mb-1 px-8 font-semibold hover:bg-blue-400 focus:outline-none focus:ring"
            type="submit"
            onClick={() => {
              userCity.setState({
                city: userCity.state.city,
                shouldFetch: !userCity.state.shouldFetch,
              });
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
