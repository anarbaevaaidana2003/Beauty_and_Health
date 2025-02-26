import {createTRPCReact} from '@trpc/react-query'
import type { TrpcRouter } from '@forum_project/backend/src/router'
import {QueryClient,QueryClientProvider} from "@tanstack/react-query"
import {httpBatchLink} from "@trpc/client"
import superjson from 'superjson'
import Cookies from 'js-cookie'
import React from "react";

export const trpc=createTRPCReact<TrpcRouter>()

const queryClient=new QueryClient({
    defaultOptions:{
        queries:{
            retry:false,
            refetchOnWindowFocus: false,
        },
    },
})

const trpcClient=trpc.createClient({
    transformer: superjson,
    links:[
        httpBatchLink({
            url: 'http://localhost:3000/trpc',
            headers: () => {
                const token = Cookies.get('token')
                console.log(token);
                return {
                  ...(token && { authorization: `Bearer ${token}` }),
                }
              },
        }),
    ],
})


export const TrpcProvider=({children}:{children:React.ReactNode})=>{
    return (
        <trpc.Provider client={trpcClient} queryClient={queryClient}>
            <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
        </trpc.Provider>

    
    )
}