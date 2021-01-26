import { fadeInUp } from "../../../styles/animations/framer-motion/all";

const landingHeroTitle = <h1>Blog</h1>;

const landingHeroMiddle = (
  <div className="text-center">
    <p className="h2">
      Checkout my latest blog posts
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
    element: landingHeroMiddle,
    classes: 'col-12',
    animation: fadeInUp
  }
];

const landingHeroRowClasses = 'padding-xl-0';

export { landingHeroContent, landingHeroRowClasses };