import {entityTypeToTextBG, entityTypeToClassName} from '../constants/entities'

export function mapEntityTypeToName(type) {
    if(type in entityTypeToTextBG) {
        return entityTypeToTextBG[type]
    }

    else return type;
}

export function mapEntityTypeToClassName(entityType) {
    if(entityType in entityTypeToClassName) {
        return entityTypeToClassName[entityType]
    }

    return ""
}