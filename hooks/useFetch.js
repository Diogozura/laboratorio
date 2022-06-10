import useSWR, { SWRConfig } from 'swr'
function Dashboard () {
    const { data: cores } = useSWR('https://ffgames134.herokuapp.com/api/cores')
    const { data: projects } = useSWR('/api/projects')
    const { data: user } = useSWR('/api/user', { refreshInterval: 0 }) // override
  
    // ...
  }
  
export function Colors () {
    return (
      <SWRConfig 
        value={{
          refreshInterval: 3000,
          fetcher: (resource, init) => fetch(resource, init).then(res => res.json())
        }}
      >
        <Dashboard />
      </SWRConfig>
    )
  }