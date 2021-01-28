// Libs
import React, { useRef } from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';

interface Props extends React.HTMLProps<HTMLButtonElement> {
  children: JSX.Element | JSX.Element[] | string;
  variant?: 'primary' | 'secondary' | 'ternary';
  onClick?: () => void;
  href?: string;
}

// Default styling for button variants
const buttonStyles: { [key: string]: string } = {
  primary: 'bg-primary hover:bg-primary-dark border border-black py-4 px-12',
  secondary: 'bg-secondary hover:bg-secondary-dark border border-black py-4 px-12',
  ternary: 'text-base',
};

const Button: React.FC<Props> = ({ children, variant = 'primary', href = null, ...rest }) => {
  // Variables
  const isAnchor = /^#/.test(href);
  const isSameSiteLink = /^\//.test(href);
  const Tag = href ? 'a' : 'button';
  const buttonProps: Props = { ...rest };

  // Methods

  /**
   * Used for generating ripples on click
   *
   * @param event Event object
   */
  const createRipple = event => {
    const button = event.currentTarget;

    const circle = document.createElement('span');
    const diameter = Math.max(button.clientWidth, button.clientHeight);
    const radius = diameter / 2;

    circle.style.width = circle.style.height = `${diameter}px`;
    circle.style.left = `${event.clientX - button.getBoundingClientRect().left - radius}px`;
    circle.style.top = `${event.clientY - button.getBoundingClientRect().top - radius}px`;
    circle.classList.add('ripple');

    const ripple = button.getElementsByClassName('ripple')[0];

    if (ripple) {
      ripple.remove();
    }

    button.appendChild(circle);
  };

  /**
   * Used for generating classes for each button
   */
  const generateClassName = () => {
    const classes = ['overflow-hidden relative font-eczar font-bold transition-colors duration-300 ease-in-out'];

    // Push default styles for variant
    classes.push(buttonStyles[variant]);

    // Conditions
    if (rest.className) classes.push(rest.className);
    if (variant === 'primary' || variant === 'secondary') {
      classes.push('button--ripple');
    }
    if (variant === 'ternary') {
      classes.push('group');
    }
    return classes.join(' ');
  };

  // Override onclick prop
  buttonProps.onClick = evt => {
    if (rest.onClick) rest.onClick();
    if (variant !== 'ternary') createRipple(evt);
  };

  // Override classname
  buttonProps.className = generateClassName();

  // Add href to props if set
  if (href) buttonProps.href = href;

  // Render anchor link if href is an anchor
  if (isAnchor) {
    buttonProps.offset = '100';

    return (
      <AnchorLink {...buttonProps}>
        <span className="pointer-events-none flex items-center">{children}</span>
      </AnchorLink>
    );
  }

  // Else return default
  return (
    <Tag {...buttonProps}>
      <span className="pointer-events-none flex items-center relative z-10 justify-center">{children}</span>
      {variant === 'ternary' && (
        <span className="absolute bottom-0 left-0 w-full h-full bg-secondary transition-transform transform-gpu scale-y-25 origin-bottom group-hover:scale-y-100 z-0"></span>
      )}
    </Tag>
  );
};

export default React.memo(Button);
