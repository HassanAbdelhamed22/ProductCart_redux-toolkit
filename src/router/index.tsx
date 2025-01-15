import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import ErrorHandler from "../components/errors/ErrorHandler";
import Layout from "../pages/Layout";
import PageNotFound from "../pages/PageNotFound";
import Home from "../pages/Home";
import Pricing from "../pages/Pricing";
import Features from "../pages/Features";
import Cart from "../pages/Cart";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Layout />} errorElement={<ErrorHandler />}>
        <Route index element={<Home />} />
      </Route>
      <Route path="/pricing" element={<Pricing />} />
      <Route path="/features" element={<Features />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="*" element={<PageNotFound />} />
    </>
  )
);

export default router;
