import { NavLink } from "react-router-dom";
import classes from "./Dialogs.module.scss";

const DialogItem = () => {
  return (
    <div className={classes.dialog}>
      <NavLink to="/dialogs/1">Александр</NavLink>
    </div>
  );
};

const Dialogs = () => {
  return (
    <div className={classes.dialogs}>
      <div className={classes.dialogsItems}>
        <DialogItem />
      </div>
      <div className={classes.messages}>
        <div className={classes.dialog}>Здравствуйте</div>
      </div>
    </div>
  );
};

export default Dialogs;
