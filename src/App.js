import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React,{component} from "react"
import NavBar from './components/NavBar'
import ProductList from './components/ProductList'
import Cart from './components/Cart/Cart'
import Details from './components/Details'
import PageNotFound from './components/PageNotFound'
import {Switch,Route} from 'react-router-dom'
import Modal from './components/modal'
function App() {
  
  return (
    <React.Fragment>
       <NavBar/>
       <Switch>
         <Route exact path = '/' component = {ProductList}></Route>
         <Route path = '/details' component = {Details}></Route>
         <Route path = '/cart' component = {Cart}></Route>
         <Route  component = {PageNotFound}></Route>
       </Switch>
       <Modal></Modal>
    </React.Fragment>
  );
}

export default App;
