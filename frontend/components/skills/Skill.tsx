import {useEffect, useRef, useState, memo} from 'react';
import { TimelineMax } from "gsap";

interface Props {
  duration: number;
  paused: boolean;
  show: boolean;
}

const Skill: React.FC<Props> = ({ duration, paused }) => {

  const self = useRef(null);

  const [skillTl, setSkillTl] = useState(null);

  useEffect(() => {
    setSkillTl(new TimelineMax().to(self.current, duration, { rotate: '-360deg', repeat: -1, ease: 'none' }));
  }, []);

  useEffect(() => {
    if(skillTl) skillTl.pause();
  }, [paused])

  return (

  );
}



export default memo(Skill, (prevState, nextState) => prevState.show === nextState.show);