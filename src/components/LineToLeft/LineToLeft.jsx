import React, { useState, useEffect, useRef } from 'react';
import "./LineToLeft.css"

function LineToLeft() {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <div ref={ref} className={`lineL ${isVisible ? 'line--animateL' : ''}`} />
      <div className='space'></div>
    </>
  );
}

export { LineToLeft };
