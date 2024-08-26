import React from "react";
import { useNavigate } from "react-router-dom";
import './Header.css'
function Header() {

  const navigate = useNavigate()

  return (
    <header className="header">
        <h1 className="header-h1" onClick={()=>navigate('/')}>
          Note Buddy
          <img src="src/assets/post-it.png" alt="" />
        </h1>
        <hr />
    </header>
  );
}

export default Header;
