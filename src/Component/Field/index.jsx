import React from 'react'
import styled from 'styled-components'
const ErrorS = styled.span`
  color: red;
  position: absolute;
  font-size: 0.876rem;
  top: 80%;
  font-style: italic;
`
export default function Field({
  label,
  error,
  placeholder,
  type = 'text',
  ...props
}) {
  return (
    <div className='d-flex flex-column align-items-start w-100 position-relative'>
      <label className='fs-5'>{label}</label>
      <input
        className='p-2 rounded mt-1 w-100 mb-3'
        placeholder={placeholder}
        type={type}
        {...props}
      />
      {error && <ErrorS>{error}</ErrorS>}
    </div>
  )
}
