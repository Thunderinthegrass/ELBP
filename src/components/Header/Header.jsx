import classes from "./Header.module.scss";
import Navbar from "../Navbar/Navbar";

const Header = () => {
  return (
    <header className={classes.header}>
      <div className="container">
        <h1>ELBP</h1>
        <Navbar />
      </div>
    </header>
  );
};

export default Header;
