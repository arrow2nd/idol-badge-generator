// deno run --allow-net --allow-write  ./tools/create-data.js

const query = `
PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
PREFIX imas: <https://sparql.crssnky.xyz/imasrdf/URIs/imas-schema.ttl#>
PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>
SELECT DISTINCT ?name ?nameKana
WHERE {
  ?d rdf:type ?type;
     rdfs:label ?name;
     FILTER(?type = imas:Idol)

  OPTIONAL{ ?d imas:alternateNameKana ?nameKana }
  OPTIONAL{ ?d imas:nameKana ?nameKana }
  OPTIONAL{ ?d imas:givenNameKana ?nameKana }  
}
`

const url = `https://sparql.crssnky.xyz/spql/imas/query?output=json&query=${encodeURIComponent(
  query
)}`

const res = await fetch(url)
const json = await res.json()

const bindings = json.results.bindings.sort((a, b) =>
  a.nameKana.value.localeCompare(b.nameKana.value, 'ja')
)

const results = bindings.map((data) => {
  return {
    value: data.name.value,
    label: data.name.value
  }
})

Deno.writeTextFileSync(
  './data/idol-list.ts',
  'export const IdolList = ' + JSON.stringify(results, null, '  ')
)

console.log('[ success! ]')
