import Heading from '../heading/Heading';

const ProjectCard = ({ project: { title, summary, screenshots, video_preview }, className }) => {
  const { API_URL } = process.env;

  return (
    <div className={`w-full relative h-96 flex items-end ${className}`}>
      {screenshots[0] && (
        <img className="w-full h-full absolute left-0 top-0 z-0 object-cover" src={API_URL + screenshots[0].formats.medium.url} />
      )}
      {video_preview && (
        <video autoPlay={true} loop={true} className="w-full h-full absolute left-0 top-0 z-0">
          <source src={API_URL + video_preview.url} type="video/webm" />
          Your browser does not support the video tag.
        </video>
      )}
      <div className="text p-8 relative z-20 text-white" style={{ height: 'fit-content' }}>
        <Heading level={3} styledAs={2}>
          {title}
        </Heading>
        <p>{summary}</p>
      </div>
      {/** Background */}
      <div className="absolute bg-black opacity-60 w-full h-full left-0 top-0 z-10"></div>
    </div>
  );
};

export default ProjectCard;
