import ProjectSlideStyles from './ProjectSlideStyles';

function ProjectSlide({ project: { title, summary, id, screenshots, video_preview } }) {
  const { API_URL } = process.env;

  return (
    <ProjectSlideStyles key={ id }>
      <div className="slide-content">
        { screenshots[0] && <img src={API_URL + screenshots[0].formats.medium.url}/>}
        {
          video_preview && 
          <video autoPlay={true} loop={true}>
            <source src={API_URL + video_preview.url} type="video/webm" />
            Your browser does not support the video tag.
          </video>
        }
        <div className="text padding-0-sm-md">
          <h2 className="margin-btm-xs">{ title }</h2>
          <p>{ summary }</p>
        </div>
      </div>
    </ProjectSlideStyles>
  );
}

export default ProjectSlide;