import { useRef, useState, useEffect } from 'react';
import { useVisible } from 'react-hooks-visible';

// Components
import Heading from '../heading/Heading';
import { BsInfoSquare, BsFillXSquareFill } from 'react-icons/bs';
import { AnimatePresence, motion } from 'framer-motion';

// Redux
import { useDispatch, useSelector } from 'react-redux';
import { changeProjectData } from '../../redux/ducks/projectModal';
import { showProjectModal } from '../../redux/ducks/projectModalShow';

// Types
import { Project } from '../../types/project';

const ProjectCard = ({ project, className }) => {
  const { API_URL } = process.env;
  // Hooks
  const [currentElement, isVisible] = useVisible((vi: number) => vi === 1);

  // Project data
  const projectData: Project = project;
  const { title, summary, screenshots, video_preview }: Project = project;

  // State
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  const [showCursor, setShowCursor] = useState(false);
  const [videoStarted, setVideoStarted] = useState(false);

  // Redux
  const dispatch = useDispatch();
  const { show: showModal } = useSelector(state => state.showProjectModal);

  // Refs
  const videoRef = useRef(null);

  // Methods

  /**
   *  Handles mouse hover on the main container element of the card
   *
   * @param direction Either etner or leave indicating wether the mouse is entering or leaving the element
   */
  const handleHover = (direction: 'enter' | 'leave') => {
    if (videoRef.current && direction === 'enter') {
      videoRef.current.play();

      if (!videoStarted) setVideoStarted(true);

      setShowCursor(true);
    }

    if (videoRef.current && direction === 'leave') {
      videoRef.current.pause();
      setShowCursor(false);
    }
  };

  /**
   * Handles mouse move on the container element
   *
   * @param evt Event object
   */
  const handleMouseMove = evt => {
    // TODO Refactor into own component, better performance
    setCursorPos({
      y: evt.clientY - evt.target.getBoundingClientRect().top,
      x: evt.clientX - evt.target.getBoundingClientRect().left,
    });
  };

  /**
   * Handles mouse click on the container element
   */
  const handleMouseClick = () => {
    dispatch(changeProjectData({ ...projectData }));
    dispatch(showProjectModal());
  };

  const handleMouseScroll = () => {
    console.log('Scrolling and the modal is open');
  };

  useEffect(() => {
    if (isVisible) {
      console.log(`I am visible, ${title}`);
      dispatch(changeProjectData({ ...projectData }));
    } else {
      console.log(`I am not visible, ${title}`);
    }
  }, [isVisible]);

  return (
    <div
      className={`w-full relative h-96 flex items-end z-10 overflow-hidden ${className}`}
      onMouseOver={() => handleHover('enter')}
      onMouseLeave={() => handleHover('leave')}
      onMouseMove={handleMouseMove}
      onClick={handleMouseClick}
      style={{
        cursor: showCursor ? 'none' : 'auto',
      }}
      //@ts-ignore
      ref={currentElement}
    >
      {/** Custom cursor */}
      {showCursor && (
        <div
          className="absolute z-50 pointer-events-none text-white flex justify-center items-center flex-col"
          style={{ left: cursorPos.x + 'px', top: cursorPos.y + 'px' }}
        >
          {showModal ? <BsFillXSquareFill /> : <BsInfoSquare />}
          <span className="mt-2">{showModal ? 'Close the sidebar' : 'Click for more info'}</span>
        </div>
      )}
      <AnimatePresence>
        {/** Screenshot of the page */}
        {screenshots[0] && !videoStarted && (
          <motion.img
            exit={{ opacity: 0 }}
            className="w-full h-full absolute left-0 top-0 z-10 object-cover pointer-events-none"
            src={API_URL + screenshots[0].formats.medium.url}
          />
        )}
      </AnimatePresence>
      {/** Video webm preview */}
      {video_preview && (
        <div className="player_wrapper w-full h-full pointer-events-none" style={{ paddingTop: '75%' }}>
          <video
            ref={videoRef}
            preload="none"
            autoPlay={false}
            loop={true}
            muted={true}
            className="absolute left-0 top-0 z-0 w-full h-full object-cover"
          >
            <source src={API_URL + video_preview.url} type="video/webm" />
            Your browser does not support the video tag.
          </video>
        </div>
      )}
      {/** Text content */}
      <div className="text p-8 absolute z-50 text-white pointer-events-none" style={{ height: 'fit-content' }}>
        <Heading level={3} styledAs={2}>
          {title}
        </Heading>
        <p>{summary}</p>
      </div>
      {/** Background */}
      <div className="absolute bg-black opacity-60 w-full h-full left-0 top-0 z-20 pointer-events-none"></div>
    </div>
  );
};

export default ProjectCard;
