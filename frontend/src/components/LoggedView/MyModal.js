import React from 'react'
import Modal from '@material-ui/core/Modal'
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography'
import Select from '@material-ui/core/Select'
import InputLabel from '@material-ui/core/InputLabel';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import moment from "moment";
import Button from '@material-ui/core/Button';

class MyModal extends React.Component{
    state = {
        "open":false,
        "responsible":"",
        "dueDate":moment(),
        "status":""
    }

    handleResponsible = (e) =>{
        this.setState({
            "responsible":e.target.value
        })
    }

    handleDueDate = (date) =>{
        this.setState({
            "dueDate":date
        })
    }

    handleStatus = (e) =>{
        this.setState({
            "status":e.target.value
        })
    }

    handleOpen = ()=>{
        this.setState({
            "open":true
        })
    }

    handleClose = () =>{
        this.setState({
            "open":false
        })
    }

    render(){

        return(
            <div>
            <Button variant="outlined" color="primary" onClick={this.handleOpen}>Filter</Button>
            <Modal open={this.state.open} onClose={this.handleClose}>
                <Container className='Box' variant="contained">
                
            
            
                <Typography component="h1" variant="h5">
                    Filters
                </Typography>
                <form>
                
                    <TextField value={this.state.responsible} name="responsible" label="Responsible" id="responsible" autoComplete="responsible" onChange={this.handleResponsible}/>
                    <br/>
                    <br/>
                    <InputLabel htmlFor="stateTodo">Status</InputLabel>
                    <Select value={this.state.status} onChange={this.handleState} inputProps={{
                name: 'status',
                id: 'stateTodo',
              }} required>
                        <option value="ready">Ready</option>
                        <option value="completed">Completed</option>
                        <option selected value="in progress">In Progress</option>
                    </Select>
                    <br/>
                    <br/>
                    <InputLabel htmlFor="due-date">Date</InputLabel>
                    <DatePicker
                            id="due-date"
                            selected={this.state.dueDate}
                            placeholderText="Due Date"
                            onChange={this.handleDatePicker}>
                        </DatePicker>
                    <br/>
                    <br/>
                    <Button color="primary" onClick={this.handleSubmit}>Apply</Button>
                    <br/>
                    <Button color="primary" onClick={this.handleSubmit}>Clear All</Button>
                </form>
            </Container>
            </Modal>
            </div>
        )
    }

}

export default MyModal;