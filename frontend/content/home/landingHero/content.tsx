// Frame motion animations
import { fadeInUp } from '../../../styles/animations/framer-motion/all';

const landingHeroTitle = <h1>Hello</h1>;

const landingHeroLeft = (
  <div className="flex justify-end w-full px-6">
    <p className="text-2xl font-eczar font-bold text-right">
      Hello. i’m Anže, <br />
      a junior frontend developer.
      <br />
      Let me introduce myself.
      <br />
    </p>
  </div>
);

const landingHeroRight = (
  <div className="w-3/4 px-6">
    <p className="body-big">
      Currently working as a frontend developer, but also learning backend languages/technologies such as node js, php/symfony and cms like
      wordpress, magento, drupal. In my free time i like to learn new things and play electric guitar.
    </p>
  </div>
);

const landingHeroContent = [
  // Title
  {
    element: landingHeroTitle,
    classes: 'w-full text-center mb-8',
    animation: { ...fadeInUp, animate: { ...fadeInUp.animate, transition: { ...fadeInUp.transition, delay: 0.1 } } },
  },
  // Left column
  {
    element: landingHeroLeft,
    classes: 'w-1/2 flex items-center',
    animation: { ...fadeInUp, animate: { ...fadeInUp.animate, transition: { ...fadeInUp.transition, delay: 0.2 } } },
  },
  // Left column
  {
    element: landingHeroRight,
    classes: 'w-1/2',
    animation: { ...fadeInUp, animate: { ...fadeInUp.animate, transition: { ...fadeInUp.transition, delay: 0.3 } } },
  },
];

export { landingHeroContent };
