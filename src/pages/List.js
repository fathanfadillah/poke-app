import React from 'react';
import ApolloClient from 'apollo-boost'; 
import { ApolloProvider } from "@apollo/client";
import { PokemonsContainer } from '../containers/PokemonsContainer';

export const ListContainer = () => {
    // const client = new ApolloClient({
    //     uri : 'https://graphql-pokeapi.vercel.app/api/graphql'
    //   });

    return (
        <div>
            <div>
                <PokemonsContainer />
            </div>
        </div>
    )
}