import classes from "./lesson.module.scss";

const Lesson = (props) => {
  return (
    <div className={classes.lessonWrapper}>
      Урок {props.id}
    </div>
  )
}

export default Lesson;