import React from 'react';

function Me(props) {
    function clickEvent(){
        console.log("Clicked")
    }
  return (
    <div>
      Me
      <p>Name: {props.name}</p>
    </div>
  );
}

export default Me;
