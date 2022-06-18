import React from "react";
import NumberFormat from "react-number-format";
import { useForm, Controller, ErrorMessage } from "react-hook-form";

import ReactDOM from "react-dom";



export default function App() {
  const { errors, control, setValue, handleSubmit } = useForm();

  function handleChange() {
    setValue("money", 20000)
  }
  return (
    <form
      onSubmit={handleSubmit(data => {
        console.log(data);
      })}
    >
      <div>
        <Controller
          name="money"
          control={control}
          as={<NumberFormat thousandSeparator={true} prefix={"$"} />}
        />
        <ErrorMessage errors={errors} name="money" as="p" />
      </div>

      <button onClick={handleChange}>set</button>

      <input type="submit" />
    </form>
  );
}


