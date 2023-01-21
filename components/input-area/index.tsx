import { Idols } from 'data/idols'
import { Styles } from 'data/styles'
import Select from './select'

type Props = {
  onChangeName: (name: string) => void
  onChangeStyle: (style: string) => void
}

const InputArea = ({ onChangeName, onChangeStyle }: Props) => {
  return (
    <div>
      <Select title="アイドルを選択" list={Idols} onChange={onChangeName} />
      <Select
        title="バッジのスタイルを選択"
        list={Styles}
        defaultValueIndex={1}
        onChange={onChangeStyle}
      />
    </div>
  )
}

export default InputArea
