import React from 'react';

interface PropTypes extends React.HTMLProps<HTMLHeadingElement> {
  level?: number;
  styledAs?: number;
}

// Default styling for headings
const headingStyles: { [key: number]: string } = {
  1: 'text-5xl',
  2: 'text-3xl',
  3: 'text-xl',
};

const Heading: React.FC<PropTypes> = ({ level = 2, styledAs, ...rest }) => {
  const Tag = 'h' + level;

  const headingProps = {
    ...rest,
  };

  // Generate className
  const classes = ['font-bold font-eczar'];

  // Check if styledAs is set
  classes.push(headingStyles[styledAs ? styledAs : level]);

  if (rest.className) classes.push(rest.className);
  headingProps.className = classes.join(' ');

  return <Tag {...headingProps}>{rest.children}</Tag>;
};

export default React.memo(Heading);
