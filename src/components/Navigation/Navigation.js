import React from "react";
import { NavLink } from "react-router-dom";
import s from "./Navigation.module.scss";

export const Navigation = () => {
  const setActive = ({ isActive }) => (isActive ? s.activeLink : "");

  return (
    <ul>
      <li>
        <NavLink to='/' className={setActive}>
          User List
        </NavLink>
      </li>
      <li>
        <NavLink to='/detail' className={setActive}>
          User Detail
        </NavLink>
      </li>
    </ul>
  );
};
