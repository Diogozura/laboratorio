import { useRouter } from "next/router";
import react from "react"
function Blog({ posts }) {
  
    return (
      <ul>
       
          <li key={posts.keyRoom}> Chave da sala: {posts.keyRoom}</li>
          <li key={posts.valorInicial}>Valor inicial: {posts.valorInicial}</li>
          <li key={posts.namePlayer}> Nome do Jogador: {posts.namePlayer}</li>
          <li key={posts.idPlayer}> Id do Jogador: {posts.idPlayer}</li>
          <li key={posts.playerBank}>é Banco? {posts.playerBank}</li>
          <li key={posts.saldo}>Saldo: {posts.saldo}</li> <button type="button" onClick={() => router.reload()}>atualizar</button>
      </ul>
    )
  }
  

// export async function getServerSideProps(context) {
//   const res = await fetch('https://ffgames134.herokuapp.com/api/dadosSala?keyRoom=UNYTWH1G&idPlayer=705')
//   const posts = await res.json()
//   console.log(posts)
//   return {
//     props: {
//       posts,
//     },

//   }
// }



  // This function gets called at build time on server-side.
  // It may be called again, on a serverless function, if
  // revalidation is enabled and a new request comes in

  export async function getStaticProps() {
    const res = await fetch('https://ffgames134.herokuapp.com/api/dadosSala?keyRoom=UNYTWH1G&idPlayer=705')
      const posts = await res.json()
    console.log(posts)
    
  
    return {
      props: {
        posts,
      },
      // Next.js will attempt to re-generate the page:
      // - When a request comes in
      // - At most once every 10 seconds
      revalidate:10,
    }
  } 
  

  // This function gets called at build time on server-side.
  // It may be called again, on a serverless function, if
  // the path has not been generated.
  // export async function getStaticPaths() {
  //   const res = await fetch('https://ffgames134.herokuapp.com/api/dadosSala?keyRoom=UNYTWH1G&idPlayer=705')
  //   const posts = await res.json()
  //     // const user = posts.namePlayer
     
  
  //   // Get the paths we want to pre-render based on posts
  //   const paths =   ({
  //       params: { id: posts.players },
  //     })
  
  //   // We'll pre-render only these paths at build time.
  //   // { fallback: blocking } will server-render pages
  //   // on-demand if the path doesn't exist.
  //   return { paths, fallback: 'blocking' }
  // }
  
  export default Blog