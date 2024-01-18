import "./App.scss";
import Header from "./components/Header/Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Lesson1 from "./components/Lessons/lesson4.1";
// import Lesson2 from "./components/Lessons/lesson2";
import Orange from "./components/Playlists/Orange/Orange";
import Dialogs from "./components/Dialogs/Dialogs";
import Lesson24 from "./components/Lessons/lesson24";

const App = (props) => {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <div className="app-wrapper">
          <div className="app-content">
            <Routes>
              <Route path="/" element={<Lesson1 />} />
              <Route path="orange/*" element={<Orange />} />
              <Route path="lesson1/" element={<Lesson1 />} />
              <Route path="lesson24/" element={<Lesson24 />} />
              <Route path="dialogs/*" element={<Dialogs />} />
              <Route path="orange/lesson1" element={<Lesson1 />} />
              <Route path="orange/lesson24" element={<Lesson24 />} />
            </Routes>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
