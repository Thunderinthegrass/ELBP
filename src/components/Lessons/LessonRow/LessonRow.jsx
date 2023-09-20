import classes from "./LessonRow.module.scss";

let LessonRow = (props) => {
  return (
    <li className={classes.listItem}>
      <span className={classes.phraseRu}>{props.phraseRu}</span>
      <span className={classes.phraseEn}>{props.phraseEn}</span>
    </li>
  )
}

export default LessonRow;