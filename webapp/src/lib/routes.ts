const getRouteParams=<T extends Record<string,boolean>>(object: T)=>{
    return Object.keys(object).reduce((acc,key)=>({...acc,[key]:`:${key}`}),{}) as Record<keyof T,string>
}
export const getAllIdeasRoute=()=>'/';

export type ViewIdeaRouteParams=typeof viewRouteParams
export const viewIdeaRouteParams=getRouteParams({someNick:true})
export const getViewIdeaRoute=({someNick}:{someNick:string})=>`/ideas/${someNick}`;
export const getNewIdeaRoute = () => '/ideas/new'
export const getSignUpRoute = () => '/sign-up'
export const getSignInRoute = () => '/sign-in'