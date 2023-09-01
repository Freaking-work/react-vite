import React, { Component } from 'react'

export default class RenderingComponent extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         text: "condition    ",
         show:true,
         fruits:["Apple","Orange","Grapes","Mango","Apple"]
      }
    }

    changeShow(){
        this.setState({
            show: !this.state.show
        })
    }

  render() {
    var variable=this.state.show ? 'Hide':'Show'
    return (
        <>
        <h1>Fruits</h1>
        {
            this.state.fruits.map((fruit,index)=>{
                return <li key={index}>{fruit}</li>
            })
        }
      <div>RenderingComponent</div>
      {this.state.show&&this.state.text}
      <button onClick={()=>this.changeShow()}>{variable}</button>

      {/* <button onClick={()=>this.changeShow()}>{this.state.show ? 'Hide':'Show'}</button> */}
      </>
    )
  }
}
