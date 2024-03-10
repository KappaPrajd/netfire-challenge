import { useRef } from 'react';

import s from './HeroSection.module.css';
import Video from './Video';
import VideoControls from './VideoControls';

const HeroSection = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  return (
    <div className={s.container}>
      <Video ref={videoRef} />

      <div className={s.content}>
        <VideoControls videoRef={videoRef} />
      </div>
    </div>
  );
};

export default HeroSection;
