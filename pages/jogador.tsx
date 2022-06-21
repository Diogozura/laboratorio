import * as React from 'react';
import NumberFormat, { InputAttributes } from 'react-number-format';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';
import { Button, FormControlLabel, FormLabel, Input, Radio, RadioGroup } from '@mui/material';
import styled from 'styled-components';
import { Data } from '../intarface';
import { InferGetStaticPropsType } from 'next';


const Formula = styled.form`
  display: grid;
  width: 600px;
  margin: auto;
  margin-top: 4em;
`

interface CustomProps {
  onChange: (event: { target: { name: string; value: string } }) => void;
  name: string;
}

const NumberFormatCustom = React.forwardRef<
  NumberFormat<InputAttributes>,
  CustomProps
>(function NumberFormatCustom(props, ref) {
  const { onChange, ...other } = props;

  return (
    <NumberFormat
      {...other}
      getInputRef={ref}
      onValueChange={(values) => {
        onChange({
          target: {
            name: props.name,
            value: values.value,
          },
        });
      }}
      thousandSeparator
      isNumericString
      prefix="R$"
    />
  );
});



export default function FormattedInputs({ items }: InferGetStaticPropsType<typeof getStaticProps>) {
  const [values, setValues] = React.useState({
    nome: '',
    cor: '',
  });
    console.log()

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <Box>
      <Formula key="chave" onSubmit={event => {
        event.preventDefault()
        alert(JSON.stringify(values, null, 2))
      }}>
         <FormControl variant="standard" >
        
        </FormControl>
       
        <TextField
          id="standard-basic"
          value={values.nome}
          onChange={handleChange}
          name="nome"
          label="Nome"
          variant="standard" />
         <FormLabel id="demo-controlled-radio-buttons-group">Escolha seu icone</FormLabel>
      <RadioGroup
        aria-labelledby="demo-controlled-radio-buttons-group"
        name="controlled-radio-buttons-group"
        value={values.cor}
        onChange={handleChange}
        >
           <ul>
            {items.cores.map((cor) => (
              <>
                {/* <li key={cor.identificador}>{cor.identificador}, {cor.identificadorHexadecimal} <input type="color" id="head" name="head"
           value={cor.identificadorHexadecimal}></input></li> */}
                 <FormControlLabel name="cor" value={cor.identificador} control={<Radio />} label={cor.identificador} />
              </>
              
         ))}
          </ul>
      </RadioGroup>
        <Button type="submit" onClick={() => {
          console.log("fui")
          }} variant="outlined">enviar</Button>
      </Formula>
    </Box>
  );
}


export const getStaticProps = async () => {
  const res = await fetch('https://ffgames134.herokuapp.com/api/cores');
  const items: Data = await res.json();

  return {
    props: {
      items,
    },
   
  };
};