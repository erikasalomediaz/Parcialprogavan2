import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';
import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';


import Menu from './Componentes/Organismos/Menu'
import { Home, Listado, NotFound, Detalle, Moves } from './Componentes/Pages'
import { Switch, Route, 
  
  Link, useRouteMatch } from "react-router-dom";
import {useSelector} from 'react-redux';
import { Spinner } from './Componentes/Atomos'
function App() {


//aca uso mi appducks porque es el nombre en el index de mis Ducks
 const {ducksgral} = useSelector(state=>state);
 const {appName, loading, error,errorMsg} = ducksgral;

  return (


    <div className="App">
      <h2>Pokemon Web</h2>

      <Menu></Menu>
      {loading && console.log(loading)}
       
       {loading && <Spinner  ></Spinner>}


      <Switch>
        <Route exact path="/">
          <Home></Home>
        </Route>
        <Route path="/Listado">
          <Listado></Listado>
        </Route>
        <Route path="/Detalle/:id">
          <Detalle></Detalle>
        </Route>
        <Route path="/Moves/:id">
          <Moves />
        </Route>

        <Route>
          <NotFound></NotFound>
        </Route>

      </Switch>

    </div>


  );
}

export default App;
