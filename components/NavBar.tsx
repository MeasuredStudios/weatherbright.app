import * as React from 'react';
import 'twin.macro';
import Link from 'next/link';
import ThemeToggle from '../components/ui/themeToggle';

const Home = () => (
  <div tw="flex flex-col items-center space-y-10 bg-primary rounded-lg">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      <path
        d="M3 12L5 10M5 10L12 3L19 10M5 10V20C5 20.5523 5.44772 21 6 21H9M19 10L21 12M19 10V20C19 20.5523 18.5523 21 18 21H15M9 21C9.55228 21 10 20.5523 10 20V16C10 15.4477 10.4477 15 11 15H13C13.5523 15 14 15.4477 14 16V20C14 20.5523 14.4477 21 15 21M9 21H15"
        stroke="#4A5568"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  </div>
);

const NavBar = (): JSX.Element => {
  return (
    <nav tw="top-0 flex justify-between items-center max-w-5xl w-full p-8 my-0 md:my-8 mx-auto bg-opacity-60">
      <Link href="/">
        <a tw="w-6 h-6 focus:outline-none fill-current text-primary hover:text-secondary">
          <Home />
        </a>
      </Link>
      <span tw="flex flex-row items-center">
        <Link href="/dashboard">
          <a tw="p-1 sm:p-4 font-bold">Dashboard</a>
        </Link>
        <ThemeToggle />
      </span>
    </nav>
  );
};

export default NavBar;
