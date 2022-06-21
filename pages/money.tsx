import * as React from 'react';
import NumberFormat, { InputAttributes } from 'react-number-format';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';
import { Button, FormControlLabel, FormLabel, Radio, RadioGroup } from '@mui/material';
import styled from 'styled-components';


const Formula = styled.form`
  display: grid;
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



export default function FormattedInputs() {
  const [values, setValues] = React.useState({
    numberformat: '1320',
    nome: '',
    radio:''
  });
    console.log(values)

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <Box
      sx={{
        '& > :not(style)': {
          m: 1,
        },
      }}
    >
      <Formula key="chave" onSubmit={event => {
        event.preventDefault()
        alert(JSON.stringify(values))
      }}>
         <FormControl variant="standard" >
        
        </FormControl>
        <TextField
          label="Valor inicial"
          value={values.numberformat}
          onChange={handleChange}
          name="numberformat"
          id="formatted-numberformat-input"
          InputProps={{
            inputComponent: NumberFormatCustom as any,
          }}
          variant="standard"
        />
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
        value={values.radio}
        onChange={handleChange}
        >
        
        <FormControlLabel name="radio" value="female" control={<Radio  />} label="Female" />
        <FormControlLabel name="radio" value="male" control={<Radio />} label="Male" />
      </RadioGroup>
  
        <Button type="submit" onClick={() => {
          console.log("fui")
          }} variant="outlined">enviar</Button>
      </Formula>
 
     
       <pre>{JSON.stringify(values, null, 2)}</pre>
    </Box>
  );
}
