import s from './PlaybackTime.module.css';
import { PlaybackTimeProps } from './types';

const PlaybackTime = ({ time }: PlaybackTimeProps) => {
  /** 1 -> 01, 2 -> 02 etc. */
  const toStringRepresentation = (int: number) =>
    int.toLocaleString('en-US', {
      minimumIntegerDigits: 2,
      useGrouping: false,
    });

  const min = Math.floor(time / 60);
  const sec = Math.floor(time % 60);

  return (
    <span
      className={s.container}
    >{`${toStringRepresentation(min)}:${toStringRepresentation(sec)}`}</span>
  );
};

export default PlaybackTime;
