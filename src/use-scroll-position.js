/* -------------------------------------------------------------------------- */
/*                            External Dependencies                           */
/* -------------------------------------------------------------------------- */
import { useCallback, useLayoutEffect, useState } from 'react';

/**
 * Get Scroll Object
 * @function getScroll
 * @namespace window
 * @returns {Object}
 */
const getScroll = () => {
  return {
    x: typeof window === 'undefined' ? 0 : window.pageXOffset || window.scrollX,
    y:
      typeof window === 'undefined'
        ? 0
        : window.pageYOffset || document.documentElement.scrollTop,
  };
};

/**
 * Get scroll position of the application
 * @function useScrollPosition
 * @returns {Object}
 */

const useScrollPosition = () => {
  const [scrollPosition, setPosition] = useState(getScroll());

  const scrollWindow = useCallback(() => {
    setPosition(getScroll());
  }, []);

  useLayoutEffect(() => {
    window.addEventListener('scroll', scrollWindow);

    return function cleanupListener() {
      window.removeEventListener('scroll', scrollWindow);
    };
  }, []);

  return scrollPosition;
};

/**
 * Get X axis of the body or window element
 * @function
 * @returns {(number|string)}
 */
export const useScrollX = () => {
  const { x } = useScrollPosition();
  return x;
};

/**
 * Get Y axis of the body or window element
 * @function
 * @returns {(number|string)}
 */
export const useScrollY = () => {
  const { y } = useScrollPosition();
  return y;
};

export default useScrollPosition;
