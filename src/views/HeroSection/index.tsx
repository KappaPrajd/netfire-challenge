import s from './HeroSection.module.css';
import Video from './Video';

const HeroSection = () => {
  return (
    <div className={s.container}>
      <Video />
    </div>
  );
};

export default HeroSection;
