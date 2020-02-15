import React from 'react'
import Reference from './Reference'
import {Modal, Paper, Button} from '@material-ui/core'
import { mapEntityTypeToName } from '../mappers/entityMappers'

function createRegexFromEntity(entityString){
    let pattern = `(\\s?${entityString.replace('.', '\\.').replace(/\s/g, "\\s*")}(?:\\s|[,.!?\\-]))`
    console.log(pattern)
    return new RegExp(pattern, 'gim')
}

function testPatternsOverString(patterns, string) {
    for (const pattern of patterns) {
        if(pattern.pattern.test(string)) {
            return pattern.entity
        }
    }

    return false
}

function highlightTextSpanIfEntity(part, patterns, childrenProps) {
    let entity = testPatternsOverString(patterns, part.toLowerCase())
    if(entity){
        return <Reference entity={entity} {...childrenProps}>{part}</Reference>
    }
    return part
}

function getHighlightedText(text, entities=[], childrenProps={}) {
    let parts = [text];
    let patterns = []

    entities.forEach(entity => {
        let pattern = createRegexFromEntity(entity.text)
        patterns.push({pattern, entity})

        let newParts = []

        parts.forEach(part => {
            let entityParts = part.split(pattern);
            newParts = [...newParts, ...entityParts]
        })

        parts = newParts
    })

    return <span> { parts.map((part, i) => highlightTextSpanIfEntity(part, patterns, childrenProps))
    } </span>;
}

export default function Document({children = "", entities = []}) {
    const [open, setOpen] = React.useState(false);
    const [entityInfo, setEntityInfo] = React.useState({});

    const handleOpen = (entity) => {
        setOpen(true);
        setEntityInfo(entity)
    };

    const handleClose = () => {
        setOpen(false);
    };

    const childrenProps = {
        handleOpen
    }
    
    return (
        <Paper id="document-paper">
            <pre>{getHighlightedText(children, entities, childrenProps)}</pre>
            <Modal
                aria-labelledby="modal-title"
                aria-describedby="modal-description"
                open={open}
                disableAutoFocus={true}
                onClose={handleClose}
            >
                <div className="ref-modal">
                    <Paper className="modal-body">
                        <h2 id="modal-title">{`${mapEntityTypeToName(entityInfo.type)}: ${entityInfo.text}`}</h2>
                        <p id="modal-description">
                            Зареждане на повече информация за <strong>{entityInfo.text}</strong>...
                        </p>
                        <Button href={`/?SearchSensor="${entityInfo.text}"`} variant="contained" color="primary">Потърси повече</Button>
                    </Paper>
                </div>
            </Modal>
        </Paper>
    )
}