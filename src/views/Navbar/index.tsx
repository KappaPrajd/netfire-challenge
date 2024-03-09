import NavItems from './NavItems';
import s from './Navbar.module.css';

const Navbar = () => {
  return (
    <div className={s.container}>
      <div className={s.content}>
        <NavItems />
      </div>
    </div>
  );
};

export default Navbar;
