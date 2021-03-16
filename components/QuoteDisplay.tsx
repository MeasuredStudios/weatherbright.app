import * as React from 'react';
import 'twin.macro';

const QuoteDisplay = (): JSX.Element => {
  return (
    <div tw="border border-blue-200 rounded-lg p-8 mt-16 w-full">
      <h2 tw="mb-8 text-3xl font-bold tracking-tighter md:text-4xl">
        Weather Bright
      </h2>
      <p tw="text-lg md:text-xl my-1">
        Whether 'tis better in the mind to suffer The slings and arrows of
        outrageous weather, Or to take arms against a sea of troubles, And by
        opposing end them? - Weather Bright (William Shakespeare, Hamlet)
      </p>
      <br />
      <p tw="text-sm my-1">Just enjoy the day no matter the weather 😜</p>
    </div>
  );
};

export default QuoteDisplay;
