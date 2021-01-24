// Styles
import LandingHeroStyles from "./LandingHeroStyles";

export default function LandingHero({ title, leftColumn, rightColumn }) {

  const leftColumnMarkup = (
    <div className="col col-6">
      { leftColumn }
    </div>
  );

  const leftColumnContent = leftColumn ? leftColumnMarkup : '';

  const rightColumnMarkup = (
    <div className="col col-6">
      { rightColumn }
    </div>
  );

  const rightColumnContent = rightColumn ? rightColumnMarkup : '';

  return (
    <LandingHeroStyles>

      <div className="row">
        <div className="col col-12 text-center">
          { title }
        </div>
        { leftColumnContent }
        { rightColumnContent }
      </div>
      
    </LandingHeroStyles>
  )
}
