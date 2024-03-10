import s from './Video.module.css';

const Video = () => {
  return (
    <div className={s.container}>
      <video autoPlay muted loop>
        <source src="./bg-video.mp4" />
      </video>
    </div>
  );
};

export default Video;
