import React from "react";
import {BrowserRouter,Routes,Route,Link} from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact"

function App() {

  return (
    <div>

      <header>
        <h1>My React Website</h1>
         <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div className="collapse navbar-collapse" id="navbarNavDropdown">
    <ul className="navbar-nav">
      <li className="nav-item active">
        <Link className="nav-link" to="/">Home <span className="sr-only">(current)</span></Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/about">About Us</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/contact">Contact Us</Link>
      </li>
      </ul>
      </div>
        </nav>
      </header>


      <main>

       <BrowserRouter>
       <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/contact" element={<Contact/>}/>
       </Routes>
       </BrowserRouter>
      </main>

    </div>
  );
}

export default App;
