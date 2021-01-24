import Row from "../components/layout/Row";
import { landingHeroContent, landingHeroRowClasses } from "../content/blog/landingHero/content";

// Frame motion
import { motion } from "framer-motion";
import { stagger } from "../styles/animations/framer-motion/all";

export default function Blog() {

    return (
      <motion.div exit={{ opacity: 0 }} initial='initial' animate='animate'>
        <motion.div variants={ stagger }>
          <Row columns={ landingHeroContent } rowClasses={ landingHeroRowClasses } />
        </motion.div>
      </motion.div>
    )
}