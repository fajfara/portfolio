import { v4 as uuidv4 } from 'uuid';

// Framer motion
import { motion } from 'framer-motion';
import { stagger } from '../../styles/animations/framer-motion/all';

// React
import { useEffect, useRef, useState } from 'react';

// Components
import RandomShapes from '../shapes/RandomShapes';

const SectionWithShapes = React.memo(({ columns, randomShapes }) => {
  const rowRef = useRef(null);
  const [columnKeys, setColumnsKeys] = useState([]);

  // Component mounted
  useEffect(() => {
    if (columns.length > 0) {
      const tempIDs = [];

      columns.forEach(() => {
        tempIDs.push(uuidv4());
      });

      setColumnsKeys(tempIDs);
    }
  }, []);

  return (
    <section ref={rowRef} className="relative">
      <motion.div variants={stagger} className="flex py-32 flex-wrap z-40 relative">
        {columnKeys.length === columns.length &&
          columns.map(({ classes, element, animation }, index) => {
            const anim = animation ? animation : '';
            return (
              <motion.div key={columnKeys[index]} className={classes} variants={anim}>
                {element}
              </motion.div>
            );
          })}
      </motion.div>
      {randomShapes && <RandomShapes />}
    </section>
  );
});

export default SectionWithShapes;
