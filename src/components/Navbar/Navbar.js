import React from "react";
import NavContainer from "./styles";

function Navbar() {
  return (
    <NavContainer>
      <a href="/" className="site-title">
        League In-House
      </a>
      <ul>
        <li className="active">
          <a href="/select-teams">Select Teams</a>
        </li>
        <li>
          <a href="/leaderboards">Leaderboards</a>
        </li>
        <li>
          <a href="/search">Search</a>
        </li>
      </ul>
    </NavContainer>
  );
}

export default Navbar;
