import React, {useEffect, useState} from 'react'
import styled from '@emotion/styled'


const Label = styled.label`
    color: white;
    display: block;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    font-size: 24px;
    margin: 15px 0;
`
const Select = styled.select`
    width: 100%;
    font-size: 18px;
    padding: 10px;
    border-radius: 10px;

`

const useSelectMonedas = (label,options) => {

    const [state, setState] = useState('')




    //crear tus propios Hooks puede retornar un arreglo o un objeto
    const SlectMonedas = () => (
        <>
         <Label>{label}</Label>
         <Select value={state} onChange={ e => setState(e.target.value)}>

            <option value="">Seleccione</option>
        
            {options.map( option => ( //creacion de map, opciones de usuario
                <option
                    key={option.id}
                    value={option.id}
                >{option.nombre}</option>
            ))}
         </Select>
        </>
    )
    return [state, SlectMonedas]
}

export default useSelectMonedas
