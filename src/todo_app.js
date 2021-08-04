import React, { Component } from 'react'

class Todoapp extends Component{
    constructor(){
    super()
    this.state = {arr:[]} 
    }


    add = () =>{
        var val = this.val //getting the final (Onchange) input from the field
        this.setState({arr:this.state.arr.concat(val.target.value)})
    }

    remove = (i) => () =>{
        this.state.arr.splice(i,1) 
        this.setState({arr:this.state.arr})
    }

    render(){
        return(
        <>
        <h1>T O ~ D O</h1>
        <input type="text" onChange={a => this.val = a}></input>
        <button onClick={this.add}>Add task</button>    
        <ul>
            {this.state.arr.map((e)=>(
                <li style={{listStyleType:'none'}}>
                    {e}     
                <>
                <button onClick={this.remove(this.state.arr.indexOf(e))}>X</button>
                </>
                </li> 
            ))}
        </ul>    
        </>)
        
    }


}

export default Todoapp