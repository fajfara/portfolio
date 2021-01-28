// Frame motion
import { motion } from 'framer-motion';
import Heading from '../components/heading/Heading';

export default function Blog() {
  return (
    <motion.main exit={{ opacity: 0 }} initial="initial" animate="animate">
      <motion.div>
        <Heading level={1}>Blog</Heading>
      </motion.div>
    </motion.main>
  );
}
