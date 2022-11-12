import React from 'react'
import styled from '@emotion/styled'

const Texto = styled.div`
    background-color: #b7322c;
    color: white;
    padding: 15px;
    font-size: 22px;
    text-transform: uppercase;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    font-weight: bold;
    text-align: center;
    border-radius: 20px;
`
const Error = ({children}) => {
  return (
    <Texto>
      {children}
    </Texto>
  )
}

export default Error
