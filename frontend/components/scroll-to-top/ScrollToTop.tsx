import { AnimatePresence, motion } from 'framer-motion';
import React, { useEffect, useState } from 'react';

import { BsArrowUp } from 'react-icons/bs';

import Button from '../button/Button';

const ScrollToTop = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    handleScroll();
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleScroll = () => {
    if (window.pageYOffset > 200 && !showButton) {
      setShowButton(true);
    } else if (window.pageYOffset < 200) {
      setShowButton(false);
    }
  };
  return (
    <AnimatePresence>
      {showButton && (
        <motion.div animate={{ y: 0 }} initial={{ y: 100 }} exit={{ y: 0 }} key="scroll-to-top-btn">
          <Button href="#top" variant="secondary" className="block w-max">
            <span className="mr-4">Back to top</span>
            <BsArrowUp size="1.5rem" />
          </Button>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ScrollToTop;
