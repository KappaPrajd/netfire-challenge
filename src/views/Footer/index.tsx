import Copyright from './Copyright';
import s from './Footer.module.css';
import LogoBox from './LogoBox';

const Footer = () => {
  return (
    <footer className={s.container}>
      <div className={s.content}>
        <div className={s.logoBox}>
          <LogoBox />
        </div>
        <div className={s.copyright}>
          <Copyright />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
