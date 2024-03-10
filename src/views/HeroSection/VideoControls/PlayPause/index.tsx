import { MdPause, MdPlayArrow } from 'react-icons/md';

import s from './PlayPause.module.css';
import { PlayPauseProps } from './types';

const PlayPause = ({ isPlaying, onClick }: PlayPauseProps) => {
  const iconProps = { color: '#cae771', size: 25 };

  return (
    <button className={s.container} onClick={() => onClick()}>
      {isPlaying ? <MdPause {...iconProps} /> : <MdPlayArrow {...iconProps} />}
    </button>
  );
};

export default PlayPause;
