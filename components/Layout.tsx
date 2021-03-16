import * as React from 'react';
import 'twin.macro';
import NavBar from './NavBar';
import Footer from './Footer';

type Props = { children: React.ReactNode };

const Layout: React.FC<Props> = ({ children }): JSX.Element => {
  return (
    <>
      <NavBar />
      <main tw="flex flex-col justify-center items-center max-w-5xl w-full mx-auto px-8">
        {children}
        <Footer />
      </main>
    </>
  );
};

export default Layout;
