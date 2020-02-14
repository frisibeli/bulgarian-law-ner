import React from 'react';
import './App.css';
import RouterConfig from './Router'
import { BrowserRouter as Router } from "react-router-dom";
import { ReactiveBase } from '@appbaseio/reactivesearch';

function App() {
  return (
    <Router>
      <ReactiveBase app="law_dataset" url="http://localhost:9200">
        <RouterConfig />
      </ReactiveBase>
    </Router>
  );
}

export default App;


// <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>