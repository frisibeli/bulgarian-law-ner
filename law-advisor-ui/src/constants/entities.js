const entityTypeToTextBG = {
    'ORG-COURT': 'Съд',
    'DATE': 'Дата',
    'LOC-CTRY': 'Държава',
    'LOC-CITY': 'Град',
    'REF-DOC': 'Юридически документ',
    'REF-LAW': 'Закон',
    'PER-OTH': 'Име на човек',
    'MONEY': 'Парична сума',
    'ORG-CMPNY': 'Фирма',
}

const entityTypeToClassName = {
    'ORG-COURT': 'court',
    'DATE': 'date',
    'LOC-CTRY': 'country',
    'LOC-CITY': 'city',
    'REF-DOC': 'ref-doc',
    'REF-LAW': 'ref-law',
    'PER-OTH': 'person',
    'MONEY': 'money',
}

export {entityTypeToTextBG, entityTypeToClassName}