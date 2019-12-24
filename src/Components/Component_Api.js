import React, { Component } from "react";
import IntroSetState from "./Api_functions/IntroSetState";
import IntroForceUpdate from "./Api_functions/IntroForceUpdate";
import IntroDomNode from "./Api_functions/IntroDomNode";

class ComponentApi extends Component {
  render() {
    return (
      <div>
        <h1>This is Class Component API functions type</h1>
        <p>React Component API is top level api in React JS it helps us to</p>
        <ul>
          <li>Create HTML element </li>
          <li>Transform/update element</li>
          <li>Reuse the element</li>
        </ul>
        <h3>Following are the three functions in Component API</h3>
        <ol>
          <li>
            setState()
            <IntroSetState></IntroSetState>
          </li>
          <br></br>
          <li>
            foreeUpdate()
            <IntroForceUpdate></IntroForceUpdate>
          </li>
          <br></br>
          <li>
            findDOMNode()
            <IntroDomNode></IntroDomNode>
          </li>
        </ol>
      </div>
    );
  }
}
export default ComponentApi;
