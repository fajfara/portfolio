import Glide from '@glidejs/glide';
import React, { useState, useEffect } from 'react';

const Slider = ({ element = 'glide', options, children }) => {
  const [slider] = useState(new Glide(`.${element}`, options));

  useEffect(() => {
    // cleanup when unmounting component
    return () => slider.destroy();
  }, []);

  useEffect(() => {
    if (children.length > 0) {
      slider.mount();
    }
  }, [children]);

  return (
    <div className={element}>
      <div className="glide__track" data-glide-el="track">
        <ul className="glide__slides">
          {children.map((slide, index) => {
            return React.cloneElement(slide, {
              key: index,
              className: `${slide.props.className} glide__slide`,
            });
          })}
        </ul>
      </div>
    </div>
  );
};

export default Slider;
