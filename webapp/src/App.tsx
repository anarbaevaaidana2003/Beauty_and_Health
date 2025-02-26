import { TrpcProvider } from "./lib/trpc";
import { AllIdeasPage } from "./pages/AllIdeasPage";
import { ViewsIdeaPage } from "./pages/ViewsIdeaPage";
import { SignInPage } from './pages/SignInPage'
import { viewIdeaRouteParams } from "./lib/routes";
import * as routes from './lib/routes'
import { BrowserRouter,Route,Routes} from 'react-router-dom'
import { getAllIdeasRoute,getViewIdeaRoute } from "./lib/routes";
import { SignUpPage } from './pages/SignUpPage'
import { Layout } from "./components/Layout";
import { NewIdeaPage } from './pages/NewIdeaPage'
import './styles/global.scss'
 export const App=()=>{
  return (
    <TrpcProvider>
      <BrowserRouter>
      <Routes>
        <Route element={<Layout/>}>
        <Route path={routes.getSignUpRoute()} element={<SignUpPage />} />
        <Route path={routes.getSignInRoute()} element={<SignInPage />} />
        <Route path={routes.getAllIdeasRoute()} element={<AllIdeasPage />} />
            <Route path={routes.getNewIdeaRoute()} element={<NewIdeaPage />} />
            <Route path={routes.getViewIdeaRoute(routes.viewIdeaRouteParams)} element={<ViewsIdeaPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
    </TrpcProvider>
  )

 }