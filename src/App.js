import "./App.css";
import List2 from "./components/List2";
import About from "./components/About";
import { useState } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { FaBars, FaWindowClose } from "react-icons/fa";

function App() {
  const [openMenu, setOpenMenu] = useState(false);
  const [sayi, setSayi] = useState(0);
  const handleClick = () => {
    setOpenMenu(!openMenu);
  };
  const handleChange = (event) => {
    setSayi(event.target.value);
  };
  return (
    <BrowserRouter>
      <div className="menu">
        <button onClick={handleClick}>
          {openMenu ? <FaWindowClose /> : <FaBars />}
        </button>
        {openMenu ? (
          <div className="links">
            <Link className="link" to="/">
              Home
            </Link>
            <Link className="link" to="list-2">
              Link2
            </Link>
            <Link className="link" to="about">
              About
            </Link>
          </div>
        ) : null}
      </div>
      {sayi}
      <input type="number" value={sayi} onChange={handleChange} />
      <Routes>
        <Route path="/list-2" element={<List2 test="test1" />}></Route>
        <Route path="/about" element={<About />}></Route>
      </Routes>
      <div className="App">
        <header className="App-header">
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    </BrowserRouter>
  );
}

export default App;
