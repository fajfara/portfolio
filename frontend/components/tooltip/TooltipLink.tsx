import React, { useEffect, useState } from 'react';
import ReactTooltip from 'react-tooltip';

interface Props {
  linkContent: JSX.Element | JSX.Element[] | string;
  tooltipContent: JSX.Element | JSX.Element[] | string;
  target?: string;
  href: string;
  id: string;
  className?: string;
}

const TooltipLink: React.FC<Props> = ({ linkContent, tooltipContent, href, target = '_blank', id, className = '' }) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className={className}>
      {mounted && (
        <>
          <a data-tip data-for={id} target={target} href={href}>
            {linkContent}
          </a>
          <ReactTooltip id={id} effect="solid">
            {tooltipContent}
          </ReactTooltip>
        </>
      )}
    </div>
  );
};

export default TooltipLink;
