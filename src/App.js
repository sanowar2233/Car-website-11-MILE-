
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Main from './Layout/Main';
import Order from './Order/Order';
import Checkout from './Pages/Home/Checkout';
import Home from './Pages/Home/Home';
import Login from './UserInfo/Login';
import SignUp from './UserInfo/SignUp';

function App() {

  const router= createBrowserRouter([
    {
      path:'/', element:<Main></Main>, children:[

        {
          path:'/', element:
        <Home></Home>
      },
      {
        path:'/login',element:<Login></Login>

      },
      {
        path:'/register',element:<SignUp></SignUp>
      },
      {
         path:'/checkout/:id', element: <Checkout></Checkout>,
         loader:({params})=>fetch(`http://localhost:5000/services/${params.id}`)
      },
      {
        path:'/orders', element:<Order></Order>
      }
      ]
    }
  ])



  return (
    <div data-theme='light'  className='max-w-screen-xl mx-auto' >
      <RouterProvider router={router}></RouterProvider>
     
    </div>
  );
}

export default App;
