import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  return (
    // Instead of using React.Fragment, you can also use something like this: <></>
    // What is use of Fragment? It wraps the content without adding a extra node
    <React.Fragment>
      <h1>Healthy Food</h1>
      <ul className="list-group">
        <li className="list-group-item">Dal</li>
        <li className="list-group-item">Green veggies</li>
        <li className="list-group-item">Roti</li>
        <li className="list-group-item">Salad</li>
        <li className="list-group-item">Milk</li>
      </ul>
    </React.Fragment>
  );
}

export default App;
