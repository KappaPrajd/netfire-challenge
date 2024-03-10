import s from './Timeline.module.css';
import { TimelineProps } from './types';

const Timeline = ({ playbackTime, duration, onInput }: TimelineProps) => {
  const value = (playbackTime / duration) * 1000 || 0;

  return (
    <div className={s.container}>
      <input
        type="range"
        value={value}
        min={0}
        max={1000}
        step={1}
        onInput={onInput}
      ></input>
    </div>
  );
};

export default Timeline;
