import logo from "./logo.svg";
import "./App.css";
import Stories from "./components/Stories";
import Authors from "./components/Authors";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Search from "./components/Search";
import Test from "./components/Test";
import Recommended from "./components/Recommended";

function App() {
  setTimeout(function () {
    window.location.reload();
    console.log("it refresh");
  }, 60 * 1000);
  return (
    <div className="App">
      <Router>
        <nav>
          <ul className="liste">
            <Link to="/">
              <li className="items">TOP 10 Stories</li>
            </Link>
            <Link to="/authors">
              <li className="items">TOP 10 Authors</li>
            </Link>
            <Link to="/search">
              <li className="items">Seach by Author</li>
            </Link>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<Stories />} />
          <Route path="/authors" element={<Authors />} />
          <Route path="/search" element={<Search />} />
          <Route path="/similar/:stories" element={<Recommended />} />
          <Route path="/similar" element={<Recommended />} />
        </Routes>
      </Router>
      {/* <Stories /> */}
      {/* <Search /> */}
    </div>
  );
}

export default App;
