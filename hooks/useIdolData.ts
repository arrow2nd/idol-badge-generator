import { useEffect, useState } from 'react'
import { Idol } from '../types/idol'

export const useIdolData = (name: string): Idol | undefined => {
  const [idolData, setIdolData] = useState<Idol>()

  useEffect(() => {
    if (!name) return

    const query = `
    PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
    PREFIX imas: <https://sparql.crssnky.xyz/imasrdf/URIs/imas-schema.ttl#>
    PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>
    
    SELECT DISTINCT ?name ?hex ?url
    
    WHERE {
      ?d rdf:type ?type;
           rdfs:label ?name;
           imas:Color ?hex.
    OPTIONAL { ?d imas:IdolListURL ?url}.
    FILTER(CONTAINS(?name, "${name}")).
    }  
    `

    const url = `https://sparql.crssnky.xyz/spql/imas/query?output=json&query=${encodeURIComponent(
      query
    )}`

    fetch(url)
      .then((res) => res.json())
      .then((json) => {
        const binding = json.results.bindings[0]

        const results: Idol = {
          name: binding.name.value,
          hex: binding.hex.value,
          url: binding.url?.value || 'https://idolmaster-official.jp/'
        }

        setIdolData(results)
      })
  }, [name])

  return idolData
}
