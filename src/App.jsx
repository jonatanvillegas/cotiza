import { useState, useEffect } from 'react'
import styled from '@emotion/styled'
import Imagencripto from './img/imagen-criptos.png'
import Formulario from './components/Formulario'
import Resultado from './components/Resultado'
import Spinner from './components/Spinner'

const Heading = styled.h1`
  font-family:  Verdana, Geneva, Tahoma, sans-serif;
  color: white;
  text-align: center;
  font-weight: 700;
  margin-top: 80px;
  margin-bottom: 50px;
  font-size: 34px;

  &::after{
    content: '';
    width: 200px;
    height: 6px;
    background-color: #66a2fe;
    display: block;
    margin: 10px auto 0 auto;
  }
  @media (max-width:992px ) {
    ::after{
      width: 0px;
    }
  }
  @media (max-width:420px ) {
    ::after{
      width: 200px;
    }
  }
`
const Contenedor = styled.div`
  max-width: 900px;
  margin: 0 auto;
  width: 90%;
  @media (min-width: 992px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
  }
`
const Imagen = styled.img`
  max-width: 400px;
  width: 80%;
  margin: 100px auto 0 auto;
  display: block;
`

function App() {
  const [ monedas , setMonedas] = useState({})
  const [resultado, setResultado] = useState({})
  const [cargando, setCargando] = useState(false)

    useEffect(() => {
      if (Object.keys(monedas).length > 0){

        const cotizarCripto = async () =>{
          setCargando(true)
          setResultado({})
          const {moneda , C_moneda} = monedas
          
          const url =`https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${C_moneda}&tsyms=${moneda}`
          const respuesta = await fetch(url)
          const resultado = await respuesta.json()

          setResultado(resultado.DISPLAY[C_moneda][moneda])
          setCargando(false)
        }
        cotizarCripto()
      }
    },[monedas])
  return (
    <Contenedor>
      <Imagen
        src={Imagencripto}

      />
      <div>
      <Heading>Cotiza Criptomonedas al instante </Heading>
      
      <Formulario
      setMonedas={setMonedas}
      />
      {cargando && <Spinner/>}
     {resultado.PRICE && <Resultado resultado={resultado}/>}
      
      </div>
    </Contenedor>
  )
}

export default App
