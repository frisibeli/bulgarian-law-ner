export function elasticItemToSearchResult(elasticItem) {
    let title = `${elasticItem.doc.substr(0, 40)}...`
    let link = `/view/${elasticItem._type}/${elasticItem._id}`
    let court = ("ORG-COURT" in elasticItem.entities) ? elasticItem.entities['ORG-COURT'][0] : "ВКС"
    let laws = ("REF-LAW" in elasticItem.entities) ? elasticItem.entities['REF-LAW'].slice(0, 5) : []

    return {
        type: "Съдебно решение",
        title,
        laws,
        court,
        link
    }
}