import { motion, useAnimation } from 'framer-motion';
import React, { useEffect } from 'react';
import { fadeInUp } from '../../assets/animations/framer';
import { useVisible } from 'react-hooks-visible';

interface Props {
  className?: string;
  children: JSX.Element | JSX.Element[] | string;
  delay?: number;
}

const FadeInUp: React.FC<Props> = ({ children, className, delay = 0 }) => {
  const [currentElement, isVisible] = useVisible((vi: number) => vi > 0.25);
  const variants = fadeInUp(delay);
  const controls = useAnimation();

  useEffect(() => {
    if (isVisible) {
      controls.start(variants.animate);
    }
  }, [isVisible]);

  return (
    //@ts-ignore
    <motion.div ref={currentElement} className={className} initial={variants.initial} animate={controls}>
      {children}
    </motion.div>
  );
};

export default FadeInUp;
