import React from "react";
import "./App.css";
import ComponentApi from "./Components/Component_Api";
import ComponentLifeCycle from './Components/ComponentLifeCycle'
import LifeCycle from './LifeCycle/LifeCycle';
function App() {
  return (
    <div className="App">
      <ComponentApi></ComponentApi>
      <br></br>
      <ComponentLifeCycle></ComponentLifeCycle>
      <br></br>
      <LifeCycle></LifeCycle>
    </div>
  );
}

export default App;
