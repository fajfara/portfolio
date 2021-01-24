import ProjectSlideStyles from './ProjectSlideStyles';

function ProjectSlide({ project: { title, summary, preview, id } }) {
  const { API_URL } = process.env;
  console.log(preview);
  return (
    <ProjectSlideStyles key={ id }>
      <div className="slide-content">
        <img src={API_URL + preview.formats.medium.url}/>
        <div className="text padding-0-sm-md">
          <h2 className="margin-btm-xs">{ title }</h2>
          <p>{ summary }</p>
        </div>
      </div>
    </ProjectSlideStyles>
  );
}

export default ProjectSlide;