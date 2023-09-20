// import classes from "./Orange.module.scss";
import PlaylistNav from "../PlaylistNav/PlaylistNav";
import Lesson from "./Lessons/Lesson";

const Orange = () => {
  return (
    <div>
      <PlaylistNav />
      <div className="container">
        <Lesson id="1" />
        <Lesson id="2" />
        <Lesson id="3" />
        <Lesson id="4" />
        <Lesson id="5" />
      </div>
    </div>
  )
}

export default Orange;