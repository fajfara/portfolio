// Libs
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

// Components
import RandomShapes from '../components/shapes/RandomShapes';
import ProjectCard from '../components/card/ProjectCard';
import NucleoIcon from '../components/icon/NucleoIcon';

// Icons
import { BsArrowRight, BsEyeFill, BsEye } from 'react-icons/bs';

// Utils
import Button from '../components/button/Button';
import Heading from '../components/heading/Heading';
import AccessibilityIcon from '../components/svg/AccessibilityIcon';
import StrapiIcon from '../components/svg/StrapiIcon';
import FadeInUp from '../components/animated/FadeInUp';

const tools = [
  {
    icon: <AccessibilityIcon />,
    hoverContent: <h2>Accessibility</h2>,
  },
  {
    icon: <NucleoIcon icon="web-components" />,
    hoverContent: <h2>Web components</h2>,
  },
];

const CMS = [
  {
    icon: <NucleoIcon icon="drupal" />,
    hoverContent: <h2>Drupal</h2>,
  },
  {
    icon: <StrapiIcon />,
    hoverContent: <h2>Strapi</h2>,
  },
  {
    icon: <NucleoIcon icon="wordpress" />,
    hoverContent: <h2>Wordpress</h2>,
  },
];

const frameworks = [
  {
    icon: <NucleoIcon icon="react" />,
    hoverContent: <p>React</p>,
  },
  {
    icon: <NucleoIcon icon="nextjs" />,
    hoverContent: <p>Next js</p>,
  },
  {
    icon: <NucleoIcon icon="vuejs" />,
    hoverContent: <p>Vuejs</p>,
  },
];

export default function Home() {
  const [projects, setProjects] = useState([]);
  const { API_URL } = process.env;

  /**
   * Mounted useEffect
   */
  useEffect(() => {
    fetch(`${API_URL}/projects`)
      .then(response => response.json())
      .then(data => {
        setProjects(data);
      });
  }, []);

  return (
    <motion.main exit={{ opacity: 0 }} initial="initial" animate="animate" className="overflow-hidden">
      <section className="pt-32 pb-64 relative" id="landing">
        <FadeInUp className="w-full text-center mb-10" delay={0.2}>
          <Heading level={1}>Hey,</Heading>
        </FadeInUp>
        <div className="container mx-auto flex flex-wrap relative z-10">
          <FadeInUp delay={0.2} className="flex items-center w-full">
            <div className="w-full px-6 text-center">
              <p className="text-2xl font-eczar font-bold">I'm Anže, a frontend developer.</p>
            </div>
          </FadeInUp>
          <FadeInUp className="w-full flex justify-center" delay={0.4}>
            <div className="w-3/4 px-6 text-center">
              <p className="text-xl">
                Currently working{' '}
                <Button className="inline-flex text-xl" variant="ternary" href="https://www.agiledrop.com" target="_blank">
                  @Agiledrop
                </Button>{' '}
                and part time as a freelancer,
              </p>
            </div>
          </FadeInUp>
          <FadeInUp className="w-full flex justify-center mt-20 items-center flex-wrap" delay={0.65}>
            <Button className="group">
              <span className="mr-4">Get in touch</span>
              <BsArrowRight className="transform group-hover:rotate-90 transition-transform duration-300 ease-in-out" size="1.5rem" />
            </Button>
            <span className="mx-4">or</span>
            <Button href="#projects" variant="secondary" className="group">
              <span className="mr-4">See my projects</span>
              <div className="h-6 w-6 relative">
                <BsEye
                  className="group-hover:opacity-0 opacity-100 absolute left-0 top-0 transition-opacity duration-300 ease-in-out"
                  size="1.5rem"
                />
                <BsEyeFill
                  className="group-hover:opacity-100 opacity-0 absolute left-0 top-0 transition-opacity duration-300 ease-in-out"
                  size="1.5rem"
                />
              </div>
            </Button>
          </FadeInUp>
        </div>
        <RandomShapes />
      </section>

      <section id="about" className="py-32 relative">
        <FadeInUp delay={0.2} className="text-center mb-16">
          <Heading level={2} styledAs={1}>
            About
          </Heading>
        </FadeInUp>
        <div className="container mx-auto relative z-30">
          <div className="px-96 relative flex">
            <p className="w-1/2">I am a frontend developer, freelancer and amateur musician. My passion is primarily in web development.</p>
            <Image src="/images/me-guitar-jpg.jpg" width={300} height={500} className="w-1/2" />
          </div>
        </div>
        <RandomShapes amount={4} />
      </section>

      <section className="relative py-32" id="skills">
        <FadeInUp delay={0.2} className="text-center mb-16">
          <Heading className="text-center mb-16" level={2} styledAs={1}>
            Skills
          </Heading>
        </FadeInUp>
        <div className="container mx-auto">
          <div className="flex flex-wrap z-40 relative">
            <div className="w-full mb-16">
              <FadeInUp delay={0.4}>
                <div className="flex" style={{ maxWidth: '50%', margin: '0px auto 4rem' }}>
                  <div className="w-1/3 flex justify-center">
                    <NucleoIcon size={72} icon="html" />
                  </div>
                  <div className="w-1/3 flex justify-center">
                    <NucleoIcon size={72} icon="css" />
                  </div>
                  <div className="w-1/3 flex justify-center">
                    <NucleoIcon size={72} icon="js" />
                  </div>
                </div>
              </FadeInUp>
            </div>

            <FadeInUp delay={0.6} className="w-1/3 py-8 px-16">
              <Heading level={3} className="text-center mb-16">
                Stuff
              </Heading>
              <div className="flex justify-evenly">
                <AccessibilityIcon />
                <NucleoIcon size={50} icon="web-components" />
              </div>
            </FadeInUp>

            <FadeInUp delay={0.8} className="w-1/3 py-8 px-16">
              <Heading level={3} className="text-center mb-16">
                CMS
              </Heading>
              <div className="flex justify-evenly">
                <StrapiIcon />
                <NucleoIcon size={50} icon="drupal" />
                <NucleoIcon size={50} icon="wordpress" />
              </div>
            </FadeInUp>

            <FadeInUp delay={1} className="w-1/3 py-8 px-16">
              <Heading level={3} className="text-center mb-16">
                Frameworks
              </Heading>
              <div className="flex justify-evenly">
                <NucleoIcon size={50} icon="react" />
                <NucleoIcon size={50} icon="nextjs" />
                <NucleoIcon size={50} icon="vuejs" />
              </div>
            </FadeInUp>
          </div>
        </div>
        <RandomShapes amount={2} />
      </section>

      <section className="py-32 relative" id="projects">
        <FadeInUp delay={0.2} className="text-center mb-16">
          <Heading level={2} styledAs={1}>
            Projects
          </Heading>
        </FadeInUp>
        <div className="container mx-auto">
          <div className="flex flex-wrap px-96">
            {projects.map((project, index) => (
              <ProjectCard className="mb-8" project={project} key={index} />
            ))}
          </div>
        </div>
        <RandomShapes amount={3} />
      </section>
    </motion.main>
  );
}
