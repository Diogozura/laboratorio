import React from 'react';


export default function HomeScreen() {
  
  const [values, setValues] = React.useState({
    usuario: 'omariosouto',
    senha:'safepassword',
    cor:'',
  })

// To USANDO YARN

  function handlenChange(event) {
    const fieldValue = event.target.value; 
    const fieldName = event.target.name;
    
    setValues((currenetValues) => {
      return {
        ...currenetValues,
        [fieldName]: fieldValue,
      }
    })
  }
  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={(event) => {
        // onSubmit -> Controller (pega dados do Usuario e passa para um Serviço )
        // authService -> Serviço
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
        <pre>
          {JSON.stringify(values,null, 2)}
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
