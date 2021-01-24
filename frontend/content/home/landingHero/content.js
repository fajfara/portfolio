// Frame motion animations
import { fadeInUp } from "../../../styles/animations/framer-motion/all";

const landingHeroTitle = <h1>Hello</h1>;

const landingHeroLeft = (
  <div className="flex justify-flex-end full-width">
    <p className="h2 text-right">
      Hello. i’m Anže, <br/>
      a junior web  developer.<br/>
      Let me introduce myself.<br/>
    </p>
  </div>
);


const landingHeroRight = (
  <div className="three-quarters">
    <p className="body-big">
      Currently working as a frontend developer, but also learning backend
      languages/technologies such as node js, php/symfony and cms like wordpress,
      magento, drupal. In my free time i like to learn new things
      and play electric guitar.
    </p>
  </div>
);

const landingHeroContent = [
  // Title
  {
    element: landingHeroTitle,
    classes: 'col-12 text-center',
    animation: fadeInUp
  },
  // Left column
  {
    element: landingHeroLeft,
    classes: 'col-6 flex align-items-center',
    animation: fadeInUp
  },
  // Left column
  {
    element: landingHeroRight,
    classes: 'col-6',
    animation: fadeInUp
  }
];

const landingHeroRowClasses = 'padding-xl-0 margin-btm-xl';

export { landingHeroContent, landingHeroRowClasses };