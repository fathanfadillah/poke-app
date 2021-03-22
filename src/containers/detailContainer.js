import React from 'react';
import PokemonsContainer  from '../containers/PokemonsContainer';
import {useQuery} from '@apollo/react-hooks';
import {GetMoves} from '../graphql/get-pokemons';
import ApolloClient from 'apollo-boost'; 
import { ApolloProvider } from "@apollo/react-hooks";

export const DetailContainer = (props) => {
    console.log('isi pokemon: ', props)
    console.log('isiDetail: ', props.match.params.PokemonName)
    // const pokemonName = ({match}) => (
    //     props.match.params
    // )
    

    const {data: {detailPokemons = []} ={} } = useQuery(GetMoves, {
        variable: { name : props.match.params.PokemonName},
    });

    // console.log('isi:',data)

    return (
        <div>
            detail page

                    {detailPokemons && detailPokemons.map((detailPokemon, index) => (
                        <div>a</div>
                    ))}
        </div>
    )
}