/* -------------------------------------------------------------------------- */
/*                            External Dependencies                           */
/* -------------------------------------------------------------------------- */
import { useCallback, useState } from 'react';

/* -------------------------- Internal Dependencies ------------------------- */
import useWillMount from './use-will-mount';

const useAimScroll = (scrollStart, scrollEnd) => {
  // Check if we have a scrollStart and its a number
  if (!scrollStart && typeof scrollStart === 'number')
    throw new Error('aimScroll needs to have a start value');

  const [isScroll, setScroll] = useState(false);

  const scrollWindow = useCallback(() => {
    if (scrollStart && !scrollEnd) {
      return document.body.scrollTop >= scrollStart ||
        document.documentElement.scrollTop >= scrollStart
        ? setScroll(true)
        : setScroll(false);
    }

    if (scrollStart && scrollEnd) {
      // eslint-disable-next-line no-bitwise
      return (document.documentElement.scrollTop > scrollStart) &
        (document.documentElement.scrollTop <= scrollEnd)
        ? setScroll(true)
        : setScroll(false);
    }
  }, []);

  useWillMount(() => {
    window.addEventListener('scroll', scrollWindow);

    return function cleanupListener() {
      window.removeEventListener('scroll', scrollWindow);
    };
  });

  return [isScroll, setScroll];
};

export default useAimScroll;
