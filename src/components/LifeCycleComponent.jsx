import React, { Component } from 'react'

export default class LifeCycleComponent extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         name:""
      }
      console.log("Constructor is running")
    }

    static getDerivedStateFromProps(props,state){
        console.log("Get Derived")
        return{
            name:props.name
        }
        
    }

    componentDidMount(){
        console.log("DidMount")
    }
  render() {
    console.log("Render")
    return (
      <div>LifeCycleComponent</div>
    )
  }
}
