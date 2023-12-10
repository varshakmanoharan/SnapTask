
import React, { useState } from 'react'
import logo from '../Navbar/logo.svg'
import todo from '../../assets/icon-todo.svg'
import Calender from '../../assets/icon-calendar.svg'
import Reminder from '../../assets/icon-reminders.svg'
import Planning from '../../assets/icon-planning.svg'
import './Navbar.css'
import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from 'react-bootstrap/Button';

function Navbar() {
  const [state, setState] = useState(false);
  return (
    <div className='Navbar-head'>
     <img src={logo} alt='logo'/>
    <div className='Navbarlist'>
      <ul id='Nav'>
        <NavDropdown title="Features" id="basic-nav-dropdown">
        <NavDropdown.Item href="#action/3.1"> <img src={todo}></img>
        Todo List</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2" ><img src={Calender}></img>
                Calender</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3"><img src={Reminder}></img>
                Reminder</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3"><img src={Planning}></img>
                Planning</NavDropdown.Item>
            </NavDropdown>
        <NavDropdown title="Company" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">History</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Our Team</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Blog</NavDropdown.Item>
            </NavDropdown>
        <li><a href="#">Careers</a></li>
        <li><a href="#">About</a></li>
        <li><a href='#' id='Navright'>Login</a></li>
      </ul>
    <div id='button-btn'> 
    <Button variant="outline-dark" id='btn'>Register</Button>{' '}
    </div>
      </div>
      
        
    </div>
  )
}

export default Navbar