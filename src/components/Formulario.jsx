import React,{ useEffect, useState } from 'react'
import styled from '@emotion/styled'
import useSelectMonedas from '../Hooks/useSelectMonedas'
import { monedas } from '../Data/monedas'
import Error from './Error'

const InputSubmit =styled.input`
    background-color: #9497ff;
    border: none;
    width: 100%;
    padding: 10px;
    color: white;
    text-transform: uppercase;
    font-size: 20px;
    border-radius: 5px;
    transition: font-size .3s ease-in;
    margin-top: 30px;

    :hover{
        cursor: pointer;
        background-color: #7a7dfe;
        font-size: 25px;
    }
`
const Formulario = ({setMonedas}) => {
    const [criptos , setCriptos] = useState([])
    const [ error , setError] = useState(false)

    const [moneda, SlectMonedas] = useSelectMonedas('Elige tu moneda',monedas)
    const [C_moneda, SlectC_moneda] = useSelectMonedas('Elige tu CriptoMoneda', criptos)
    
    //consumiendo Api
    useEffect(()=>{
        const consultarApi = async () =>{
            const url = 'https://min-api.cryptocompare.com/data/top/mktcapfull?limit=20&tsym=USD'
            const respuesta = await fetch(url)
            const resultado = await respuesta.json()
            
            const arryCriptos = resultado.Data.map( cripto => {

                const objeto ={
                    id: cripto.CoinInfo.Name,
                    nombre: cripto.CoinInfo.FullName,
                }

                return objeto
            })
            setCriptos(arryCriptos)
        }
        consultarApi()
    }, [])
    const handleSubmit = e =>{
        e.preventDefault()

        if([moneda, C_moneda].includes('')){
            setError(true)


            return
        }
        setError(false)

        setMonedas({
            moneda,
            C_moneda
        })
    }
  return (
    <>
    {error && <Error children={<p>Todos los campos son obligatorios</p>}/>}
    
        <form
        onSubmit={handleSubmit}
        >
            <SlectMonedas/>

            <SlectC_moneda/>
            <InputSubmit 
                type="submit" 
                value='cotizar' 
                />
        </form>
        </>
  )
}

export default Formulario
