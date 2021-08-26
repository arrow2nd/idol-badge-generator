'use strict'
const fs = require('fs')
const axios = require('axios')

const query = `
PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
PREFIX imas: <https://sparql.crssnky.xyz/imasrdf/URIs/imas-schema.ttl#>
PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>
SELECT DISTINCT ?name ?nameKana ?hex
WHERE {
  ?d rdf:type ?type;
     rdfs:label ?name;
     imas:Color ?hex.     
  FILTER(?type = imas:Idol)

  OPTIONAL{ ?d imas:alternateNameKana ?nameKana }
  OPTIONAL{ ?d imas:nameKana ?nameKana }
  OPTIONAL{ ?d imas:givenNameKana ?nameKana }  
}
`

const url = `https://sparql.crssnky.xyz/spql/imas/query?output=json&query=${encodeURIComponent(
  query
)}`

async function main() {
  const res = await axios.get(url)

  const bindings = res.data.results.bindings.sort((a, b) =>
    a.nameKana.value.localeCompare(b.nameKana.value, 'ja')
  )

  const results = bindings.map((data) => {
    return {
      value: data.name.value,
      label: data.name.value
    }
  })

  fs.writeFileSync(
    './data/list.ts',
    'export const list = ' + JSON.stringify(results, null, '  ')
  )

  console.log('success!')
}

main()
