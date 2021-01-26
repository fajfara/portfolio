import { motion, useAnimation } from 'framer-motion';
import React, { useEffect, useRef } from 'react';
import { fadeInUp } from '../../assets/animations/framer';
import { useVisible } from 'react-hooks-visible';

interface Props {
  className?: string;
  children: JSX.Element | JSX.Element[] | string;
  delay: number;
}

const FadeInUp: React.FC<Props> = ({ children, className, delay = 0 }) => {
  const [currentElement, isVisible] = useVisible();
  const variants = fadeInUp(delay);
  const controls = useAnimation();

  useEffect(() => {
    if (isVisible === 1) {
      controls.start(variants.animate);
    }
  }, [isVisible]);

  return (
    <motion.div ref={currentElement} className={className} initial={variants.initial} animate={controls}>
      {children}
    </motion.div>
  );
};

export default FadeInUp;
