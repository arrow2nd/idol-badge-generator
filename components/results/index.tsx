import { Idol } from '../../types/idol'
import Badge from './badge'
import Input from './input'

type Props = {
  idolData: Idol
}

const Results = ({ idolData }: Props) => {
  const label = encodeURIComponent('担当')
  const name = encodeURIComponent(idolData.name)
  const url = `https://img.shields.io/badge/${label}-${name}-${idolData.hex}`
  const markdown = `[![${idolData.name}](${url})](${idolData.url})`

  return (
    <div className="flex flex-col items-center">
      <Badge url={url} />
      <Input label="URL" text={url} />
      <Input label="Markdown" text={markdown} />
    </div>
  )
}

export default Results
