import * as React from 'react';
import ResizeObserver from 'resize-observer-polyfill';

// https://developer.mozilla.org/en-US/docs/Web/API/ResizeObserver
// https://developer.mozilla.org/en-US/docs/Web/API/Resize_Observer_API

/**
 * Hook, that returns the current dimensions of an HTML element.
 * Doesn't play well with SVG.
 */

const useResizeObserver = (
  ref: React.MutableRefObject<HTMLDivElement>
): DOMRectReadOnly => {
  const [dimensions, setDimensions] = React.useState<DOMRectReadOnly>(null);
  React.useEffect(() => {
    const observeTarget = ref.current;
    const resizeObserver = new ResizeObserver((entries) => {
      entries.forEach((entry) => {
        setDimensions(entry.contentRect);
      });
    });
    resizeObserver.observe(observeTarget);
    return () => {
      resizeObserver.unobserve(observeTarget);
    };
  }, [ref]);
  return dimensions;
};

export default useResizeObserver;
