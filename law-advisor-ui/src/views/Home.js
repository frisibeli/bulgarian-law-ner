import React from 'react'

import { DataSearch, ReactiveList } from '@appbaseio/reactivesearch';
import { Link } from 'react-router-dom';
import ResultCard from '../components/ResultCard'
import { Grid } from '@material-ui/core'

const renderResponse = res => {
    return (
        <Grid key={res._id} item xs={12}>
            <ResultCard responseItem={res} />
        </Grid>
    )
  }

const Home = props => (
    <div>
        <main id="home">
            <DataSearch
            autoFocus={true}
            componentId="SearchSensor"
            dataField={[
                'entities.REF-LAW', 
                'entities.REF-DOC', 
                'entities.ORG-COURT', 
                'entities.ORG-CMPNY',
                'entities.LOC-CITY'
            ]}
            fieldWeights={[2, 2, 2, 2, 1]}
            placeholder="Задай правен въпрос, а ние ще опитаме да намерим отговор за него"
            autosuggest={true}
            defaultSuggestions={[
                { label: 'Songwriting', value: 'Songwriting' },
                { label: 'Musicians', value: 'Musicians' },
            ]}
            highlight={true}
            highlightField="group_city"
            queryFormat="and"
            fuzziness={1}
            debounce={200}
            react={{
                and: ['SearchResult'],
            }}
            size={10}
            URLParams={true}
            />

            <ReactiveList
                componentId="SearchResult"
                renderResultStats={function(stats) {
                    return `Това са ${stats.displayedResults} от общо ${stats.numberOfResults} резултата, получени за ${
                        stats.time
                    } ms`;
                }}
                react={{
                    and: ['SearchSensor'],
                }}
                infiniteScroll={true}
                render={({ loading, error, data }) => {
                    if (loading) {
                        return <div>Зареждане на резултати</div>;
                    }
                    if (error) {
                        return <div>Нещо се счупи. {JSON.stringify(error)}</div>;
                    }
                    return (
                        <Grid id="results" container spacing={3}>
                            {data.map(renderResponse)}
                        </Grid>
                    );
                }}
            />
        </main>
    </div>
)

export default Home
