// Styled
import styled from "@emotion/styled";
import React from "react";

import { v4 as uuidv4 } from "uuid";

function CircleSkills({ icons, title }) {
  return (
    <CircleSkillsStyles>
      <div className="circle">
        {icons.map(({ hoverContent, icon }) => (
          <div className="skill-icon" key={uuidv4()}>
            <div className="skill-icon__hover">{hoverContent}</div>
            <div className="skill-icon__icon">{icon}</div>
          </div>
        ))}
      </div>
      <div className="circle__title">
        <h2>{title}</h2>
      </div>
    </CircleSkillsStyles>
  );
}

export default CircleSkills;

const CircleSkillsStyles = styled.div`
  position: relative;

  .circle__title {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  .circle {
    border-radius: 100%;
    width: 100%;
    height: 20rem;
    position: relative;

    .skill-icon {
      position: absolute;
      transform-origin: center;
      width: 50px;
      height: 72px;

      &:hover {
        .skill-icon__hover {
          opacity: 1;
        }
      }

      &__hover {
        position: absolute;
        opacity: 0;
        bottom: 100%;
        transition: opacity 0.3s ease-out;
        width: fit-content;
        height: fit-content;
        padding: 0.5rem;
      }

      &:nth-of-type(1) {
        top: -36px;
        left: 50%;
        transform: translateX(-50%);
      }

      &:nth-of-type(2) {
        top: 50%;
        left: calc(100% - 25px);
        transform: translateY(-50%);
      }

      &:nth-of-type(3) {
        top: calc(100% - 36px);
        left: 50%;
        transform: translateX(-50%);
      }

      &:nth-of-type(4) {
        top: 50%;
        left: -36px;
        transform: translateY(-50%);
      }
    }
  }

  @keyframes rotateInfinite {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }

  @keyframes firstItemRotate {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(-360deg);
    }
  }
`;
