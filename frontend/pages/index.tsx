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
import TooltipLink from '../components/tooltip/TooltipLink';
import Contact from '../components/forms/Contact';
import TailwindIcon from '../components/svg/TailwindIcon';

export default function Home() {
  const [projects, setProjects] = useState([]);
  const { API_URL } = process.env;

  /**
   * Mounted useEffect
   */
  useEffect(() => {
    const fetchProjects = async () => {
      const response = await fetch(`${API_URL}/projects`);
      const data = await response.json();
      setProjects(data);
    };

    fetchProjects();
  }, []);

  return (
    <motion.main exit={{ opacity: 0 }} initial="initial" animate="animate" className="overflow-hidden">
      <section className="pt-32 pb-64 relative" id="landing">
        <FadeInUp className="w-full text-center mb-10 z-10" delay={0.2}>
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
            <Button className="group" href="#contact">
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
        <FadeInUp className="text-center mb-16">
          <Heading level={2} styledAs={1}>
            About
          </Heading>
        </FadeInUp>
        <div className="container mx-auto relative z-30">
          <div className="px-96 relative flex">
            <p className="w-1/2">
              My passions lies in frontend development and music. I started my journey as a self taught developer, checkout my work history{' '}
              <Button className="inline-flex" variant="ternary" href="https://www.linkedin.com/in/fajfara" target="_blank">
                @Linkedin.
              </Button>{' '}
              In my spare time i like to play electric guitar and play video games.
            </p>
            <Image src="/images/me-guitar-jpg.jpg" width={300} height={500} className="w-1/2" />
          </div>
        </div>
        <RandomShapes amount={4} />
      </section>

      <section className="relative py-32" id="skills">
        <FadeInUp className="text-center mb-16">
          <Heading className="text-center mb-16" level={2} styledAs={1}>
            Skills
          </Heading>
        </FadeInUp>
        <div className="container mx-auto">
          <div className="flex flex-wrap z-40 relative">
            <div className="w-full mb-16">
              <FadeInUp delay={0.1}>
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
            <FadeInUp delay={0.2} className="w-1/3 py-8 px-16">
              <Heading level={3} className="text-center mb-16">
                CMS
              </Heading>
              <div className="flex justify-evenly">
                <TooltipLink href="https://strapi.io/" linkContent={<StrapiIcon />} tooltipContent={<p>Strapi</p>} id="tooltip_strapi" />

                <TooltipLink
                  href="https://drupal.org/"
                  linkContent={<NucleoIcon size={50} icon="drupal" />}
                  tooltipContent={<p>Drupal</p>}
                  id="tooltip_drupal"
                />

                <TooltipLink
                  href="https://wordpress.org/"
                  linkContent={<NucleoIcon size={50} icon="wordpress" />}
                  tooltipContent={<p>Wordpress</p>}
                  id="tooltip_wordpress"
                />
              </div>
            </FadeInUp>

            <FadeInUp delay={0.3} className="w-1/3 py-8 px-16">
              <Heading level={3} className="text-center mb-16">
                Frameworks
              </Heading>
              <div className="flex justify-evenly">
                <TooltipLink
                  href="https://reactjs.org/"
                  linkContent={<NucleoIcon size={50} icon="react" />}
                  tooltipContent={<p>React</p>}
                  id="tooltip_react"
                />

                <TooltipLink
                  href="https://vuejs.org/"
                  linkContent={<NucleoIcon size={50} icon="vuejs" />}
                  tooltipContent={<p>VueJs</p>}
                  id="tooltip_vuejs"
                />

                <TooltipLink
                  href="https://nextjs.com/"
                  linkContent={<NucleoIcon size={50} icon="nextjs" />}
                  tooltipContent={<p>NextJs</p>}
                  id="tooltip_nextjs"
                />

                <TooltipLink
                  href="https://nuxtjs.org/"
                  linkContent={<NucleoIcon size={50} icon="nuxtjs-icon" />}
                  tooltipContent={<p>NuxtJS</p>}
                  id="tooltip_nuxtjs"
                />

                <TooltipLink
                  href="https://tailwindcss.com/"
                  linkContent={<TailwindIcon />}
                  tooltipContent={<p>Tailwind css</p>}
                  id="tooltip_tailwindcss"
                />
              </div>
            </FadeInUp>

            <FadeInUp delay={0.4} className="w-1/3 py-8 px-16">
              <Heading level={3} className="text-center mb-16">
                Other
              </Heading>
              <div className="flex justify-evenly">
                <TooltipLink
                  href="https://www.w3.org/WAI/fundamentals/accessibility-intro/"
                  linkContent={<AccessibilityIcon />}
                  tooltipContent={<p>Accessibility</p>}
                  id="tooltip_accessibility"
                />

                <TooltipLink
                  href="https://developer.mozilla.org/en-US/docs/Web/Web_Components"
                  linkContent={<NucleoIcon size={50} icon="web-components" />}
                  tooltipContent={<p>Web components</p>}
                  id="tooltip_webcomponents"
                />
              </div>
            </FadeInUp>
          </div>
        </div>
        <RandomShapes amount={2} />
      </section>

      <section className="py-32 relative" id="projects">
        <FadeInUp className="text-center mb-16">
          <Heading level={2} styledAs={1}>
            Projects
          </Heading>
        </FadeInUp>
        <div className="container mx-auto">
          <div className="flex flex-wrap px-96">
            {projects.map((project, index) => (
              <FadeInUp delay={(index + 1) / 10} className="w-full">
                <ProjectCard className="mb-8" project={project} key={index} />
              </FadeInUp>
            ))}
          </div>
        </div>
        <RandomShapes amount={3} />
      </section>

      <section className="py-32" id="contact">
        <FadeInUp className="w-full text-center mb-10 z-10">
          <Heading level={2} styledAs={1}>
            Contact me
          </Heading>
        </FadeInUp>

        <div className="container mx-auto px-64">
          <Contact />
        </div>
      </section>
    </motion.main>
  );
}
