import Icons from './Icons';
import Logo from './Logo';
import NavItems from './NavItems';
import s from './Navbar.module.css';

const Navbar = () => {
  return (
    <div className={s.container}>
      <div className={s.content}>
        <NavItems />
        <Logo />
        <Icons />
      </div>
    </div>
  );
};

export default Navbar;
