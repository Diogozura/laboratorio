import useSWR, { Key, Fetcher } from "swr"

export  async function fetcher<JSON = any>(
    erro: string,
  ): Promise<JSON> {
    const res = await fetch(erro)
    return res.json()
}
  
export default function Trasfere() {
   



    return (
        <>hello{data}!</>
    )
}   