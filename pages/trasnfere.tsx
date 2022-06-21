import useSWR, { Key, Fetcher } from "swr"
import { useFetch } from "../hooks/useFetch"

interface User{
    dataCriacao: Date
    dataVencimento: Date
    keyRoom:string
    players:string[]
    valorInicial:number
    valorMultiplicador: number
}
interface Cores{
        cores: [
            identificador: string,
            identificadorHexadecimal: string
        ]
}
   
const fetcher = (url) => fetch(url).then((res) => res.json());
export default function Trasfere() {
   
    const { data, error } = useSWR(
        "https://ffgames134.herokuapp.com/api/dadosSala?keyRoom=10BCG8Z6",
        fetcher
      );
    
      if (error) return "An error has occurred.";
      if (!data) return "Loading...";
      console.log(data)
      const cores = data.players.map((cor) => (
        <>
          <ul>
            <li>{cor.namePlayer}</li>
            {/* <li>{cor.identificador}</li> */}
          </ul>
        </>
    
      ) )
    return (
        <>
            hello
            {cores}
            {data.keyRoom}
        </>
    )
}   