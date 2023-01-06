import { ApiParam } from "./components/types/ApiParam";

const API_URL = 'https://pokeapi.co/api/v2/';

function wait(delay: number) {
  return new Promise((resolve) => setTimeout(resolve, delay));
}

export async function get<T>(param: ApiParam): Promise<T> {
  console.log('param is ', param);
  const url = (param.url ? param.url : API_URL)
    + (param.endPoint ? param.endPoint : '')
    + (param.resource ? param.resource : '')
    + (param.query ? param.query : '');

  console.log('url is ', url);

  return wait(500)
    .then(() => fetch(url))
    .then((response) => response.json());
}
