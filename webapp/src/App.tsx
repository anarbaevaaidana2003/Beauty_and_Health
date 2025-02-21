import { TrpcProvider } from "./lib/trpc";
import { AllIdeasPage } from "./pages/AllIdeasPage";
import { ViewsIdeaPage } from "./pages/ViewsIdeaPage";
import { BrowserRouter,Route,Routes} from 'react-router-dom'
 export const App=()=>{
  return (
    <TrpcProvider>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<AllIdeasPage />}/>
        <Route path="/ideas/:someNick" element={<ViewsIdeaPage />}/>

      </Routes>
    </BrowserRouter>
    </TrpcProvider>
  )

 }