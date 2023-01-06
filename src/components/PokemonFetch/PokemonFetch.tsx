import classNames from "classnames";
import React, { useCallback, useEffect, useState } from "react";
import { get } from "../../api";
import { Loader } from "../Loader";
import { NamedAPIResource, PokemonType } from "../../types/Pokemon";

interface Props {
  selectedResource: NamedAPIResource,
  onSelectResource: (resource: NamedAPIResource | null) => void,
}

export const PokemonFetch: React.FC<Props> = ({
  selectedResource,
  onSelectResource,
 }) => {
  const [pokemon, setPokemon] = useState<PokemonType | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const fetchPokemon = useCallback(async (url: string) => {
    try {
      setIsLoading(true);
      setIsError(false);
      const fetchedPokemon = await get<PokemonType>({ url });
      setPokemon(fetchedPokemon);
    } catch (error) {
      setIsError(true);
    }
    setIsLoading(false);
  }, []);

  useEffect(() => {
    fetchPokemon(selectedResource.url);
  }, [selectedResource]);

  return (
    <>
      <div
        className={classNames(
          'modal-background',
        )}
        onClick={() => onSelectResource(null)}
      />

      <div className="modal-card">
          <header className="modal-card-haed">
            <p className="modal-card-title">{selectedResource.name}</p>
            <button
              className="delete"
              onClick={() => onSelectResource(null)}
            />
          </header>
          <section className="modal-card-body">
            {isLoading && (
              <Loader />
            )}

            {isError && (
              <div
                className="notification is-danger"
              >
                Something went wrong
              </div>
            )}

            {!isLoading && !isError && !pokemon && (
              <p className="title is-4">
                No Pokemon found.
              </p>
            )}
          </section>
      </div>
    </>
  );
};
