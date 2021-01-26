// Styles
import LandingHeroStyles from './LandingHeroStyles';

export default function LandingHero({ title, leftColumn, rightColumn }) {
  const leftColumnMarkup = <div className="w-1/2">{leftColumn}</div>;

  const leftColumnContent = leftColumn ? leftColumnMarkup : '';

  const rightColumnMarkup = <div className="w-1/2">{rightColumn}</div>;

  const rightColumnContent = rightColumn ? rightColumnMarkup : '';

  return (
    <LandingHeroStyles>
      <div className="row">
        <div className="w-full">{title}</div>
        {leftColumnContent}
        {rightColumnContent}
      </div>
    </LandingHeroStyles>
  );
}
