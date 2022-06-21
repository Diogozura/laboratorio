import { Button, TextField } from "@mui/material";
import React from "react";

export default function Home() {
    const [values, setValues] = React.useState({
        chave:'',
    }
    )
    
      const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValues({
          ...values,
          [event.target.name]: event.target.value,
        });
      };
    return (
        <form onSubmit={(event) => {
            event.preventDefault()
            alert(JSON.stringify(values, null, 2))
        }}>

            <TextField id="standard-basic"
                name="chave"
                onChange={handleChange}
                value={values.chave}
                label="Código da Sala"
                variant="standard"
            />
        <Button type="submit">Entrar</Button>
        </form>

       
    )
}