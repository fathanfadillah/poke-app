import { useQuery } from '@apollo/client';
import React, { useState, useEffect } from 'react';
import { useHistory } from "react-router-dom";
// import ApolloClient from 'apollo-boost'; 
// import { ApolloProvider } from "@apollo/client";

export const MyListContainer = () => {
    
    let init = JSON.parse(localStorage.getItem('pok'));
    const [myPok, setMyPok] = useState(init)
    console.log('my',myPok)
    if(init == null || myPok.length == 0){
        return <div>Blom punya pokemon</div>
    }
    // const [isLoading, setIsLoading] = useState(false)
    // console.log('my',myPok)

    // const [myPok, setMyPok] = useState([]);
    // const [isRequesting, setIsRequesting] = useState(true);
    // const [forceUpdate, setForceUpdate] = useState(0);
    // console.log('my',myPok)

    // useEffect(()=>{
        
    // },[myPok]);

    // async function setupContent() {
    //     if(isRequesting) {
    //         // console.log(localStorage.getItem('local'))
    //         if(localStorage.getItem('local') != null) {
    //             console.log('get',myPok)
    //             if(myPok == []) {
    //                 setMyPok(JSON.parse(localStorage.getItem('local')));
    //                 await setForceUpdate(1);
    //                 // console.log('setup',myPok)
    //             }
    //             else {
    //                 setIsRequesting(false);
    //             }
    //         }
            
    //         console.log('m',myPok)
    //     }
    // }

    // function deleteItem(y){
    //     let itemArray = myPok;
    //     itemArray.splice(y, 1);
    //     console.log(itemArray)
    //     setMyPok(itemArray);
    //     localStorage.setItem('local',JSON.stringify(myPok));
    // }


//    function Load(){
//        setIsLoading(true)
        // let props = localStorage.getItem('pok');
        // setMyPok(JSON.parse(localStorage.getItem('local')))
        // console.log('m',myPok)

        // console.log(props)
        // props = JSON.parse(props)
        // console.log('old',props)
        // console.log('old',props.sprites.front_de)
        // console.log('gambar',props.sprites.front_default)
        // let history = useHistory();
//    }
// console.log(props)

    // useEffect(()=>{
    //     Load()
    // },[myPok, isLoading])


    function Buang(y){
        // const apus = myPok.splice(y, 1);
        console.log('y',y)
        const apus = myPok.filter(filterPok => filterPok.id != y)
        console.log(apus)

        
        console.log('apus',apus)
        localStorage.setItem('pok',JSON.stringify(apus));
        setMyPok(apus)
        // history.push("/pages/MyList");
        // setData([])
    }

    // useEffect(() => {
    //     props = localStorage.getItem('local');
    //     console.log(props)
    //     props = JSON.parse(props)
    //     console.log('old',props)
    //     // This gets called after every render, by default
    //     // (the first one, and every one after that)
    
    //     // If you want to implement componentWillUnmount,
    //     // return a function from here, and React will call
    //     // it prior to unmounting.
    //     return () =>    {
    //             console.log('')
    //         };
    //   })


    return (
        <div>
            my list page
            <br />-------------------
            {myPok.map((x, y)=> 
                        <div key={y}>
                            <span>{y}:{x.name}  </span>
                            <button onClick={() => Buang(x.id)}>Buang</button>
                            <br></br><br></br>
                        </div>
                   ) || ''}
            {/* {myPok?.map((x, y)=> 
                <div key={y}>
                    <span>{y}:{x.name}  </span>
                    <button onClick={() => deleteItem(y)}>Buang</button>
                    <br></br><br></br>
                </div>
            ) } */}
        </div>
    )

    
}