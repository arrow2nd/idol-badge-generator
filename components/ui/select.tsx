import { forwardRef, ForwardedRef } from 'react'
import { list } from '../../data/list'
import ReactSelect from 'react-select'
import Title from '../title'

type Props = {
  onChange: (name: string) => void
}

const Select = forwardRef((props: Props, ref: ForwardedRef<any>) => {
  const handleChangeSelect = (value: { value: string } | null) => {
    if (value) {
      props.onChange(value.value)
    }
  }

  return (
    <div className="mb-6">
      <Title text="アイドル名を選択" />
      <ReactSelect
        className="w-64"
        instanceId="idol"
        options={list}
        onChange={handleChangeSelect}
        ref={ref}
      />
    </div>
  )
})

export default Select
