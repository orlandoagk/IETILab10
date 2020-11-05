import React from 'react'
import './Login.css'
import Container from '@material-ui/core/Container';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import {withRouter} from 'react-router-dom';
import axios from 'axios'


class Login extends React.Component{
    state = {
        "username":"",
        "password":""
    }

    handleUsername = (e) =>{
        this.setState({...this,"username":e.target.value})
    }

    handlePassword = (e) =>{
        this.setState({...this,"password":e.target.value})
    }

    handleSubmit = (e) =>{
        e.preventDefault();
        const {username,password} = this.state;
        const {handleLogin} = this.props;
        axios.post('https://backendietilab8.herokuapp.com/user/login', {
            email: username,
            password: password
        })
            .then(function (response) {
                localStorage.setItem("token","Bearer "+response.data.accessToken)
                handleLogin(true,username);
                
            })
            .catch(function (error) {
                alert("El email o contraseña que ingresaste son incorrectos")
            });
    
    }

    register = (e) => {
        e.preventDefault();
        this.props.history.push("/register");
        
    }

    render(){
        
        return(
            <Container className='Box' variant="contained">
                
                <LockOutlinedIcon />
                
                <Typography component="h1" variant="h5">
                    Task Planner
                </Typography>
                <form onSubmit={this.handleSubmit}>
                    <TextField name="email" label="Email" id="email" required autoComplete="email" onChange={this.handleUsername}/>
                    <br/>
                    <TextField name="password" label="Password" id="password" type="password" required autoComplete="current-password" onChange={this.handlePassword}/>
                    <br/>
                    <br/>
                    <Button type="submit" variant="contained" color="primary">Sign In </Button>
                    <Button onClick={this.register} variant="contained" color="secondary">Sign Up </Button>

                </form>
            </Container>
        );
    }
}

export default withRouter(Login);