import * as React from 'react';
import styled from 'styled-components';

const Formulario = styled.div`
  width: 600px;
  margin: auto;
  background-color: aqua;
`

interface CustomProps {
  onChange: (event: { target: { name: string; value: string } }) => void;
  name: string;
}

export default function Formulariomy() {
  return (
    <Formulario>
      <input type=''/>
      <input />
      <button></button>
    </Formulario>
  )
}