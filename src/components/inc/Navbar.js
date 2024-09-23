import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import { Navbar, Nav, Button } from 'react-bootstrap';
import './Google';
import './Nav.css';
import GoogleTranslate from './Google';

function Nav1() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.body.classList.toggle('bg-dark', !darkMode);
    document.body.classList.toggle('text-white', !darkMode);
  };

  return (
    <Navbar bg={darkMode ? 'dark' : 'light'} variant={darkMode ? 'dark' : 'light'} expand="lg">
      <Navbar.Brand href="#home"><img src='./assets/images/photo_2024-09-11_09-11-16.png' alt='img' height={80} width={90}/></Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav" className='me-3'>
        <Nav className="ms-auto ">
        
          
               <Link className='link' to="/">خانه</Link>
            <Link className='link' to="/about">در باره ما</Link>
            <Link className='link' to="/essay">مقالات</Link>
            <Link className='link' to="/student ">شاگردان برتر</Link>
            <Link className='link' to="/contactUs ">ارتباط با ما</Link>
         
        </Nav>
        <div ><GoogleTranslate/></div>
        <Button className='m-2' variant="outline-secondary" onClick={toggleDarkMode}>
          {darkMode ? 'Light Mode' : 'Dark Mode'}
        </Button>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Nav1;
