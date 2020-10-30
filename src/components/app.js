import { TextField } from "@material-ui/core";
import React from "react";

export default class App extends React.Component{
  constructor(props){
    super(props);

    this.state = {
      a: 10
    }
  }

  handleA = (e) => {
    this.setState({
      a: e.target.value
    })
  }

  render(){
    return(
      <div>
        <TextField 
          value={this.state.a}
          onChange={(e)=>{
            this.handleA(e)
          }}
        />
        {this.state.a}
      </div>
    )
  }
}