import gql from 'graphql-tag';

export const GET_POKEMONS = gql`
{
  pokemons(limit :10) {
    results {
      id
      url
      name
      image
    }
  }
}
`;

