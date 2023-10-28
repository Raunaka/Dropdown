import user from '../src/img/user.png';
import edit from '../src/img/edit.png';
import mail from '../src/img/mail.png';
import setting from '../src/img/setting.png';
import help from '../src/img/help.png';
import logout from '../src/img/logout.png';
import './App.css';
import React, { useState, useEffect, useRef } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  const [open, setOpen] = useState(false);
  const menRef = useRef();

  useEffect(() => {
    const closeMenu = (e) => {
      if (menRef.current && !menRef.current.contains(e.target)) {
        setOpen(false);
      }
    };

    document.addEventListener('mousedown', closeMenu);

    return () => {
      document.removeEventListener('mousedown', closeMenu);
    };
  }, []);

  return (
    <div className="App">
      <div className="menu-container" ref={menRef}>
        <div className="menu-trigger" onClick={() => setOpen(!open)}>
          <img src={user} alt="User Icon" />
        </div>

        <div className={`dropdown-menu ${open ? 'show' : ''}`}>
          <h3>
            User 
            <br />
            <span>Profile</span>
          </h3>
          <ul>
            <DropdownItem img={user} text="My Profile" />
            <DropdownItem img={edit} text="Edit Profile" />
            <DropdownItem img={mail} text="Inbox" />
            <DropdownItem img={setting} text="Setting" />
            <DropdownItem img={help} text="Help" />
            <DropdownItem img={logout} text="Logout" />
          </ul>
        </div>
      </div>
    </div>
  );
}

function DropdownItem(props) {
  return (
    <li className="dropdownItem">
      <img src={props.img} alt={props.text} />
      <a className="dropdown-link">{props.text}</a>
    </li>
  );
}

export default App;
