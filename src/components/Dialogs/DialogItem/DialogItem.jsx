import { NavLink } from 'react-router-dom';
import classes from './DialogItem.module.scss';

const DialogItem = (props) => {
  return (
    <div className={classes.dialog}>
      <NavLink to={`dialogs/${props.id}`} className={({ isActive }) => isActive ? classes.activeLink : undefined} >{props.name}</NavLink>
    </div>
  );
};

export default DialogItem;