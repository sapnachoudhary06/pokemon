import React from "react";
import { Navigate, Route, Routes } from "react-router";
import { Home } from "./components/Home";
import { Navbar } from "./components/Navbar";
import { PokemonSearch } from "./components/PokemonSearch";
import { PokemonsPage } from "./components/PokemonsPage";

export const App = () => {
  return (
    <div>
      <Navbar />
      <main className="section">
        <div className="container">
          <Routes>
            <Route
              path="/"
              element={<Home />}
            />

            <Route
              path="/home"
              element={(
                <Navigate
                  to="/"
                  replace
                />
              )}
            />

            <Route
              path="/pokemons"
              element={<PokemonsPage />}
            />

            <Route
              path="/search"
              element={<PokemonSearch />}
            />
          </Routes>
        </div>
      </main>
    </div>
  );
};
