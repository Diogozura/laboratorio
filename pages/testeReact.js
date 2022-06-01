import React from "react";
import useSWR from "swr";

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function App() {
  const { data, error } = useSWR(
    "https://ffgames134.herokuapp.com/api/dadosSala?keyRoom=UNYTWH1G&idPlayer=705",
    fetcher,{ refreshInterval: 1000 }
  );

  if (error) return "An error has occurred.";
  if (!data) return "Loading...";
  return (
    <div>
      <h1>{data.namePlayer}</h1>
      <p>{data.idPlayer}</p>
      <strong>Valor inicial {data.valorInicial}</strong>{" "}
      <strong>Saldo {data.saldo}</strong>{" "}
      <strong>idPlayer {data.idPlayer}</strong>
      <strong>keyRoom {data.keyRoom}</strong>
    </div>
  );
}
