import { TrpcProvider } from "./lib/trpc";
import { AllIdeasPage } from "./pages/AllIdeasPage";
import { ViewsIdeaPage } from "./pages/ViewsIdeaPage";
import { BrowserRouter,Route,Routes} from 'react-router-dom'
import { getAllIdeasRoute,getViewIdeaRoute } from "./lib/routes";
 export const App=()=>{
  return (
    <TrpcProvider>
      <BrowserRouter>
      <Routes>
        <Route path={getAllIdeasRoute()} element={<AllIdeasPage />}/>
        <Route path={getViewIdeaRoute({someNick:":someNick"})} element={<ViewsIdeaPage />}/>

      </Routes>
    </BrowserRouter>
    </TrpcProvider>
  )

 }