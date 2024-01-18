import classes from "./Message.module.scss";

let Message = (props) => {
  console.log(props)
  return (
    <div>
      <span>{props.id}.</span>
      <span>{props.message}</span>
    </div>
  );
};

export default Message;
