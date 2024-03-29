import { useState } from 'react'

import InputArea from 'components/input-area'
import Result from 'components/result'

import { useIdolData } from 'hooks/useIdolData'

const UI = () => {
  const [name, setName] = useState('')
  const [style, setStyle] = useState('')

  const idolData = useIdolData(name)

  const handleNameChange = (name: string) => setName(name)
  const handleStyleChange = (style: string) => setStyle(style)

  return (
    <div className="flex flex-col mb-6 items-center text-center">
      <InputArea
        onChangeName={handleNameChange}
        onChangeStyle={handleStyleChange}
      />
      {idolData && <Result idolData={idolData} style={style} />}
    </div>
  )
}

export default UI
