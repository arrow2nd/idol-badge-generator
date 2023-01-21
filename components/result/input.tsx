import { useReducer } from 'react'
import { FiCheckCircle, FiCopy } from 'react-icons/fi'

import Title from 'components/title'

type Props = {
  label: string
  text: string
}

const Input = ({ label, text }: Props) => {
  const [isCopied, toggleCopied] = useReducer((prev) => !prev, false)

  const copyToClipboard = async () => {
    await navigator.clipboard.writeText(text)
    toggleCopied()
    setTimeout(() => toggleCopied(), 2000)
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
        <button
          className="p-1.5 border bg-white hover:bg-gray-200 text-xl rounded-md transition-colors"
          onClick={() => copyToClipboard()}
        >
          {isCopied ? <FiCheckCircle /> : <FiCopy />}
        </button>
      </div>
    </div>
  )
}

export default Input
