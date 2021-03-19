import * as React from 'react';
import 'twin.macro';
import Display from './Display';

const LoadingDisplay = (): JSX.Element => {
  return (
    <Display>
      <h2 tw="mb-8 text-3xl font-bold tracking-tighter md:text-4xl">Weather</h2>
      <div tw="w-full flex flex-row justify-evenly items-center border rounded-lg border-blue-200">
        <div tw="p-8">
          <h2 tw="text-3xl font-bold tracking-tighter md:text-4xl">😱</h2>
        </div>
        <div tw="p-8">
          <div tw="mb-8">
            <h3 tw="leading-none pb-2 pl-1">
              We could not find the city you are looking for...
            </h3>
            <p>Verify that you are only entering the city name.</p>
          </div>
        </div>
      </div>
    </Display>
  );
};

export default LoadingDisplay;
