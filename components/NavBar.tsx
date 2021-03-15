import * as React from 'react';
import 'twin.macro';
import ThemeToggle from './themeToggle';

const NavBar = (): JSX.Element => {
  return (
    <nav tw="top-0 flex justify-between items-center max-w-5xl w-full p-8 my-0 md:my-8 mx-auto bg-opacity-60">
      <h1 tw="font-bold text-2xl md:text-3xl tracking-tight mb-4 mt-8">
        Weather Bright
      </h1>
      <span tw="flex flex-row items-center">
        <p tw="p-1 sm:p-4 font-bold">Dashboard</p>
        <ThemeToggle />
      </span>
    </nav>
  );
};

export default NavBar;
