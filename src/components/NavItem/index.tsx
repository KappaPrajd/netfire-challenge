import s from './NavItem.module.css';
import { NavItemProps } from './types';

const NavItem = ({ page, active }: NavItemProps) => {
  return (
    <a className={`${s.container} ${active && s.active}`} href="#">
      {page}
    </a>
  );
};

export default NavItem;
