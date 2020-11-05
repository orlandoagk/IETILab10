import React from 'react'
import './Register.css'
import Container from '@material-ui/core/Container';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import {withRouter} from 'react-router-dom';


class Register extends React.Component{
    state = {
        "username":"",
        "email":"",
        "password":"",
        "confirmPasword":""

    }

    

    handlePassword = (e) =>{
        this.setState({
            "password":e.target.value
        })

    }

    handleUsername = (e) =>{
        this.setState({
            "username":e.target.value
        })

    }

    handleEmail = (e) =>{
        this.setState({
            "email":e.target.value
        })
    }

    handlePasswordConfirm = (e) =>{
        this.setState({
            "confirmPasword":e.target.value
        })
    }

    handleSubmit = (e) =>{
        const {username,password,confirmPasword} = this.state;
        if(!localStorage.getItem(username) && password.localeCompare(confirmPasword)===0){
            localStorage.setItem(username,password)
            this.props.doRegister(true,username)
            this.props.history.push("/")

        } else {
            alert("This user is registered yet or the password is not the same at the confirmation")
        }

    }


    render(){
        return(
            <Container className='Box' variant="contained">
                
                <LockOutlinedIcon />
                
                <Typography component="h1" variant="h5">
                    Registration
                </Typography>
                <form onSubmit={this.handleSubmit}>
                    <TextField required name="username" label="Username" id="username" autoComplete="username" onChange={this.handleUsername}/>
                    <br/>
                    <TextField required name="email" label="Email Responsible" id="email" autoComplete="email" onChange={this.handleEmail}/>
                    <br/>
                    <TextField required name="password" label="Password" id="password" type="password" autoComplete="current-password" onChange={this.handlePassword}/>
                    <br/>
                    <TextField required name="passwordConfirm" label="Password Confirm" id="passwordConfirm" type="password" autoComplete="current-password" onChange={this.handlePasswordConfirm}/>
                    <br/>
                    <br/>
                    <Button type="submit" variant="contained" color="primary">Save</Button>
                    

                </form>
            </Container>
        )
    }
    
}

export default withRouter(Register);