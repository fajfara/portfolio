import { AnimatePresence, motion } from 'framer-motion';
import React from 'react';

// Redux
import { useSelector } from 'react-redux';
import ProjectModal from './ProjectModal';

const ProjectModalController = () => {
  // Redux
  const { show } = useSelector(state => state.showProjectModal);

  return <AnimatePresence>{show && <ProjectModal />}</AnimatePresence>;
};

export default ProjectModalController;
