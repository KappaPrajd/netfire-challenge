import GradientText from '../../../components/GradientText';
import s from './Heading.module.css';

const Heading = () => {
  return (
    <h1 className={s.container}>
      <GradientText>Lorem Ipsum Dolor Sit amet</GradientText>
      <br />
      Donec cursus ligula diam, nec congue
      <br />
      augue ultrices nec.
    </h1>
  );
};

export default Heading;
