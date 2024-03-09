import NavItem from '../../../components/NavItem';
import s from './NavItems.module.css';

const NavItems = () => {
  return (
    <div className={s.container}>
      <NavItem page="Home" active={true} />
      <NavItem page="About" active={false} />
      <NavItem page="Products" active={false} />
    </div>
  );
};

export default NavItems;
