import './App.css';
import Login from './components/Login'
import Register from './components/Register'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './components/Home'

function App() {
  const router = createBrowserRouter([
    {
      path:"/",
      element:<Home/>
    },
    {
      path:"/login",
      element:<Login/>
    },
    {
      path:"/register",
      element:<Register/>
    }
  ])

  return (
    <>
    <RouterProvider router={router}/>
    </>
    
  );
}

export default App;
