import React from 'react';
interface Props {
  icon: string;
  size?: number;
}
const NucleoIcon: React.FC<Props> = ({ icon, size = 24 }) => {
  return (
    <svg className="icon" style={{ width: `${size}px`, height: `${size}px` }}>
      <use href={`svg/icons.svg#icon-${icon}`} xlinkHref={`svg/icons.svg#icon-${icon}`} />
    </svg>
  );
};

export default NucleoIcon;
