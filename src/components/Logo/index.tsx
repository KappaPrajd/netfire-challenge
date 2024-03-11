import s from './Logo.module.css';

const Logo = () => {
  return (
    <img
      className={s.container}
      loading="lazy"
      src="./react-logo.svg"
      alt="Company logo"
    />
  );
};

export default Logo;
