import SectionBadge from '@components/SectionBadge';
import { useRef } from 'react';

import Heading from './Heading';
import s from './HeroSection.module.css';
import Video from './Video';
import VideoControls from './VideoControls';

const HeroSection = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  return (
    <section className={s.container}>
      <Video ref={videoRef} />

      <div className={s.content}>
        <div className={s.badge}>
          <SectionBadge>Lorem ipsum</SectionBadge>
        </div>
        <div className={s.heading}>
          <Heading />
        </div>
        <VideoControls videoRef={videoRef} />
      </div>
    </section>
  );
};

export default HeroSection;
