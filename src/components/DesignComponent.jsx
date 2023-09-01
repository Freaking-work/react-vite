import React, { Component } from 'react'
import './DesignComponent.css'

export default class DesignComponent extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         btnstyle:{
            color:"white",
            backgroundColor:"purple",
            borderColor:"white"
         }
         
      }
    }
  render() {
    return (
      <div>
        <button style={this.state.btnstyle}>Button</button><br />
        <button className='button'>Click Here</button><br />
        <button type="button" className="btn btn-outline-primary">Primary</button><br />
<button type="button" className="btn btn-outline-secondary">Secondary</button><br />
<button type="button" className="btn btn-outline-success">Success</button><br />
<button type="button" className="btn btn-outline-danger">Danger</button><br />
<button type="button" className="btn btn-outline-warning">Warning</button><br />
<button type="button" className="btn btn-outline-info">Info</button><br />
<button type="button" className="btn btn-outline-light">Light</button><br />
<button type="button" className="btn btn-outline-dark">Dark</button>
      </div>
    )
  }
}

