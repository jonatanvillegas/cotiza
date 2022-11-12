import React from 'react'
import styled from '@emotion/styled'


const Informacion = styled.div`
    color: #fff;
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
    text-align: center;
    margin-top: 20px;
    @media (min-width: 420px){
        display: flex;
        align-items: center;
        gap: 1.5rem;
    }
`
const Texto = styled.p`
    font-size: 14px;
    span{
     font-size: 16px;
     font-weight: 700;
    }
`
const Precio = styled.p`
    font-size: 18px;
    span{
     font-size: 20px;
     font-weight: 700;
    }
    
`
const Img = styled.img`
    width: 150px;
    height: 150px;
    
    
`

const Resultado = ({resultado}) => {
    console.log(resultado)
    const {PRICE,HIGHDAY,LOWDAY,CHANGEPCTHOUR,IMAGEURL,LASTUPDATE} = resultado
  return (
    <Informacion>
            <Img 
                src={`https://www.cryptocompare.com/${IMAGEURL}`} 
                alt='imagen cripto'
            />
        <div>
            <Precio> El precio es de : <span>{PRICE}</span></Precio>
            <Texto> Precio mas alto del dia : <span>{HIGHDAY}</span> </Texto>
            <Texto> Precio mas bajo del dia: <span>{LOWDAY}</span></Texto>
            <Texto> Variacion ultimas 24 horas: <span>{CHANGEPCTHOUR}</span></Texto>
            <Texto> Ultimas actualizaciones : <span>{LASTUPDATE}</span></Texto>
        </div>
    </Informacion>
  )
}
export default Resultado
