import { ChangeEvent, useEffect, useState } from 'react';

import PlayPause from './PlayPause';
import PlaybackTime from './PlaybackTime';
import Timeline from './Timeline';
import s from './VideoControls.module.css';
import { VideoControlProps } from './types';

const VideoControls = ({ videoRef }: VideoControlProps) => {
  const [isPlaying, setIsPlaying] = useState(!videoRef.current?.paused);
  const [currentTime, setCurrentTime] = useState(0);

  useEffect(() => {
    const id = window.setInterval(() => {
      setCurrentTime(videoRef.current?.currentTime || 0); // sync state with video
    }, 10); // low interval for better UX, no impact on performance detected

    return () => {
      window.clearInterval(id);
    };
  }, [videoRef]);

  const play = () => {
    void videoRef.current?.play();
    setIsPlaying(true);
  };

  const pause = () => {
    videoRef.current?.pause();
    setIsPlaying(false);
  };

  const playPause = () => (videoRef.current?.paused ? play() : pause());

  const handleTimelineInput = (e: ChangeEvent<HTMLInputElement>) => {
    if (!videoRef.current?.duration) return;

    const updatedTime =
      (videoRef.current?.duration / 1000) * Number(e.target.value);

    videoRef.current.currentTime = updatedTime;
    setCurrentTime(updatedTime);
  };

  return (
    <div className={s.container}>
      <div className={s.playPause}>
        <PlayPause isPlaying={isPlaying} onClick={playPause} />
      </div>
      <div className={s.timeline}>
        <Timeline
          playbackTime={currentTime}
          duration={videoRef.current?.duration || 0}
          onInput={handleTimelineInput}
        />
      </div>
      <div className={s.time}>
        <PlaybackTime time={currentTime} />
      </div>
    </div>
  );
};

export default VideoControls;
