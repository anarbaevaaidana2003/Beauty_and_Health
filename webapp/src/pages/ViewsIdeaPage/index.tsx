import { trpc } from '../../lib/trpc';
import { useParams } from 'react-router-dom';
import { Segment } from '../../components/Segment'
import { type ViewIdeaRouteParams } from '../../lib/routes';
import format from 'date-fns/format'

import css from './index.module.scss'

export const ViewsIdeaPage = () => {
    const { someNick } = useParams() as ViewIdeaRouteParams;

    const { data, error, isLoading, isFetching, isError } = trpc.getIdea.useQuery({
        someNick,
    });

    if (isLoading || isFetching) {
        return <span>Загрузка...</span>;
    }

    if (isError) {
        return <span>Ошибка: {error?.message || 'An error occurred'}</span>;
    }

    if (!data?.idea) {
        return <span>Обсуждение на найденно</span>;
    }

    return (
        <Segment title={data.idea.name} description={data.idea.description}>
     <div className={css.createdAt}>Cоздано: {format(data.idea.createdAt, 'yyyy-MM-dd')}</div>
     <div className={css.author}>Author:{data.idea.author.nick}</div>
     <div className={css.text} dangerouslySetInnerHTML={{ __html: data.idea.text }} />
      </Segment>
      );
};
