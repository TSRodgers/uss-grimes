import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Nav from './components/Nav';
import { Gallery } from "./pages/Gallery";
import Home from "./pages/Home";
import Journal from "./pages/Journal";
import NoMatch from "./pages/NoMatch";

function App() {
  return (
    <div>
      <Router>
        <>
          <Nav />
          <Routes>
            <Route path='/' element={Home} />
            <Route path='/gallery/:category' element={Gallery} />
            <Route path='/journal' element={Journal} />
            <Route path='*' element={NoMatch} />
          </Routes>
        </>
      </Router>
    </div>
  );
}

export default App;
