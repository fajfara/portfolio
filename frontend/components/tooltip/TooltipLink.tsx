import React, { useEffect, useState } from 'react';
import ReactTooltip from 'react-tooltip';

// Libs
import { v4 as uuidv4 } from 'uuid';

interface Props {
  linkContent: JSX.Element | JSX.Element[] | string;
  tooltipContent: JSX.Element | JSX.Element[] | string;
  target?: string;
  href: string;
  id: string;
}

const TooltipLink: React.FC<Props> = ({ linkContent, tooltipContent, href, target = '_blank', id }) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <>
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
    </>
  );
};

export default TooltipLink;
