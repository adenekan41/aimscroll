/* -------------------------------------------------------------------------- */
/*                            External Dependencies                           */
/* -------------------------------------------------------------------------- */

import { useCallback, useLayoutEffect, useState } from 'react';

/* ---------------------------- Interdependencies --------------------------- */
import { isBrowser } from 'is-browser';

interface ScrollPosition {
  x: number;
  y: number;
}
/**
 * Get Scroll Object
 * @namespace window
 * @returns {ScrollPosition}
 */
const getScroll = (): ScrollPosition => {
  return {
    x: !isBrowser() ? 0 : window.pageXOffset || window.scrollX,
    y: !isBrowser()
      ? 0
      : window.pageYOffset || document.documentElement.scrollTop,
  };
};

/**
 * Get scroll position of the application
 * @function useScrollPosition
 * @returns {ScrollPosition}
 */

const useScrollPosition = (): ScrollPosition => {
  const [scrollPosition, setPosition] = useState<ScrollPosition>(getScroll());

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
 * @returns {number}
 */
export const useScrollX = (): number => {
  const { x } = useScrollPosition();
  return x;
};

/**
 * Get Y axis of the body or window element
 * @function
 * @returns {number}
 */
export const useScrollY = (): number => {
  const { y } = useScrollPosition();
  return y;
};

export default useScrollPosition;
