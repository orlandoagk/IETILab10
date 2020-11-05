import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CheckIcon from '@material-ui/icons/Check';
import AlarmOnIcon from '@material-ui/icons/AlarmOn';
import AutorenewIcon from '@material-ui/icons/Autorenew';
import Typography from '@material-ui/core/Typography';
import './Cards.css'

class Cards extends React.Component{

    render(){
        const {info} = this.props;
        let icon = null;
        if(info.status.localeCompare("completed") === 0){
            icon = <CheckIcon></CheckIcon>
        } else if(info.status.localeCompare("ready") === 0){
            icon = <AlarmOnIcon></AlarmOnIcon>
        } else {
            icon = <AutorenewIcon></AutorenewIcon>
        }
        return(

            <Card className="Root" variant="outlined">
                <CardContent>
                    <div><Typography variant="h5">{info.text}</Typography>{icon}</div>
                    
                    <Typography variant="h5">{info.status} - {info.dueDate}</Typography>
                    <Typography variant="h5">{info.responsible}</Typography>
                </CardContent>
            </Card>
        );
    }
}

export default Cards;