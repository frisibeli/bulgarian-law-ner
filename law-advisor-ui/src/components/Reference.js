import React from 'react'
import Tooltip from '@material-ui/core/Tooltip';
import { mapEntityTypeToName, mapEntityTypeToClassName } from '../mappers/entityMappers';

export default function Reference({children="", entity={}, handleOpen}) {
    let className = mapEntityTypeToClassName(entity.type)

    return (
        <Tooltip title={mapEntityTypeToName(entity.type)}>
            <span onClick={()=>handleOpen(entity)} className={`entity ${className}`}>{children}</span>
        </Tooltip>
    )
}