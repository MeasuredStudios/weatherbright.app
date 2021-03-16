// import * as React from 'react';
// import ReactDOM from 'react-dom';
// import 'twin.macro';

// const Portal = ({ children, className }) => {
//   const bodyRef = React.useRef(document.getElementsByTagName(`body`)[0]);
//   const elementRef = React.useRef(document.createElement(`div`));

//   React.useEffect(() => {
//     const element = elementRef.current;
//     const portalRoot = bodyRef.current;

//     element.className = 'portal-root';

//     if (className) {
//       element.className = `${element.className} ${className}`;
//     }

//     portalRoot.appendChild(element);

//     return () => {
//       portalRoot.removeChild(element);
//     };
//   }, [className]);

//   return ReactDOM.createPortal(children, elementRef.current);
// };

// export default Portal;
