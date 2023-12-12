import React from 'react'

export default function ButtonLogin({ native, children }) {
  const buttonStyle = {
    width: '100%',
    padding: '5px',
    marginBottom: '10px',
    fontWeight: 'bold',
    borderRadius: '5px',
    backgroundColor: native ? '#FD7401' : 'white',
    color: native ? 'white' : '#FD7401',
    border: native ? '' : '1.01px solid #FD7401',
  }

  return <button style={buttonStyle}>{children}</button>
}
