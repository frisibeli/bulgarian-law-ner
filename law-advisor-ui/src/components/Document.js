import React from 'react'
import Highlighter from "react-highlight-words";

function HTMLSanitizeText(text) {
    let htmlElement = document.createElement('span')
    htmlElement.innerHTML = text
    return htmlElement.innerText
}

export default function Document({children = "", entities = []}) {
    // let text = HTMLSanitizeText(children.slice()).replace(/(\n){1,5}/g, ' ').trim()
    let searchForWords = []

    entities.forEach(entity => {
        //let tx = text.substr(entity.offset_start, entity.offset_end-entity.offset_start).replace(/\t/g, '')
        searchForWords.push(entity.text)
    })

    
    
    return (
        <Highlighter searchWords={entities.map(e => e.text)} textToHighlight={children} />
    )
}