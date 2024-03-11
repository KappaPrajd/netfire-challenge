import Logo from '../../../components/Logo';
import s from './LogoBox.module.css';

const LogoBox = () => {
  return (
    <div className={s.container}>
      <Logo />
      <span>Brand Name</span>
    </div>
  );
};

export default LogoBox;
