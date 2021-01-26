// Helpers
import genRandomNumber from '../../../../helpers/randomNumber';

import RellaxWrapper from 'react-rellax-wrapper';

// Framer motion
import { motion } from 'framer-motion';

function RandomShapesSVG({ position, dimensions }) {
  const randomNumber = genRandomNumber(0, 19);
  let parallaxSpeed = Math.floor(Math.random() * 4) + 1; // this will get a number between 1 and 10;
  parallaxSpeed *= Math.floor(Math.random() * 4) == 1 ? 1 : -1; // this will add minus sign in 50% of cases

  const opacity = ['10', '20', '30', '40', '50'];

  return (
    <div
      className={`random-shape-svg absolute opacity-${opacity[Math.floor(Math.random() * opacity.length)]}`}
      style={{ top: `${position.y}%`, left: `${position.x}%` }}
    >
      <motion.div animate={{ scale: 1, rotate: 0 }} initial={{ scale: 0, rotate: 180 }}>
        <RellaxWrapper speed={parallaxSpeed} className="transition-transform duration-100 ease-in-out">
          <img
            src={`/images/svgs/random-shapes/${randomNumber}.svg`}
            alt="Random shape in the background"
            style={{ height: `${dimensions}px`, width: `${dimensions}px` }}
          />
        </RellaxWrapper>
      </motion.div>
    </div>
  );
}

export default RandomShapesSVG;
