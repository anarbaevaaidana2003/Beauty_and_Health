import {trpc} from '../../lib/trpc'
export const AllIdeasPage = () => {
    const {data,error,isLoading,isFetching,isError}=trpc.getIdeas.useQuery()
    if (isLoading || isFetchingpnpm ){
        return <span>Loading</span>
    }
    if (isError){
        return <span>Error</span>
    }
  
    return (
      <div>
        <h1>Beauty</h1>
        {ideas.map((idea) => {
          return (
            <div key={idea.nick}>
              <h2>{idea.name}</h2>
              <p>{idea.description}</p>
            </div>
          );
        })}
      </div>
    )
  }