import { NavLink } from "react-router-dom";
import clsx from "clsx";
import style from "./Navigation.module.css";

export const Navigation = () => {
  return (
    <header className={style.head}>
      <nav className={style.navigate}>
        <NavLink
          className={({ isActive }) => {
            return clsx(style.link, isActive && style.active);
          }}
          to="/"
        >
          Home
        </NavLink>
        <NavLink
          className={({ isActive }) => {
            return clsx(style.link, isActive && style.active);
          }}
          to="/movies"
        >
          Movies
        </NavLink>
      </nav>
    </header>
  );
};
