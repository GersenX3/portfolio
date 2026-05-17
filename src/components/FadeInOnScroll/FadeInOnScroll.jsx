import React, { useState, useEffect, useRef } from 'react';
import "./FadeInOnScroll.css"

function FadeInOnScroll({ children }) {
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
      { threshold: 0.15 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className={`Sfade-in ${isVisible ? 'Svisible' : ''}`}>
      {children}
    </div>
  );
}

export { FadeInOnScroll };
