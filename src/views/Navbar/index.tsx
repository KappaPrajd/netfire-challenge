import Logo from '../../components/Logo';
import Icons from './Icons';
import NavItems from './NavItems';
import s from './Navbar.module.css';

const Navbar = () => {
  return (
    <header className={s.container}>
      <div className={s.content}>
        <NavItems />
        <div className={s.logo}>
          <Logo />
        </div>
        <Icons />
      </div>
    </header>
  );
};

export default Navbar;
