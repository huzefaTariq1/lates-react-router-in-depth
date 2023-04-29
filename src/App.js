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
import Contact, { contactAction } from "./pages/help/Contact";
import Faq from "./pages/help/Faq";
import NotFound from "./pages/NotFound";
import ProductsLayout from "./layout/ProductsLayout";
import Products, { productsLoader } from "./pages/product/Products";
import ProductDetail, {
  singleProductLoader,
} from "./pages/product/ProductDetail";
import ProductError from "./pages/product/ProductError";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />

      <Route path="help" element={<HelpLayout />}>
        <Route path="contact" element={<Contact />} action={contactAction} />
        <Route path="faq" element={<Faq />} />
      </Route>

      <Route
        path="products"
        element={<ProductsLayout />}
        errorElement={<ProductError />}
      >
        <Route index element={<Products />} loader={productsLoader} />
        <Route
          path=":id"
          element={<ProductDetail />}
          loader={singleProductLoader}
        />
      </Route>

      <Route path="*" element={<NotFound />} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
