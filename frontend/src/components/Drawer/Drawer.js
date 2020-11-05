import React from 'react';
import Button from '@material-ui/core/Button'
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import EditIcon from '@material-ui/icons/Edit';
import PersonIcon from '@material-ui/icons/Person';
import './Drawer.css'
import { Card,Typography,CardContent } from '@material-ui/core';

class MyDrawer extends React.Component{
    state = {
        "left":false
    }

    list = (anchor) => (
        <div
          
          role="presentation"
          onClick={this.toggleDrawer(anchor, false)}
          onKeyDown={this.toggleDrawer(anchor, false)}
        >
          <List>
            <Card>
                <CardContent>
                    <PersonIcon/>
                    <Typography variant="h5">{this.props.usuario}</Typography>
                    <EditIcon/>
                    
                </CardContent>
            </Card>
          </List>
        </div>
      );

    toggleDrawer = (anchor, open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
          return;
        }
    
        this.setState({ ...this, [anchor]: open });
      };

    render(){
        let textoMostrar = this.state.left ? "Close" : "Open";
        
        return(
            <div className="Button">
                <Button onClick={this.toggleDrawer("left", true)} variant="contained" color="primary">{textoMostrar}</Button>
                <Drawer anchor="left" open={this.state["left"]} onClose={this.toggleDrawer("left",false)}>
                    {this.list("left")}
                </Drawer>
            </div>
        );
    }


}

export default MyDrawer;