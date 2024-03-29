import { ForwardedRef, forwardRef } from 'react'
import ReactSelect from 'react-select'

import Title from 'components/title'

type Props = {
  title: string
  list: {
    value: string
    label: string
  }[]
  defaultValueIndex?: number
  onChange: (name: string) => void
}

const Select = (props: Props, ref: ForwardedRef<any>) => {
  const handleChangeSelect = (value: { value: string } | null) => {
    if (value) {
      props.onChange(value.value)
    }
  }

  return (
    <div className="flex flex-col items-center mb-6">
      <Title text={props.title} />
      <ReactSelect
        className="w-64"
        instanceId={props.title}
        placeholder="選択してください"
        defaultValue={
          props.defaultValueIndex ? props.list[props.defaultValueIndex] : null
        }
        options={props.list}
        onChange={handleChangeSelect}
        ref={ref}
      />
    </div>
  )
}

export default forwardRef(Select)
