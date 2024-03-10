import { forwardRef } from 'react';

import s from './Video.module.css';

const Video = forwardRef<HTMLVideoElement>((_props, ref) => {
  return (
    <div className={s.container}>
      <video autoPlay muted loop ref={ref}>
        <source src="./bg-video.mp4" />
      </video>
    </div>
  );
});

Video.displayName = 'Video';

export default Video;
