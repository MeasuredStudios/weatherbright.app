import * as React from 'react';
import 'twin.macro';

const ExternalLink = ({ href, children }) => {
  return (
    <a
      tw="text-sm text-gray-500 hover:text-gray-600 transition"
      target="_blank"
      rel="noopener noreferrer"
      href={href}
    >
      {children}
    </a>
  );
};

export default ExternalLink;
