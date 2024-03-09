import s from './Logo.module.css';

const Logo = () => {
  return (
    <div className={s.container}>
      <img
        loading="lazy"
        src="./react-logo.svg"
        width="65px"
        height="65px"
        alt="Company logo"
      />
    </div>
  );
};

export default Logo;
