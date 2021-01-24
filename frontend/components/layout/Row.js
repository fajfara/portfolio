import { v4 as uuidv4 } from 'uuid';

// Framer motion
import { motion } from "framer-motion";
import { stagger } from "../../styles/animations/framer-motion/all";

// React
import { useEffect, useRef, useState } from "react";

// Styles
import styled from "@emotion/styled";
import generateShapesArray from "./helpers/generateShapesArray";

const Row = React.memo(({ columns, rowClasses, randomShapes }) => {

  const rowRef = useRef(null);
  const [shapes, setShapes] = useState([]);

  // Component mounted
  useEffect(() => {
    if(randomShapes) {
      setShapes(generateShapesArray(rowRef));
    }
  }, [])


  return (
    <RowStyles ref={rowRef}>
      <motion.div variants={ stagger } className={ 'row ' + rowClasses } >
        {
          columns.map(({ classes, element, animation}) => {
            const anim = animation ? animation : '';
            return (
              <motion.div
                key={uuidv4()}
                className={classes + ' col'}
                variants={anim}
              >
                { element }
              </motion.div>
            )
          })
        }
      </motion.div>
      <div className="shapes">
        {
          shapes
        }
      </div>
    </RowStyles>
  )
});

export default Row;

const RowStyles = styled.div`
  position: relative;
  
  .shapes {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
  }
`;
