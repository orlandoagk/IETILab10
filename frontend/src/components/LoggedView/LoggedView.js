import React from 'react'
import TodoCards from '../TodoCards/TodoCards'
import MyDrawer from '../Drawer/Drawer';
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';
import {withRouter} from 'react-router-dom';
import MyModal from './MyModal'
import axios from 'axios';

class LoggedView extends React.Component{

    state={
        "cards":[]
    }

    componentDidMount = () =>{
        this.getAllData();
    }

    componentDidUpdate = () =>{
        this.getAllData();
    }

    
    
    

    getAllData = async () => {
        console.log("Entre acá");
        let arreglo = [];
        await axios.get("https://backendietilab8.herokuapp.com/api/getTasks",{ headers: { authorization:localStorage.getItem("token") } })
              .then(response =>{
                arreglo = response.data
              })
              .catch(error=>{
                console.log(error)
              })
        console.log(arreglo);
        this.setState({
          "cards":arreglo
        })
      }

    probando = () =>{
        this.props.history.push("/addTodo")

    }

    handleFilter = () =>{
        this.cleanAllFilter()

    }

    cleanAllFilter = () =>{
        this.setState({
            "cards":this.props.todoData
        })
    }

    render(){
        return(
            <div>
                <MyDrawer usuario={this.props.usuario}></MyDrawer>
                <TodoCards data={this.state.cards}></TodoCards>
                <MyModal applyFilter={this.handleFilter}></MyModal>
                <Fab color="primary" aria-label="add" onClick={this.probando}><AddIcon/></Fab>
            </div>
        )
    }
}

export default withRouter(LoggedView);

