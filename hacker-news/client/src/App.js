import logo from './logo.svg';
import './App.css';
import Stories from "./components/Stories"
import Authors from "./components/Authors"
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {
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
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<Stories />} />
          <Route path="/authors" element={<Authors />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
