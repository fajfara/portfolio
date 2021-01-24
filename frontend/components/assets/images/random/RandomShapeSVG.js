// Styled
import styled from "@emotion/styled";
// Helpers
import genRandomNumber from "../../../../helpers/randomNumber";

import RellaxWrapper from 'react-rellax-wrapper'

// Framer motion
import { motion } from "framer-motion";


function RandomShapesSVG({ position, dimensions }) {
  const randomNumber = genRandomNumber(0, 19);
  let parallaxSpeed = Math.floor(Math.random() * 4) + 1; // this will get a number between 1 and 10;
  parallaxSpeed *= Math.floor(Math.random() * 4) == 1 ? 1 : -1; // this will add minus sign in 50% of cases

  return (
      <ShapeStyle className="random-shape-svg" position={{ x: position.x, y: position.y }} dimensions={dimensions}>
        <motion.div
          animate={{ scale: 1, rotate: 0 }}
          initial={{ scale: 0, rotate: 180 }}
        >
          <RellaxWrapper speed={parallaxSpeed}>
            <img src={ `/images/svgs/random-shapes/${randomNumber}.svg` } alt="Random shape in the background"/>
          </RellaxWrapper>
        </motion.div>
      </ShapeStyle>
  );
}

export default RandomShapesSVG;

const ShapeStyle = styled.div`
  position: absolute;
  top: ${props => props.position.y}%;
  left: ${props => props.position.x}%;
  
  img {
    width: ${props => props.dimensions}px;
    height: ${props => props.dimensions}px;
    opacity: 0.75;
  }
`;