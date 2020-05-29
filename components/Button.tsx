import React, { ComponentProps, FC } from 'react'

export const Button: FC<ComponentProps<'button'>> = ({ children, className = '', ...props }) => (
  <button className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ${className}`} {...props}>
    {children}
  </button>
)
