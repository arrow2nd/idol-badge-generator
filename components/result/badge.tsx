import Title from '../title'

type Props = {
  url: string
}

const Badge = ({ url }: Props) => (
  <div className="mb-6">
    <Title text="生成結果" />
    <div className="mb-3">
      <img src={url} />
    </div>
  </div>
)

export default Badge
