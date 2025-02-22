import { trpc } from '../../lib/trpc';
import { useParams } from 'react-router-dom';
import { type ViewIdeaRouteParams } from '../../lib/routes';

export const ViewsIdeaPage = () => {
    const { someNick } = useParams() as ViewIdeaRouteParams;

    const { data, error, isLoading, isFetching, isError } = trpc.getIdea.useQuery({
        someNick,
    });

    if (isLoading || isFetching) {
        return <span>Loading...</span>;
    }

    if (isError) {
        return <span>Error: {error?.message || 'An error occurred'}</span>;
    }

    if (!data?.idea) {
        return <span>Idea not found</span>;
    }

    return (
        <div>
            <h1>{data.idea.name}</h1>
            <p>{data.idea.description}</p>
            <h2>jflekfj</h2>
            <div dangerouslySetInnerHTML={{ __html: data.idea.text }} />
        </div>
    );
};
