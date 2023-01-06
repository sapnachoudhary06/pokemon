import React, { useCallback, useEffect, useState } from "react";
import { get } from "../../api";
import { Loader } from "../Loader";
import { PokemonList } from "../PokemonList";
import { ApiParam } from "../../types/ApiParam";
import { NamedAPIResourceType, NamedAPIResourceListType } from "../../types/Pokemon";

export const PokemonsPage = () => {
  const [resourceList, setResourceList] = useState<NamedAPIResourceType[]>([]);
  const [next, setNext] = useState('');
  const [previous, setPrevious] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const fetchResources = useCallback(async (param: ApiParam) => {
    setIsLoading(true);
    setIsError(false);
    try {
      const fetchedResources = await get<NamedAPIResourceListType>(param)
      setResourceList(fetchedResources.results);
      setNext(fetchedResources.next);
      setPrevious(fetchedResources.previous);
    } catch (error) {
      setIsError(true);
    }
    setIsLoading(false);
  }, []);

  const handleNext = useCallback(() => {
    fetchResources({
      url: next,
    });
  }, [next]);

  const handlePrevious = useCallback(() => {
    fetchResources({
      url: previous,
    });
  }, [previous]);

  useEffect(() => {
    fetchResources({
      endPoint: 'pokemon',
      query: '?limit=10',
    });
  }, []);

  return (
    <>
      <h1 className="title">
        Pokemons
      </h1>

      <div className="block">
        <div className="container box">
          {isLoading && (
            <Loader />
          )}

          {isError && (
            <p className="notification is-danger">
              Something went wrong, try again !!
            </p>
          )}

          {!isLoading
            && resourceList.length === 0
            && !isError
            && (
              <p>There are no pokemons on the server.</p>
            )}

            {resourceList.length > 0
              && !isLoading
              && (
                <>
                  <PokemonList resourceList={resourceList} />
                  <nav className="pagination is-centered is-parent tile">
                    <button
                      className="pagination-previous"
                      disabled={!previous}
                      onClick={handlePrevious}
                    >
                      Previous
                    </button>

                    <button
                      className="pagination-previous"
                      disabled={!next}
                      onClick={handleNext}
                    >
                      Next
                    </button>
                  </nav>
                </>
              )}
        </div>
      </div>
    </>
  );
};
