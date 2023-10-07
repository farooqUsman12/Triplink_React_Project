import { useEffect, useState } from 'react';

const useScroll = () => {
  const [scrollEvent, setScrollEvent] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollEvent(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return scrollEvent;
};

export default useScroll;
