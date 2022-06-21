import * as React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import { GetStaticProps, InferGetStaticPropsType } from 'next';
import { Data } from '../intarface';





export const getStaticProps = async () => {
  const res = await fetch('https://ffgames134.herokuapp.com/api/cores');
  const items: Data = await res.json();

  return {
    props: {
      items,
    },
  };
};

export default function ControlledRadioButtonsGroup({ items }: InferGetStaticPropsType<typeof getStaticProps>) {
  const [value, setValue] = React.useState('female');
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue((event.target as HTMLInputElement).value);
  };
  
  console.log(items)
  return (
    <form onSubmit={(event)=>{
      event.preventDefault()
      console.log(value)
    }}>
  <FormControl>
      <FormLabel id="demo-controlled-radio-buttons-group">Gender</FormLabel>
      <RadioGroup
        aria-labelledby="demo-controlled-radio-buttons-group"
        name="controlled-radio-buttons-group"
        value={value}
        onChange={handleChange}
        >
          <ul>
            {items.cores.map((cor) => (
              <>
                {/* <li key={cor.identificador}>{cor.identificador}, {cor.identificadorHexadecimal} <input type="color" id="head" name="head"
           value={cor.identificadorHexadecimal}></input></li> */}
                 <FormControlLabel value={cor.identificador} control={<Radio />} label={cor.identificador} />
              </>
              
         ))}
          </ul>
          
        <FormControlLabel value="female" control={<Radio />} label="Female" />
        <FormControlLabel value="male" control={<Radio />} label="Male" />
      </RadioGroup>
      </FormControl>
      <button type='submit'>enviar</button>
    </form>
   
  );
}


