type Props = {
  text: string
}

const Title = ({ text }: Props) => (
  <span className="block mb-3 text-lg">{text}</span>
)

export default Title
