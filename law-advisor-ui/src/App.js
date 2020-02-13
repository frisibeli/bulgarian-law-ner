import React from 'react';
import logo from './logo.svg';
import './App.css';
import { ReactiveBase, CategorySearch, DataSearch, ReactiveList } from '@appbaseio/reactivesearch';

function App() {
  return (
    <ReactiveBase app="law_dataset" url="http://localhost:9200">
				other components will go here.
				<div>Hello ReactiveSearch!</div>
        <DataSearch
          componentId="SearchSensor"
          dataField={['entities.REF-LAW']}
          title="Search"
          defaultValue="Тест"
          fieldWeights={[1, 2]}
          placeholder="Search for cities or venues"
          autosuggest={true}
          defaultSuggestions={[
            { label: 'Songwriting', value: 'Songwriting' },
            { label: 'Musicians', value: 'Musicians' },
          ]}
          highlight={true}
          highlightField="group_city"
          queryFormat="or"
          fuzziness={0}
          debounce={100}
          react={{
            and: ['SearchResult'],
          }}
          size={10}
          showFilter={true}
          filterLabel="Venue filter"
          URLParams={false}
        />

        <ReactiveList
          componentId="SearchResult"
          react={{
            and: ['SearchSensor'],
          }}
          renderItem={res => <div>{res.doc}</div>}
        />

			</ReactiveBase>
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