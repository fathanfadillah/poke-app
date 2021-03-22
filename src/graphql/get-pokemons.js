import {gql} from 'apollo-boost';

const GetPokemon = gql`
  {
    pokemons(limit : 9) {
      results {
        id
        url
        name
        image
      }
    }
  }
`

const GetMoves = gql`
  query pokemon($name: String!) {
    pokemon(name: $name) {
      id
      name
      sprites {
        front_default
      }
      moves {
        move {
          name
        }
      }
      types {
        type {
          name
        }
      }
    }
  }
`

export {GetPokemon, GetMoves};
