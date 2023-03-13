import logo from './logo.svg';
import './App.css';
import Login from './Components/Login';
import Register from './Components/Register';
import RandomQuote from './Components/RandomQuote';
import GetShippers from './Components/GetShippers';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ThirtyQuotes from './Components/ThirtyQuotes';
const router = createBrowserRouter([
  {
    path: "/login",
   
    element: <Login />,
  },
  {
    path: "/",
   
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path:"/get-30-quotes",
    element:<ThirtyQuotes/>
  },
  {
    path: "/random-quote",
    element: <RandomQuote />,
  },
  {
    path: "/get-shippers",
    element: <GetShippers />,
  },

]);
function App() {
  return (
    <RouterProvider
    router={router}
 
  />
  );
}

export default App;
