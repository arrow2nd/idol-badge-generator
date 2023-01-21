import { Idol } from 'types/idol'
import Badge from './badge'
import Input from './input'

type Props = {
  idolData: Idol
  style: string
}

const Results = ({ idolData, style }: Props) => {
  const paramLabel = encodeURIComponent(idolData.bland)
  const paramName = encodeURIComponent(idolData.name)
  const paramStyle = style ? `?style=${style}` : ''

  const url = `https://img.shields.io/badge/${paramLabel}-${paramName}-${idolData.hex}${paramStyle}`
  const html = `<a href="${idolData.url}"><img src="${url}" alt="${idolData.name}" title="${idolData.name}"></a>`
  const markdown = `[![${idolData.name}](${url})](${idolData.url})`

  return (
    <div className="flex flex-col items-center">
      <Badge url={url} />
      <Input label="URL" text={url} />
      <Input label="HTML" text={html} />
      <Input label="Markdown" text={markdown} />
    </div>
  )
}

export default Results
