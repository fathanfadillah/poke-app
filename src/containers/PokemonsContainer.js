    import React, { useState, Fragment } from 'react';
    import {useQuery} from '@apollo/react-hooks';
    import {GetPokemon} from '../graphql/get-pokemons';
    import {DetailContainer} from '../pages/Detail';
    import {BrowserRouter as Router, Link , Route } from 'react-router-dom'; 
    import { Button } from 'semantic-ui-react'
    import { useHistory } from "react-router-dom";
    import { MDBBtn, MDBIcon, MDBContainer } from 'mdbreact';
    import { MDBSpinner } from 'mdbreact';
    import { Popup, Card, Image, Rating } from 'semantic-ui-react'



    export const PokemonsContainer = (props) => {
        // const {data: {pokemons = []} ={} } = useQuery(GetPokemon);
        const {data: {pokemons = []} ={}, loading, error} = useQuery(GetPokemon);
        
        if(loading)return(
            <div className="d-flex justify-content-center">
                <div className="spinner-border fast text-info" role="status">
                    <span className="sr-only">Loading...</span>
                </div>
            </div>
        )
    

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
                                <div key={index} class="card w-75 my-5 bg-dark border border-5 rounded-3" style={{borderRadius: 20 + 'px'}}>
                                    {/* <img src={pokemon.image} width="100" height="100"></img> */}
                                    <img src={pokemon.image} class="card-img-top h-50" alt="Card image cap"/>
                                    <div class="card-body border">
                                        {/* <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
                                        <div class="row">
                                            <div class="col">
                                                <Popup
                                                    trigger={
                                                        <p className="text-capitalize text-white">{pokemon.name}</p>
                                                    }
                                                >
                                                    <Popup.Header>Message</Popup.Header>
                                                    <Popup.Content>
                                                        Are you sure that you want catch this pokemon ? 
                                                        <br /><br />
                                                        Please click the right button 
                                                    </Popup.Content>
                                                </Popup>
                                            </div>
                                            <div class="col">
                                                <Router>
                                                    <span className="d-flex justify-content-end">
                                                        <Fragment>
                                                            <Link to={`/pages/Detail/${pokemon.name}`} onClick={() => handleClick(pokemon.name)}>
                                                                    <MDBIcon far icon="hand-rock" color="danger"/>
                                                            </Link>    
                                                        </Fragment>
                                                    </span>
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