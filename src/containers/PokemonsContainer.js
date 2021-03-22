    import React, { useState } from 'react';
    import {useQuery} from '@apollo/react-hooks';
    import {GetPokemon} from '../graphql/get-pokemons';
    import {DetailContainer} from '../pages/Detail';
    import {BrowserRouter as Router, Link , Route } from 'react-router-dom'; 
    import { Button } from 'semantic-ui-react'
    import { useHistory } from "react-router-dom";

    export const PokemonsContainer = (props) => {
        // const {data: {pokemons = []} ={} } = useQuery(GetPokemon);
        const {data: {pokemons = []} ={}, loading, error} = useQuery(GetPokemon);
        
        if(loading)return <p>loading data....</p>
        if(error)return <p>data gagal load.. {`Error: ${error_massage}`}</p>
        // if(data)return <p>data berhasil load..</p>

        let history = useHistory();

        function handleClick(name) {
            history.push("../pages/Detail/" + name );
        }

        // const [nama, setNama] = useState('a');
        // function setNama(pokemon){
        //     console.log(pokemon)
        // }
        // const setNama = (name) => {
            
        //   };

        // console.log(pokemons)

        return (
            <div class="row">
                {pokemons && pokemons.results && pokemons.results.map((pokemon, index) => 
                    (
                        
                            <div class="col-md-4">
                                <div key={index} class="card w-75 my-5">
                                    {/* <img src={pokemon.image} width="100" height="100"></img> */}
                                    <img src={pokemon.image} class="card-img-top h-50" alt="Card image cap"/>
                                    <div class="card-body border">
                                        {/* <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
                                        <div class="row">
                                            <div class="col">
                                                <p>{pokemon.name}</p>
                                            </div>
                                            <div class="col float-right">
                                                <Router>
                                                    <button type="button" class="btn btn-primary"
                                                        onClick={() => handleClick(pokemon.name)}>
                                                            {/* <span class="text-white"> */}
                                                                <Link to={`/pages/Detail/${pokemon.name}`}>
                                                                    <span class="text-white">
                                                                        Detail
                                                                    </span>
                                                                </Link>
                                                            {/* </span> */}
                                                    </button>
                                                </Router>
                                            </div>
                                        </div>
                                        {/* <Button href="../pages/Detail" color="primary">
                                        Detail
                                        </Button> */}
                                        {/* <Route path="/pages/Detail" component={DetailContainer}/> */}
                                    </div>
                                </div>
                            </div>
                    ))}
            </div>
        )
    }