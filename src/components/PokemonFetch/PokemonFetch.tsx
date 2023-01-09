import classNames from 'classnames';
import React, { useCallback, useEffect, useState } from 'react';
import { get } from "../../api";
import { NamedAPIResourceType, PokemonType } from "../../types/Pokemon";
import { Loader } from "../Loader";
import { PokemonInfo } from "../PokemonInfo";

interface Props {
  resource: NamedAPIResourceType,
  onSelectResource: (val: null) => void,
}

export const PokemonFetch: React.FC<Props> = ({
  resource,
  onSelectResource,
}) => {
  const [isPokemonLoading, setIsPokemonLoading] = useState(false);
  const [errorLoadingPokemon, setErrorLoadingPokemon] = useState(false);
  const [pokemon, setPokemon] = useState<PokemonType | null>(null);

  const fetchPokemon = useCallback(async (url: string) => {
    try {
      setIsPokemonLoading(true);
      setErrorLoadingPokemon(false);
      const fetchedData = await get<PokemonType>({ url });

      setPokemon(fetchedData);
    } catch (error) {
      setErrorLoadingPokemon(true);
    }

    setIsPokemonLoading(false);
  }, []);

  useEffect(() => {
    fetchPokemon(resource.url);
  }, [resource]);

  return (
    <>
      <div
        className={classNames(
          'modal-background',
          {
            'is-hidden': pokemon,
          },
        )}
        onClick={() => onSelectResource(null)}
      />

      <div
        className={classNames(
          'modal-card',
          {
            'is-hidden': pokemon,
          }
        )}
      >
        <header className="modal-card-head">
          <p className="modal-card-title">
            {resource.name}
          </p>

          <button
            className="delete"
            onClick={() => onSelectResource(null)}
          />
        </header>

        <section className="modal-card-body">
          {isPokemonLoading && (
            <Loader />
          )}

          {errorLoadingPokemon && (
            <div className="notification is-danger">
              Something went wrong, try again !!
            </div>
          )}

          {!isPokemonLoading && !errorLoadingPokemon && !pokemon && (
            <p className="title is-4">
              No Pokemon Found
            </p>
          )}
        </section>
      </div>

      {pokemon && (
        <PokemonInfo
          pokemon={pokemon}
          onCloseModal={() => onSelectResource(null)}
        />
      )}
    </>
  );
};
