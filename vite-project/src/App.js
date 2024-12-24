import {createBrowserRouter, RouterProvider, createRoutesFromElements, Route} from 'react-router-dom'
import HomePage from './pages/HomePage.js';
import Products from './pages/Products.js';
import Root from './pages/Root.js';
import Error from './pages/Error.js';
import ProductDetail from './pages/ProductDetail.js';

const router = createBrowserRouter([
  {
    path:'/',
    element: <Root />,
    errorElement:<Error />,
    children: [
      {path: '/', element: <HomePage />},
      {path: '/products', element: <Products />},
      {path: '/products/:id', element: <ProductDetail />},
  ]},
  
])
function App() {
  return <RouterProvider router= {router} />;
}

export default App;
