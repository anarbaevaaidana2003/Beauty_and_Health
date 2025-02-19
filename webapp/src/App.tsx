import { TrpcProvider } from "./lib/trpc";


 export const App=()=>{
  return (
    <TrpcProvider>
      <AllIdeasPage/>
    </TrpcProvider>
  )

 }