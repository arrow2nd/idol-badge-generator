import { useRef, useState } from 'react'
import { useIdolData } from '../../hooks/useIdolData'
import Select from './select'
import Results from '../results'

const UI = () => {
  const [name, setName] = useState('')
  const selectRef = useRef(null)
  const idolData = useIdolData(name)

  const handleNameChange = (name: string) => {
    setName(name)
  }

  return (
    <div className="flex flex-col items-center text-center">
      <Select onChange={handleNameChange} ref={selectRef} />
      {idolData && <Results idolData={idolData} />}
    </div>
  )
}

export default UI
