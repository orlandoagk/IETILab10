import React from 'react';
import AddTodo from './components/AddTodo/AddTodo'
import './App.css';
import Login from './components/Login/Login';
import LoggedView from './components/LoggedView/LoggedView'
import Register from './components/Register/Register'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import axios from 'axios';


class App extends React.Component{
  state = {
    "Usuario":null,
    "IsLogged":false,
    "data":""
  }

  addNewTask = (task) =>{
    axios.post("https://backendietilab8.herokuapp.com/api/addTask",task,{ headers: { authorization:localStorage.getItem("token") } })
    .then(response=>{
        console.log(response)
        this.setState({
          "data":response
        })
    }).catch(error=>{
        console.log(error)
    })
  }

  changeLogin = (bool,user) =>{
    this.setState({
      "Usuario":user,
      "IsLogged":bool
    });

  }

  newTask = (task) =>{
    
    this.setState({
      "data":task
    })
    
  }



  render(){
    let elementRender = null;
    if(!this.state.IsLogged){
      elementRender = <Login handleLogin={this.changeLogin}></Login>
    } else {
      elementRender = <LoggedView addTask={this.state.data} usuario={this.state.Usuario}></LoggedView>
    }

    
    
    return (
      <div className="App">
        <Router>
        <Switch>
          <Route exact path="/" render={()=>elementRender}/>
          <Route path="/addTodo">
            <AddTodo newTask={this.addNewTask}/>
          </Route>
          <Route path="/register">
            <Register doRegister={this.changeLogin}/>
          </Route>
        
        
        </Switch>
        </Router>
        
      </div>
    );
  }
}

export default App;
