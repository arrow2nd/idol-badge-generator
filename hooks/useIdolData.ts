import { useEffect, useState } from 'react'
import { Idol } from '../types/idol'
import { Blands } from '../data/blands'

export const useIdolData = (name: string): Idol | undefined => {
  const [idolData, setIdolData] = useState<Idol>()

  useEffect(() => {
    if (!name) return

    const query = `
    PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
    PREFIX imas: <https://sparql.crssnky.xyz/imasrdf/URIs/imas-schema.ttl#>
    PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>
    
    SELECT DISTINCT ?name ?bland ?hex ?url
    
    WHERE {
      ?d rdf:type ?type;
         imas:Brand ?bland;
         rdfs:label ?name.
      FILTER(CONTAINS(?name, "${name}"))
      OPTIONAL { ?d imas:Color ?hex.}
      OPTIONAL { ?d imas:IdolListURL ?url}
    }
    `

    const url = `https://sparql.crssnky.xyz/spql/imas/query?output=json&query=${encodeURIComponent(
      query
    )}`

    fetch(url)
      .then((res) => res.json())
      .then((json) => {
        // データが無い
        if (!json?.results || json.results.bindings.length <= 0) return

        const binding = json.results.bindings[0]
        const bland = Blands[binding.bland.value] ?? Blands['Other']

        setIdolData({
          bland: bland.name,
          name: binding.name.value,
          hex: binding.hex?.value || bland.hex,
          url: binding.url?.value || bland.url
        })
      })
      .catch((_err) => {
        alert(
          'im@sparqlにアクセスできませんでした。\n時間をおいてから再度お試しください。'
        )
      })
  }, [name])

  return idolData
}
