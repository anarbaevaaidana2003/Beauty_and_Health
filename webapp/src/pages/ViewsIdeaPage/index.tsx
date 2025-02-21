import { trpc } from '../../lib/trpc';
import {useParams} from 'react-router-dom'
export const ViewsIdeaPage=()=>{
    const {someNick}=useParams() as {someNick:string}
    return(
        <div>
            <h2>jflekfj</h2>

        <h1>{someNick}</h1>

        </div>

    )

}