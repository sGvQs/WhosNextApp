import { useLayoutEffect, useState } from 'react';

export const useWidthSize = (): number => {
  const [width, setWidth] = useState<number>(0);
  useLayoutEffect(() => {
    const updateSize = (): void => {
      setWidth(window.innerWidth);
    };

    window.addEventListener('resize', updateSize);
    updateSize();

    return () => window.removeEventListener('resize', updateSize);
  }, []);
  return width;
};
