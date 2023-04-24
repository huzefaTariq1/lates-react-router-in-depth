import { 
createBrowserRouter,
RouterProvider,
createRoutesFromElements,
Route,
} from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Layout from "./layout/Layout";
import HelpLayout from "./layout/HelpLayout";
import Contact from "./pages/help/Contact";
import Faq from "./pages/help/Faq";
import NotFound from "./pages/NotFound";


const router=createBrowserRouter(
  createRoutesFromElements(
    <Route element={<Layout/>}>
      <Route index element={<Home/>}/>
      <Route path="about" element={<About/>}/>

      <Route path="help" element={<HelpLayout/>}>
        <Route path="contact" element={<Contact/>}/>
        <Route path="faq" element={<Faq/>} />
      </Route>
      
      <Route path="*" element={<NotFound/>}/>
    </Route>
  )
)

function App() {
  return (
    <RouterProvider router={router}/>
  );
}

export default App
