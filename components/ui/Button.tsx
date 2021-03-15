import * as React from 'react';
import tw, { styled, css, theme } from 'twin.macro';

const Button = (): JSX.Element => {
  return (
    <button
      type="submit"
      tw="bg-blue-300 text-white rounded text-xl absolute top-0 right-0 bottom-0 mt-1 mr-1 mb-1 px-8 font-semibold hover:bg-blue-400 focus:outline-none focus:ring"
    >
      Search
    </button>
  );
};

export default Button;
