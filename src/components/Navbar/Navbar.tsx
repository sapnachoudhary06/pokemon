import classNames from "classnames";
import React from "react";
import { NavLink } from "react-router-dom";

export const Navbar = () => (
  <nav
    className="navbar is-fixed-top has-shadow"
  >
    <div className="container">
      <div className="navbar-brand">
        <NavLink
          className={({ isActive }) => (
            classNames(
              'navbar-item',
              {
                'has-background-grey-lighter': isActive,
              },
            )
          )}
          to="/"
        >
          Home
        </NavLink>

        <NavLink
          className={({ isActive }) => (
            classNames(
              'navbar-item',
              {
                'has-background-grey-lighter': isActive,
              },
            )
          )}
          to="/pokemons"
        >
          Pokemons
        </NavLink>

        <NavLink
          className={({ isActive }) => (
            classNames(
              'navbar-item',
              {
                'has-background-grey-lighter': isActive,
              },
            )
          )}
          to="/search"
        >
          Search
        </NavLink>
      </div>
    </div>
  </nav>
);
