import React, {useState, useEffect} from 'react';
import { useParams } from "react-router-dom";
import Document from '../components/Document'

function ViewDocument () {
    let [isLoading, setIsLoading] = useState(false)
    let [data, setData] = useState({})
    let {id, type} = useParams()

    async function fetchData() {
        setIsLoading(true)
        await fetch(`http://localhost:9200/law_dataset/${type}/${id}`)
        .then(res => res.json())
        .then(data => {
            setData(data._source)
            setIsLoading(false)
        }).catch(err => {
            console.error(err)
            setIsLoading(false)
        })
    }

    useEffect(() => {
        fetchData()
    }, [])

    return (
        <div>
            {isLoading ? 
            <div>Loading...</div>
            :<div>
                <h1>Document title here</h1>
            <Document entities={data.entities_spans}>{data.doc}</Document>
            </div>}
        </div>
    );
}

export default ViewDocument;
