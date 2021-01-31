import React from 'react';

// Libs
import { motion } from 'framer-motion';

// Redux
import { useDispatch, useSelector } from 'react-redux';
import { showProjectModal } from '../../../redux/ducks/projectModalShow';

// Components
import ProjectModalContent from './ProjectModalContent';

const slideInFromRightStagger = {
  initial: {
    x: '100%',
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
  },
  exit: {
    x: '100%',
    opacity: 0,
  },
};

const ProjectModal = () => {
  const dispatch = useDispatch();

  // Redux
  const { title } = useSelector(state => state.projectModal);

  return (
    <motion.div
      className="fixed p-16 shadow w-1/2 h-full top-0 right-0 z-60 bg-white"
      key="project-modal"
      variants={slideInFromRightStagger}
    >
      <button onClick={() => dispatch(showProjectModal())} className="mb-5">
        Close modal
      </button>
      <div className="container mx-auto">
        <ProjectModalContent key={`project-modal__${title}`} />
      </div>
    </motion.div>
  );
};

export default ProjectModal;
