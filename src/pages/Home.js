import React , { Fragment } from 'react';
import { Image } from 'react-bootstrap';
import { MDBContainer, MDBBtn  } from 'mdbreact';
import { useHistory } from "react-router-dom";

export const HomeContainer = () => {
    // const client = new ApolloClient({
    //     uri : 'https://graphql-pokeapi.vercel.app/api/graphql'
    //   });
    let history = useHistory();

    function Berburu(){
        history.push("/pages/List");
    }

    return (
        <MDBContainer className="d-flex justify-content-center">
            <div className="">
                <Image src="/pokeapi.png"/>
                <div className="mt-5 text-center">
                    <Fragment>
                        <MDBBtn gradient="peach" onClick={Berburu}>Ayo Berburu</MDBBtn>
                    </Fragment>
                </div>
            </div>
        </MDBContainer>    
    )
}