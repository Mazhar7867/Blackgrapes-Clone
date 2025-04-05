
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import AppLayout from './AppLayout'
import Home from "./Components/Home"
import AboutUs from './Components/AboutUs';
import ContactUs from './Components/ContactUs';
import Ecommerce from './Components/Ecommerce'
import ITStaffing from './Components/ITStaffing'
import OurClients  from './Components/OurClients'
import OurProducts  from './Components/OurProducts'
const App=()=> {
  const myRouter = createBrowserRouter([
  {
    path:"/Blackgrapes",
    element: <AppLayout/>,
    children:[
      {
        path:"home",
        element:<Home/>
      },
     {
        path:"about",
        element:<AboutUs/>
      },
      {
        path:"ecommerce",
        element:<Ecommerce/>
      },
      {
        path:"iTstaffing",
        element:<ITStaffing/>
      },
      {
        path:"ourClients",
        element:<OurClients/>
      },
      {
        path:"OurProducts",
        element:<OurProducts/>
      },
      {
        path:"contact",
        element:<ContactUs/>
      }
    ]
  }
]);
  return (
    <div>
     

      <RouterProvider router={myRouter}/>
   

    </div>
  );
}

export default App






