import { useState } from 'react'
import { FiCopy, FiCheckCircle } from 'react-icons/fi'
import CopyToClipboard from 'react-copy-to-clipboard'
import Title from '../title'

type Props = {
  label: string
  text: string
}

const Input = ({ label, text }: Props) => {
  const [isCopied, setCopied] = useState(false)

  const handleCopy = () => {
    setCopied(true)
    setInterval(() => setCopied(false), 2000)
  }

  return (
    <div className="mb-6">
      <Title text={label} />
      <div className="flex mb-3 items-center">
        <input
          className="mr-1 w-72 p-1 border rounded-md"
          type="text"
          value={text}
          readOnly
        />
        <CopyToClipboard text={text} onCopy={handleCopy}>
          <button className="p-1.5 border bg-white hover:bg-gray-200 text-xl rounded-md transition-colors">
            {isCopied ? <FiCheckCircle /> : <FiCopy />}
          </button>
        </CopyToClipboard>
      </div>
    </div>
  )
}

export default Input
