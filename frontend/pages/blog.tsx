// Frame motion
import { motion } from 'framer-motion';

export default function Blog() {
  return (
    <motion.div exit={{ opacity: 0 }} initial="initial" animate="animate">
      <motion.div>
        <h1>Blog</h1>
      </motion.div>
    </motion.div>
  );
}
