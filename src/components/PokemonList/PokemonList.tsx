import React from "react";
import { NamedAPIResource } from "../types/Pokemon";

interface Props {
  resourceList: NamedAPIResource[],
}

export const PokemonList: React.FC<Props> = ({ resourceList }) => {
  return (
    <>
      <ul
        className="is-parent is-vertical tile"
      >
        {resourceList.map((resource, idx) => (
          <li
            className="title is-4"
            key={idx}
          >
            <a>{resource.name}</a>
          </li>
        ))}
      </ul>
    </>
  );
};
