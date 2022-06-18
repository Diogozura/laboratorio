import React from "react";
import useSWR from "swr";

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function App() {
  const { data, error } = useSWR(
    "https://ffgames134.herokuapp.com/api/cores",
    fetcher
  );

  if (error) return "An error has occurred.";
  if (!data) return "Loading...";
  console.log(data.cores)
  const cores = data.cores?.map((cor) => (
    <>
      <ul>
        <li>{cor.identificadorHexadecimal}</li>
        <li>{cor.identificador}</li>
      </ul>
    </>

  )

  )
  return (
    <div>
      {cores}
      <h1>{data.identificador}</h1>
      <p>{data.identificadorHexadecimal}</p>
      <strong>👁 {data.subscribers_count}</strong>{" "}
      <strong>✨ {data.stargazers_count}</strong>{" "}
      <strong>🍴 {data.forks_count}</strong>
    </div>
  );
}