import { getViewIdeaRoute } from '../../../lib/routes';
import {trpc} from '../../../lib/trpc';
import { Segment } from '../../../components/Segment'
import {Link} from 'react-router-dom'
import css from './index.module.scss'
import { Alert } from '../../../components/Alert'

export const AllIdeasPage = () => {
  const { data, error, isLoading, isError, hasNextPage, fetchNextPage, isFetchingNextPage, isRefetching } =
  
  trpc.getIdeas.useInfiniteQuery(
    {
      limit: 1,
    },
    {
      getNextPageParam: (lastPage) => {
        return lastPage.nextCursor
      },
    }
  )
  

    return (
      
      <Segment title="Форум">
        

{isLoading || isRefetching ? (
        <div>Loading...</div>
      ) : isError ? (
        <Alert color="red">{error.message}</Alert>
      ) : (
        <div className={css.ideas}>
          {data.pages
            .flatMap((page) => page.ideas)
            .map((idea) => (
              <div className={css.idea} key={idea.nick}>
                <Segment
                  size={2}
                  title={
                    <Link className={css.ideaLink} to={getViewIdeaRoute({ someNick: idea.nick })}>
                      {idea.name}
                    </Link>
                  }
                  description={idea.description}
                />
              </div>
            ))}
          <div className={css.more}>
            {hasNextPage && !isFetchingNextPage && (
              <button
                onClick={() => {
                  void fetchNextPage()
                }}
              >
                Load more
              </button>
            )}
            {isFetchingNextPage && <span>Loading...</span>}
          </div>
      </div>
      )}
      </Segment>
    )
  }