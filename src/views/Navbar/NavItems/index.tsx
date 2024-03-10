import NavItem from '../../../components/NavItem';
import s from './NavItems.module.css';

const NavItems = () => {
  return (
    <nav className={s.container}>
      <NavItem page="Home" active={true} />
      <NavItem page="About" active={false} />
      <NavItem page="Products" active={false} />
    </nav>
  );
};

export default NavItems;
