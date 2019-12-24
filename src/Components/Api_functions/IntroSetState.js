import React, { Component } from 'react'

class IntroSetState extends Component {
    constructor(){
        super();
        this.state={
            msg: "This is intro of setState functions"
        };
        this.updateSetStae=this.updateSetStae.bind(this);
    }
   
    updateSetStae(){
        this.setState(
            {
                msg: "This is updated setState Result"
            }
        );
    }

    render() {
        return (
            <div>
               <h4>About setState() function</h4> 
               <p>The function does not always replace or update the state</p>
               <h4>{this.state.msg}</h4>
               <button onClick={this.updateSetStae}> Set State </button>
               
            </div>
        )
    }
}
export default IntroSetState;