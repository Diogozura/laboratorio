import React from 'react';
import ReactDOM from 'react-dom';


export default function HomeScreen() {
  

  const [maskedValue, setMaskedValue] = React.useState('');
  const [value, setValue] = React.useState();
 
// To USANDO YARN

  function handlenChange(event, maskedValue) {
    const fieldValue = event.target.value; 
    const fieldName = event.target.name;
    console.log(maskedValue)
    setMaskedValue(maskedValue)
    setValues((currenetValues) => {
      return {
        ...currenetValues,
        [fieldName]: fieldValue,
      }
    })
    
  }
  const handleChange = (event, value, maskedValue) => {
    event.preventDefault();

    console.log(value); // value without mask (ex: 1234.56)
    console.log(maskedValue); // masked value (ex: R$1234,56)

    setValue(value);
    setMaskedValue(maskedValue);
  };

  const [values, setValues] = React.useState({
    usuario: 'omariosouto',
    senha:'safepassword',
    cor: '',
    valor: '',
  })
  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={(event) => {
        // onSubmit -> Controller (pega dados do Usuario e passa para um Serviço )
        // authService -> Serviço
        console.log(maskedValue , values.cor)
        event.preventDefault();
       
        
      } }>
        <input
          placeholder="Usuário" name="usuario"
          value={values.usuario}
          onChange={handlenChange}
        />
        <input
          placeholder="Senha" name="senha" type="password"
          value={values.senha}
          onChange={handlenChange}
        />
        <input
          placeholder="cor" name="cor" type="radio"
          value="verde"
          onChange={handlenChange}
        />
        <input
          placeholder="cor" name="cor" type="radio"
          value="Azul"
          onChange={handlenChange}
        />
  
        <input   placeholder="R$"  data-inputmask="'mask': '9', 'repeat': 10, 'greedy' : false" />
        <IntlCurrencyInput
        autoFocus={false}
          autoSelect={false}
        
          name="valor" value={values.valor} currency="BRL" config={currencyConfig}
        onChange={handleChange} />
         
        <pre>
          {JSON.stringify(values,null, 2)}
        </pre>
        <pre>
          {JSON.stringify(maskedValue,null, 2)}
        </pre>
        
        <div>
          <button>
            Entrar
          </button>
        </div>
      </form>
    </div>
  );
}
