import {React, useState} from 'react'

import styled from 'styled-components';

const Component = styled.div``

const Title = styled.h1`
  font-weight:bold;
`
const Input = styled.input`
  width:400px;
  height:40px;
`
const Total = styled.p`
  font-weight:bold;
`

function App() {

  const [number, setNumber] = useState(0)

  const numero = Number(number)
  console.log(typeof numero)
  const handleInput = (e) =>{
    setNumber( e.target.value)
  }

  const [percent, setPercent] = useState(0)

  const porcento = Number(percent);

  const handlePercent = (e) => {
   
    setPercent(e.target.value)

  }

  const gp = numero * porcento / 100;

  const total = gp + numero

 
  console.log(numero.length)
  return (
   <>
      <Title>Calculadora de Gorjeta</Title>
        <p>Quanto deu a conta?</p>
      <Input type="number" value={numero}  placeholder="Digite o valor da conta." onChange={handleInput}/>
        <p>Qual a porcentagem de gorjeta?</p>
      <Input type="number" value={porcento}  placeholder="Digite o valor da conta." onChange={handlePercent}/>
      <hr/>
      
      
     {numero > 0 &&
      <Component>
        <p>Sub-total: R$ {numero}</p>
        <p>Gorjeta({porcento}%): R$ {gp}</p>
        <Total>Total: R$ {total}</Total>
      </Component>
      }
   </>
  );
}

export default App;
