import { IdolList } from '../../data/idol-list'
import { StyleList } from '../../data/style-list'
import Select from './select'

type Props = {
  onChangeName: (name: string) => void
  onChangeStyle: (style: string) => void
}

const InputArea = ({ onChangeName, onChangeStyle }: Props) => {
  return (
    <div>
      <Select title="アイドルを選択" list={IdolList} onChange={onChangeName} />
      <Select
        title="バッジのスタイル"
        list={StyleList}
        defaultValueIndex={1}
        onChange={onChangeStyle}
      />
    </div>
  )
}

export default InputArea
