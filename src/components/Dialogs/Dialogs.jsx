import classes from "./Dialogs.module.scss";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const dialogsData = [
  {id: 1, name: 'Александр'},
  {id: 2, name: 'Фёдор'},
  {id: 3, name: 'Селиван'},
  {id: 4, name: 'Дед Вовка'},
]

const messagesData = [
  {id: 1, message: 'Здравствуйте Александр'},
  {id: 2, message: 'Здравствуйте Фёдор'},
  {id: 3, message: 'Здравствуйте Селиван'},
  {id: 4, message: 'Здравствуйте Дед Вовка'},
]

let dialogs = dialogsData.map(dialog => <DialogItem id={dialog.id} name={dialog.name} />)
let message = messagesData.map(message => <Message id={message.id} message={message.message} />)


const Dialogs = () => {
  return (
    <div className={classes.dialogsWrapper}>
      <div className="container">
        <div className={classes.dialogs}>
          {dialogs}
        </div>
        <div className={classes.messages}>
          {message}
        </div>
      </div>
    </div>
  );
};

export default Dialogs;
