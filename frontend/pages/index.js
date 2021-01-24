// Row component
import Row from "../components/layout/Row";

// Content
import {
  landingHeroContent,
  landingHeroRowClasses,
} from "../content/home/landingHero/content";
import {
  skillsRowClasses,
  skillsSectionContent,
} from "../content/home/skills/content";

// Framer motion
import { motion } from "framer-motion";

// Slider components
import ProjectSlide from "../components/Slider/projectSlider/ProjectSlide";
import Slider from "../components/Slider/Slider";
// Spacing
import { spacing } from "../styles/variables/_variables";

import { useEffect, useState } from "react";

// Skills section content

export default function Home() {
  const [projectSliderContent, setProjectSliderContent] = useState([]);
  const { API_URL } = process.env;
  const projectSliderRowClasses = "padding-xl-0-lg margin-btm-xl";

  useEffect(() => {
    fetch(`${API_URL}/projects`)
      .then((response) => response.json())
      .then((data) => setupSliderData(data));
  }, []);

  function setupSliderData(data) {
    const Slides = data.map((project) => (
      <ProjectSlide key={project.id} project={project} />
    ));
    const projectSliderComponent = (
      <Slider
        element={"project-slider"}
        options={{
          perView: data.length < 4 ? data.length : 4,
          focusAt: "center",
          type: data.length < 4 ? "slider" : "carousel",
          gap: spacing.lg,
        }}
      >
        {Slides}
      </Slider>
    );

    setProjectSliderContent([
      {
        element: <h1>Projects</h1>,
        classes: "col-12 text-center",
      },
      {
        element: projectSliderComponent,
        classes: "col-12",
      },
    ]);
  }

  return (
    <motion.div exit={{ opacity: 0 }} initial="initial" animate="animate">
      <Row
        columns={landingHeroContent}
        rowClasses={landingHeroRowClasses}
        randomShapes={true}
      />
      <Row
        columns={skillsSectionContent}
        rowClasses={skillsRowClasses}
        randomShapes={true}
      />
      <Row
        columns={projectSliderContent}
        rowClasses={projectSliderRowClasses}
      />
    </motion.div>
  );
}
