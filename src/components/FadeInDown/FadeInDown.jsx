import React, { Children, useEffect, useState } from 'react';
import './FadeInDown.css';

function FadeInDown (props){
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    setTimeout(() => {
        // Código a ejecutar después de 2 segundos
        setIsVisible(true);

      }, props.time)
    ;
  }, []);

  return (
    <div className={`Dfade-in ${isVisible ? 'Dvisible' : ''}`}>
      {props.children}
    </div>
  );
};

export {FadeInDown};