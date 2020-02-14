import React from 'react'

import { DataSearch, ReactiveList } from '@appbaseio/reactivesearch';
import { Link } from 'react-router-dom';

const renderResponse = res => {
    console.log(res)
    return <Link to={`/view/${res._type}/${res._id}`}><div key={res._id} className="result">{res.doc}</div></Link>
  }

const Home = props => (
    <div>
        <DataSearch
          autoFocus={true}
          componentId="SearchSensor"
          dataField={['entities.REF-LAW', 'entities.LOC-COURT']}
          title="Search"
          fieldWeights={[1, 3]}
          placeholder="Задай правен въпрос, а ние ще опитаме да намерим отговор за него"
          autosuggest={true}
          defaultSuggestions={[
            { label: 'Songwriting', value: 'Songwriting' },
            { label: 'Musicians', value: 'Musicians' },
          ]}
          highlight={true}
          highlightField="group_city"
          queryFormat="or"
          fuzziness={1}
          debounce={200}
          react={{
            and: ['SearchResult'],
          }}
          size={10}
          showFilter={true}
          filterLabel="Venue filter"
          URLParams={true}
        />

        <ReactiveList
          componentId="SearchResult"
          react={{
            and: ['SearchSensor'],
          }}
          renderItem={renderResponse}
        />
    </div>
)

export default Home
