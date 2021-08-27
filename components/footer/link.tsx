type Props = {
  text: string
  href: string
  hoverColor: string
}

const Link = ({ text, href, hoverColor }: Props) => (
  <a
    className={`underline hover:${hoverColor} transition-colors`}
    href={href}
    target="_blank"
    rel="noopener noreferrer"
  >
    {text}
  </a>
)

export default Link
