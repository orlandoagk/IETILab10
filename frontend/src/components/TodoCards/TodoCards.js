import React from 'react'
import Cards from './Cards'

class TodoCards extends React.Component{
    

    render(){
        const {data} = this.props;
        return(
            <div>
                {data.map((card,index)=>{
                    return(
                        <Cards key={index} info={card}></Cards>
                    )
                })}
                
            </div>
        )
    }
}

export default TodoCards;