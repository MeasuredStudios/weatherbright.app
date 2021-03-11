import * as React from 'react';
import 'twin.macro';

const LocationSearchForm = () => {
  return (
    <>
      <h1 tw="font-bold text-5xl tracking-tight mb-4">Location</h1>
      <div tw="h-auto w-full">
        <div tw="relative">
          <input
            type="search"
            name="query"
            placeholder="Search City"
            required={true}
            // value=""{props.value}""
            // handleChange={props.onChangeHandler}
            // error={props.error}
            tw="p-4 text-gray-700 w-full border border-gray-300 rounded-lg focus:outline-none focus:border-gray-400 focus:ring-0"
          />{' '}
          <button
            type="submit"
            tw="bg-blue-300 text-white rounded text-xl absolute top-0 right-0 bottom-0 mt-1 mr-1 mb-1 px-8 font-semibold hover:bg-blue-400 focus:outline-none focus:ring"
          >
            Search
          </button>
        </div>
      </div>
    </>
  );
};

export default LocationSearchForm;
