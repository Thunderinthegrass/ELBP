import { NavLink } from 'react-router-dom';
import classes from './NavbarItem.module.scss';

const NavbarItem = (props) => {
  return (
    <li className={classes.navItem}>
      <NavLink to={props.link} className={({ isActive }) => isActive ? classes.activeLink : undefined}>{props.content}</NavLink>
    </li>
  )
}

export default NavbarItem;