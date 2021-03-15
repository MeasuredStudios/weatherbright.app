import * as React from 'react';
import 'twin.macro';

type Props = { children: React.ReactNode };

const Display: React.FC<Props> = ({ children }) => {
  return (
    <div tw="w-full mt-16 justify-center container mx-auto">{children}</div>
  );
};

export default Display;
