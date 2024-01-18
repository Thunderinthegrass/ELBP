import { NavLink } from "react-router-dom";
import classes from "./PlayListNavItem.module.scss";

const PlayListNavItem = (props) => {
  // let path = '/orange/*' + props.id;
  // let path = '/orange/' + props.id;

  return (
    <li className={classes.navItem}>
      {/* <NavLink to={path} className={({ isActive }) => isActive ? classes.activeLink : undefined} >
        {props.id}
      </NavLink> */}
      <NavLink to={`lesson${props.id}`} className={({ isActive }) => isActive ? classes.activeLink : undefined} >
        {props.id}
      </NavLink>
    </li>
  )
}

export default PlayListNavItem;