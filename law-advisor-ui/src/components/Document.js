import React from 'react'

/*
export default function Document({children = "", entities = []}) {
    console.log(HTMLSanitizeText(children))

    console.log(entities.map(e => e.text))

    return (
        <Highlighter 
            searchWords={entities.map(e => e.text)} 
            textToHighlight={HTMLSanitizeText(children)} />
    )
}
*/

function createRegexFromEntity(entityString){
    let pattern = `(\\s?${entityString.replace('.', '\\.').replace(/\s/g, "\\s*")}(?:\\s|[,.!?\\-]))`
    console.log(pattern)
    return new RegExp(pattern, 'gim')
}

function testPatternsOverString(patterns, string) {
    for (const pattern of patterns) {
        if(pattern.test(string)) {
            return true
        }
    }

    return false
}

function getHighlightedText(text, higlights=[]) {
    let parts = [text];
    let patterns = []

    higlights.forEach(highlight => {
        let pattern = createRegexFromEntity(highlight)
        patterns.push(pattern)

        let newParts = []

        parts.forEach(part => {
            let highlightParts = part.split(pattern);
            newParts = [...newParts, ...highlightParts]
        })

        parts = newParts
    })

    console.log(parts)
    return <span> { parts.map((part, i) => 
        <span key={i} style={testPatternsOverString(patterns, part.toLowerCase()) ? { fontWeight: 'bold' } : {} }>
            { part }
        </span>)
    } </span>;
}

export default function Document({children = "", entities = []}) {
    let ent = entities.map(e => e.text)

    let test = []
    if(ent.length > 0) {
        for (let i = 0; i < 60; i++) {
            test.push(ent[i])
        }
    }

    return (
        <pre>{getHighlightedText(children, ent)}</pre>
    )
}