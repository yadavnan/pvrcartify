import App from "./App";
import Product from "./pages/Product";
import Checkout from "./pages/Checkout";
import ErrorPage from "./pages/ErrorPage";
import DefaultPage from "./pages/DefaultPage";

const routes = [
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <DefaultPage /> },
      { path: "product", element: <Product /> },
      { path: "checkout", element: <Checkout /> },
    ],
  },
];

export default routes;
