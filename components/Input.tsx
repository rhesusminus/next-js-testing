import React, { FC, ComponentProps } from 'react'

export const Input: FC<InputProps> = ({ onChange, label, ...props }) => (
  <>
    {label && (
      <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor={props.id}>
        {label}
      </label>
    )}
    <input className="form-input mt-1 block w-full" onChange={(e) => onChange(e.target.value)} {...props} />
  </>
)

interface InputProps extends ComponentProps<'input'> {
  label?: string
  onChange?: any
}
