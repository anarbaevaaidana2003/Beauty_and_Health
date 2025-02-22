import { TrpcProvider } from "./lib/trpc";
import { AllIdeasPage } from "./pages/AllIdeasPage";
import { ViewsIdeaPage } from "./pages/ViewsIdeaPage";
import { viewRouteParams } from "./lib/routes";
import { BrowserRouter,Route,Routes} from 'react-router-dom'
import { getAllIdeasRoute,getViewIdeaRoute } from "./lib/routes";
 export const App=()=>{
  return (
    <TrpcProvider>
      <BrowserRouter>
      <Routes>
        <Route path={getAllIdeasRoute()} element={<AllIdeasPage />}/>
        <Route path={getViewIdeaRoute(viewRouteParams)} element={<ViewsIdeaPage />}/>

      </Routes>
    </BrowserRouter>
    </TrpcProvider>
  )

 }