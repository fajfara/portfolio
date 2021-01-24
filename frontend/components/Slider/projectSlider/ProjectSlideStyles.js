import styled from "@emotion/styled";

const ProjectSlideStyles = styled.li`
  .slide-content {
    white-space: normal;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    position: relative;
    height: 20rem;
    user-select: none;
    
    img {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      z-index: -1;
      object-fit: cover;
    }
    
    h2, p {
      word-break: break-word;
      position: relative;
      z-index: 10;
      color: white;
    }
    
    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      z-index: 1;
      background-color: black;
      opacity: 0.5;
    }
  }
`;

export default ProjectSlideStyles;