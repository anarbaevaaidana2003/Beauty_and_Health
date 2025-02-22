import { trpc } from '../../lib/trpc';
import {useParams} from 'react-router-dom'
import { type ViewIdeaRouteParams } from '../../lib/routes';
export const ViewsIdeaPage=()=>{
    const {someNick}=useParams() as ViewIdeaRouteParams
    return(
        <div>
            <h2>jflekfj</h2>

        <h1>{someNick}</h1>

        </div>

    )

}