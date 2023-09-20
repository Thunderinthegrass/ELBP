import "./App.scss";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Lesson1 from "./components/Lessons/lesson1";
// import Lesson2 from "./components/Lessons/lesson2";
import Orange from "./components/Playlists/Orange/Orange";
import Dialogs from "./components/Dialogs/Dialogs";
import Lesson2 from "./components/Lessons/lesson2";

const App = (props) => {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <div className="app-wrapper">
          <Navbar />
          <div className="app-content">
            <Routes>
              <Route path="/" element={<Orange />} />
              <Route path="orange/*" element={<Orange />} />
              <Route path="/lesson1" element={<Lesson1 />} />
              <Route path="/lesson2" element={<Lesson2 />} />
              <Route path="dialogs/*" element={<Dialogs />} />
            </Routes>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
