import React, { useEffect, useRef, useState } from 'react';
import generateShapesArray from '../layout/helpers/generateShapesArray';

const RandomShapes = ({ amount = 5 }) => {
  const shapesContainerRef = useRef(null);
  const [shapes, setShapes] = useState([]);

  // Component mounted
  useEffect(() => {
    setShapes(generateShapesArray(shapesContainerRef, amount));
  }, []);
  return (
    <div ref={shapesContainerRef} className="absolute top-0 left-0 w-full h-full z-0 pointer-events-none">
      {shapes}
    </div>
  );
};

export default RandomShapes;
