import {React, useState, setState} from 'react';
import PokemonsContainer  from '../containers/PokemonsContainer';
import {useQuery} from '@apollo/react-hooks';
import {GetMoves} from '../graphql/get-pokemons';
import ApolloClient from 'apollo-boost'; 
import { ApolloProvider } from "@apollo/client";
import { graphql } from 'react-apollo';
import { useHistory } from "react-router-dom";

export const DetailContainer = (props) => {
    console.log('isi pokemon: ', props)
    const Name =  props.match.params.PokemonName;
    console.log('dariLuar: ', Name)
    // console.log('query', props_);
    
    const {data, loading, error } = useQuery(GetMoves, {
        variables: { name : Name},
    });

    // function ()
    const [local, setLocal] = useState()

    let history = useHistory();

    function addList(list) {
        
        console.log('lama',list.name)
        var rand = Math.random() < 0.5;
        console.log(rand)
        if(rand){
            alert('yes dapet')
            var nameBaru = prompt()

            var old = JSON.parse(localStorage.getItem('pok'));
            console.log('o',old)
                                        
            if(old.length == 0 || !old) {
                old = [];
                const id = 1
                list.id = id
                console.log('id',list.id)

            } else {
                list.id = old[old.length-1].id+1
                // list.id = old.id+1
                // console.log('else',list.id)
            }

            let tmp = list
            tmp.name = nameBaru
            console.log('baru',tmp.name)
            localStorage.setItem('pok', JSON.stringify(old.concat(tmp)));
            history.push("/pages/List");
        }else{
            alert('bangsat ngabur')
        }

                           // key                       //concat dengan 
        // list = JSON.stringify(list)
        // localStorage.setItem('local', list)
        // setLocal(list)

    }

    function getList(){

    }
    // if(data.pokemon.types.type.name){
    //     console.log('tipe',data.pokemon.types.type.name)
    // }
    // console.log('data1',data && data.pokemon.types && data.pokemon.types.type && data.pokemon.types.type.name) 
    // console.log('gamabr',data?.pokemon?.types)

    if(loading)return(
        <div className="d-flex justify-content-center">
            <div className="spinner-grow fast text-info" role="status">
                <span className="sr-only">Loading...</span>
            </div>
        </div>
        )
    
    // if(error)return<p>data gagal load.. {`Error: ${error_massage}`}</p>

    return (
        <div>
            <div>
                   {Name} <button onClick={() => addList(data?.pokemon)}>tangkepin</button> 
                    <img src={data.pokemon.sprites.front_default} width="100" height="100" />
                   Tipe:
                   <br />-------------------
                   {data?.pokemon?.types.map((x, y)=>
                        <div key={y}>
                            <span>{x.type.name}</span>
                        </div>
                   )}
                   Moves:
                   <br />-------------------
                   {data?.pokemon?.moves?.map((x, y)=> 
                        <div key={y}>
                            <span>{x.move.name}</span>
                        </div>
                   ) }
            </div>
        </div>
    )
}

// class DetailContainer extends React.Component{
//     render(){
//         // const client = new ApolloClient({
//         //     uri : 'https://graphql-pokeapi.vercel.app/api/graphql'
//         //   });
//         console.log(this.props)
//         let {data} = this.props
        
//         console.log(data)
        
//         return(
//             <div>
//                 {/* <ApolloProvider client={client}> */}
//                 yes
//                 {/* </ApolloProvider> */}
//             </div>
//         )
//     }
// }

// const queryOptions = {
//     options: props => ({
//         variables : {
//             name : props.match.params.PokemonName,
//         },
//     }),
// }

// DetailContainer = graphql(GetMoves, queryOptions)(DetailContainer)
// export default DetailContainer; 