import React from 'react';
import { motion } from 'framer-motion';

// Redux
import { useSelector } from 'react-redux';

const PageWrapper = ({ children }) => {
  const { show: showModal } = useSelector(state => state.showProjectModal);

  return (
    <motion.div initial={false} animate={{ x: showModal ? '-25%' : 0 }}>
      {children}
    </motion.div>
  );
};

export default PageWrapper;
