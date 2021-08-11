import React, { createContext, useReducer } from "react";
import Navbar from './components/Navbar';
import {Route , Switch} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Errorpage from "./components/Errorpage";
import Logout from './components/Logout';
import {initialState,reducer} from "./reducer/UseReducer";

export const UserContext = createContext();
const App = ()=>{
  //1. ContextAPI
 const [state,dispatch]= useReducer(reducer, initialState)
  return(
    <>
    <UserContext.Provider value={{state,dispatch}}>
    <Navbar/>
    <Switch>
    <Route exact path = "/" component={Home} />
    <Route exact path = "/about" component={About} />
    <Route exact path = "/contact" component={Contact}/>
    <Route exact path = "/login" component={Login}/>
    <Route exact path = "/signup" component={Signup} />
    <Route exact path = "/logout" component={Logout} />
    <Route component={Errorpage}></Route>
    </Switch>
    </UserContext.Provider>
    </>
  )
}

export default App;
