import classNames from "classnames";
import React, { useState } from "react";
import { PokemonFetch } from "../PokemonFetch";
import { NamedAPIResourceType } from "../../types/Pokemon";

interface Props {
  resourceList: NamedAPIResourceType[],
}

export const PokemonList: React.FC<Props> = ({ resourceList }) => {
  const [selectedResource, setSelectedResource] = useState<NamedAPIResourceType | null>(null);

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
            <a
              onClick={() => setSelectedResource(resource)}
            >
              {resource.name}
            </a>
          </li>
        ))}
      </ul>

      {selectedResource && (
        <div
          className={classNames(
            'modal',
            {
              'is-active': selectedResource,
            }
          )}
        >
          <PokemonFetch
            resource={selectedResource}
            onSelectResource={setSelectedResource}
          />
        </div>
      )}
    </>
  );
};
