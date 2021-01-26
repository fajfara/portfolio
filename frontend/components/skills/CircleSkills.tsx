// Libs
import styled from '@emotion/styled';
import React from 'react';

import { v4 as uuidv4 } from 'uuid';

// Icons
import { BsArrowRight } from 'react-icons/bs';
import Heading from '../heading/Heading';

function CircleSkills({ icons, title }) {
  return (
    <CircleSkillsStyles>
      <div className="circle">
        {icons.map(({ hoverContent, icon }) => (
          <div className="skill-icon" key={uuidv4()}>
            <div className="skill-icon__hover flex z-30">
              <BsArrowRight />
              <div className="p-4 border border-black bg-white shadow-sm">{hoverContent}</div>
            </div>
            <div className="skill-icon__icon">{icon}</div>
          </div>
        ))}
      </div>
      <div className="circle__title">
        <Heading level={3}>{title}</Heading>
      </div>
    </CircleSkillsStyles>
  );
}

export default CircleSkills;

const CircleSkillsStyles = styled.div`
  position: relative;

  &:hover {
    .circle__title {
      text-decoration: underline;
    }
  }

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

      svg {
        height: 50px;
        width: 50px;
      }

      &:hover {
        .skill-icon__hover {
          opacity: 1;
        }
      }

      &__hover {
        position: absolute;
        opacity: 0;
        left: 100%;
        bottom: 0;
        transition: opacity 0.3s ease-out;
        height: fit-content;

        * {
          white-space: nowrap;
        }
      }

      &:nth-of-type(1) {
        top: 0;
        left: 50%;
        transform: translateX(-50%);

        .skill-icon__hover {
          align-items: center;
          left: 50%;
          bottom: 100%;
          flex-direction: column-reverse;
          transform: translateX(-50%);
          margin-bottom: 1rem;

          .p-4 {
            margin-bottom: 1rem;
          }

          > svg {
            transform: rotate(-90deg) translateY(-2px);
          }
        }
      }

      &:nth-of-type(2) {
        top: 50%;
        right: 0;
        transform: translateY(-50%);
      }

      &:nth-of-type(3) {
        bottom: 0;
        left: 50%;
        transform: translateX(-50%);
      }

      &:nth-of-type(4) {
        top: 50%;
        left: 0;
        transform: translateY(-50%);
      }
    }
  }
`;
