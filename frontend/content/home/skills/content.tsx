import CircleSkills from "../../../components/skills/CircleSkills";

import { rem } from "polished";
import { spacing } from "../../../styles/variables/_variables";

const skillsSectionTitle = <h1>Skills</h1>;

const skillsSectionTop = (
  <div style={{ maxWidth: '50%', margin: `0 auto ${rem(spacing.lg)}` }}>
    <div className="row">
      <div className="col col-4 flex justify-center">
        <img src={'images/svgs/skills/html_logo.svg'} alt="HTML logo"/>
      </div>
      <div className="col col-4 flex justify-center">
        <img src={'images/svgs/skills/css_logo.svg'} alt="CSS logo"/>
      </div>
      <div className="col col-4 flex justify-center">
        <img src={'images/svgs/skills/js_logo.svg'} alt="JS logo"/>
      </div>
    </div>
  </div>
);

const tools = [
  {
    icon: <img src={'images/svgs/skills/html_logo.svg'} alt="HTML logo"/>,
    hoverContent: (
      <div className="content">
        <h2>Hello there</h2>
        <p>This is some content which will be displayed when hovering the logo</p>
      </div>
    )
  },
  {
    icon: <img src={'images/svgs/skills/html_logo.svg'} alt="HTML logo"/>,
    hoverContent: <p>This is on hover</p>
  },
  {
    icon: <img src={'images/svgs/skills/html_logo.svg'} alt="HTML logo"/>,
    hoverContent: <p>This is on hover</p>
  }
]

const CMS = [
  {
    icon: <img src={'images/svgs/skills/html_logo.svg'} alt="HTML logo"/>,
    hoverContent: <p>This is on hover</p>
  },
  {
    icon: <img src={'images/svgs/skills/html_logo.svg'} alt="HTML logo"/>,
    hoverContent: <p>This is on hover</p>
  },
  {
    icon: <img src={'images/svgs/skills/html_logo.svg'} alt="HTML logo"/>,
    hoverContent: <p>This is on hover</p>
  }
]

const frameworks = [
  {
    icon: <img src={'images/svgs/skills/html_logo.svg'} alt="HTML logo"/>,
    hoverContent: <p>This is on hover</p>
  },
  {
    icon: <img src={'images/svgs/skills/html_logo.svg'} alt="HTML logo"/>,
    hoverContent: <p>This is on hover</p>
  },
  {
    icon: <img src={'images/svgs/skills/html_logo.svg'} alt="HTML logo"/>,
    hoverContent: <p>This is on hover</p>
  }
]


const skillsToolsColumn = (
  <div style={{ padding: `${rem(spacing.md)}`}}>
    <CircleSkills icons={tools} duration={30} title={"Tools"}/>
  </div>
);

const skillsCMSColumn = (
  <div style={{ padding: `${rem(spacing.md)}`}}>
    <CircleSkills icons={CMS} duration={15} title={"CMS"}/>
  </div>
);

const skillsFrameworksColum = (
  <div style={{ padding: `${rem(spacing.md)}`}}>
    <CircleSkills icons={frameworks} duration={30} title={"Frameworks"}/>
  </div>
);

const skillsSectionContent = [
  // Title
  {
    element: skillsSectionTitle,
    classes: 'col-12 text-center'
  },
  // Left column
  {
    element: skillsSectionTop,
    classes: 'col-12'
  },
  // Tools column
  {
    element: skillsToolsColumn,
    classes: 'col-4'
  },
  // Tools column
  {
    element: skillsCMSColumn,
    classes: 'col-4'
  },
  // Tools column
  {
    element: skillsFrameworksColum,
    classes: 'col-4'
  }
];

const skillsRowClasses = 'padding-xl-0 margin-btm-xl';

export { skillsSectionContent, skillsRowClasses };