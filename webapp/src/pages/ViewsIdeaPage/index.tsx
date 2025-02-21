import { trpc } from '../../lib/trpc';
import {useParams} from 'react-router-dom'
export const ViewsIdeaPage=()=>{
    const {someNick}=useParams() as {someNick:string}
    return(
        <div>

        <h1>{someNick} 1</h1>

        </div>

    )

}