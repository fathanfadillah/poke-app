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
import {HomeContainer} from './pages/Home';
import SidebarExampleDimmed from './pages/Navbar';
import { MDBBtn, MDBIcon } from 'mdbreact';
import { Navbar, Nav, NavDropdown, Form, FormControl, Button, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import "@fortawesome/fontawesome-free/css/all.min.css";


function App() {
  const client = new ApolloClient({
    uri : 'https://graphql-pokeapi.vercel.app/api/graphql'
  });
  // const [Name, setName] = useState('')

  return (
    <Router>
     <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Navbar.Brand><Link to={`/`} style={{textDecoration: 'none'}} className="cyan-text"><MDBIcon fab icon="phoenix-squadron" /></Link></Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link><Link to={`/pages/List`}>List</Link></Nav.Link>
          <Nav.Link><Link to={`/pages/MyList`}>My Pokemon</Link></Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
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
              <Route exact path="/" component={HomeContainer}/>
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
