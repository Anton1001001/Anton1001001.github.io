import logo from './logo.svg';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import NaviBar from './Components/Navibar';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import {Home} from './Home';
import {Writers} from './Writers'

function App() {
  return(
    <>
    <Router>
    <NaviBar />
    <Routes>
      <Route exact path="/" element={<Home/>} />
      <Route path="/writers" element={<Writers/>} />
    </Routes>
    </Router>
    </>
  )
}

export default App;
