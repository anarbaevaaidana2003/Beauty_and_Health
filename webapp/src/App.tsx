import { TrpcProvider } from "./lib/trpc";
import { AllIdeasPage } from "./pages/AllIdeasPage/index";

 export const App=()=>{
  return (
    <TrpcProvider>
      <AllIdeasPage/>
    </TrpcProvider>
  )

 }