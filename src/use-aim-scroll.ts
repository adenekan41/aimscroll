/* -------------------------------------------------------------------------- */
/*                            External Dependencies                           */
/* -------------------------------------------------------------------------- */
import { useCallback, useState } from 'react';

/* -------------------------- Internal Dependencies ------------------------- */
import useWillMount from './use-will-mount';
import { isBrowser } from 'is-browser';

const useAimScroll = (
  scrollStart: number,
  scrollEnd?: number
): [boolean?, React.Dispatch<React.SetStateAction<boolean>>?] => {
  if (!isBrowser()) return [undefined, undefined];

  // Check if we have a scrollStart and its a number
  if (!scrollStart || typeof scrollStart !== 'number')
    throw new Error('aimScroll needs to have a start value');

  const [isScroll, setScroll] = useState<boolean>(false);

  const scrollWindow = useCallback(() => {
    if (scrollStart && !scrollEnd) {
      return document.body.scrollTop >= scrollStart ||
        document.documentElement.scrollTop >= scrollStart
        ? setScroll(true)
        : setScroll(false);
    }

    if (scrollStart && scrollEnd) {
      return ((document?.documentElement?.scrollTop > scrollStart) as any) &
        ((document?.documentElement?.scrollTop <= scrollEnd) as any)
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
