// import logo from './logo.svg';
// import './App.css';
import {React, useState} from 'react';
import ApolloClient from 'apollo-boost'; 
import { ApolloProvider } from "@apollo/react-hooks";
import { PokemonsContainer } from './containers/PokemonsContainer';
import {BrowserRouter as Router, Link , Route, Switch } from 'react-router-dom'; 
import {ListContainer} from './pages/List'
import {MyListContainer} from './pages/MyList'
import {DetailContainer} from './pages/Detail';
import SidebarExampleDimmed from './pages/Navbar';


function App() {
  const client = new ApolloClient({
    uri : 'https://graphql-pokeapi.vercel.app/api/graphql'
  });
  // const [Name, setName] = useState('')

  return (
    <Router>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Pokemon</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <Link to={`/pages/List`}>List</Link>
        </li>
        <li class="nav-item">
          <Link to={`/pages/MyList`}>my pokemon</Link>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Pricing</a>
        </li>
        <li class="nav-item">
          <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
      {/* <ul>
        <li><Link to={`/pages/List`}>List</Link>
            
        </li>
        <li>
          <Link to={`/pages/MyList`}>my pokemon</Link>
        </li>
      </ul> */}
      {/* <br></br> */}
      <div className="container mt-5">
        <ApolloProvider client={client}>
              <Route path="/pages/List" component={ListContainer}/>
              <Route path="/pages/MyList" component={MyListContainer}/>
              <Route exact path="/pages/Detail/:PokemonName/" component={DetailContainer}/>
        </ApolloProvider>                   
      </div>
      {/* <ApolloProvider client={client}>
        <main>
          <span>
           <PokemonsContainer />
          </span>
        </main>
      </ApolloProvider> */}
    </Router>
    // <div className="App">
    //   tes
    //  </div>
  );
}

export default App;
