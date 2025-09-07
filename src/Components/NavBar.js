import React from "react";

const NavBar = () => {
  return (
    <nav className="navbar">
      <h1 className="logo">💰ExpenseX</h1>
      <ul className="nav-links">
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/add">Add Expense</a>
        </li>
        <li>
          <a href="/history">History</a>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
