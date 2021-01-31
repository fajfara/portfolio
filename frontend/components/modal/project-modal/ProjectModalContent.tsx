import React, { useEffect } from 'react';

// Libs
import { motion } from 'framer-motion';

// Redux
import { useSelector } from 'react-redux';

// Components
import Heading from '../../heading/Heading';

const slideInFromRight = (delay = 0) => ({
  initial: {
    x: 100,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      delay,
    },
  },
  exit: {
    opacity: 0,
    x: 100,
  },
});

const ProjectModalContent = () => {
  const { API_URL } = process.env;

  // Redux
  const { title, screenshots } = useSelector(state => state.projectModal);

  useEffect(() => {
    console.log(`Content for ${title} is mounted`);
  }, []);

  return (
    <motion.div variants={slideInFromRight()} initial="initial" animate="animate" exit="initial">
      <motion.div variants={slideInFromRight(0.15)} initial="initial" animate="animate" exit="initial">
        <Heading styledAs={1}>{title}</Heading>
      </motion.div>
      {screenshots[0] && (
        <motion.img
          variants={slideInFromRight(0.3)}
          initial="initial"
          animate="animate"
          exit="initial"
          src={API_URL + screenshots[0].formats.medium.url}
          alt=""
        />
      )}
    </motion.div>
  );
};

export default ProjectModalContent;
