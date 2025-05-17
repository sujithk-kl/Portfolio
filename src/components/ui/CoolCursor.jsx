import { useEffect, useRef } from 'react';

const CoolCursor = () => {
  const cursorRef = useRef(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    let isTouch = false;

    const moveCursor = (e) => {
      if (isTouch) return;
      cursor.style.transform = `translate3d(${e.clientX - 12}px, ${e.clientY - 12}px, 0)`;
    };

    const handleTouch = () => {
      isTouch = true;
      cursor.style.display = 'none';
    };

    window.addEventListener('mousemove', moveCursor);
    window.addEventListener('touchstart', handleTouch);
    return () => {
      window.removeEventListener('mousemove', moveCursor);
      window.removeEventListener('touchstart', handleTouch);
    };
  }, []);

  return (
    <div
      ref={cursorRef}
      className="pointer-events-none fixed z-[9999] w-6 h-6 rounded-full bg-blue-500 bg-opacity-70 shadow-lg transition-transform duration-75 mix-blend-difference"
      style={{ left: 0, top: 0 }}
    />
  );
};

export default CoolCursor; 