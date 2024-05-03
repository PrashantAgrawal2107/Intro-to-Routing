import { useState } from "react";
import Navbar from "./components/Navbar";
import About from "./pages/About";
import Home from './pages/Home';
import Items from './pages/Items';
import { createBrowserRouter , RouterProvider ,createRoutesFromElements,Route} from "react-router-dom";
import ItemDetails from "./pages/ItemDetails";
import ErrorPage from "./pages/ErrorPage";

function App() {

  // const [page,setPage] = useState("Home");
  

  // Creating Router way 1 -->>

  // const routes = createRoutesFromElements(
  //   <>
  //   <Route path="/" element={<Home/>} />
  //   <Route path="/about" element={<About/>} />
  //   <Route path="/items" element={<Items/>} />
  //   </>
  // )
  // const myRouter = createBrowserRouter(routes);


  // Creating Router way 2 -->>

  const myRouter = createBrowserRouter([
      {
         path:"/" ,
         element:<Navbar/>, 
         errorElement:<ErrorPage/>,
         children:[
          {path:"" , element:<Home/>},
          {path:"about" , element:<About/>},
          { 
            path:"items",
            children:[
              {index:true , element:<Items/>},
              {path:":id" , element:<ItemDetails/>}
            ]
          },
          
        ] 
    }
  ])


  return (
    <>
    {/* <Navbar/> */}
    <RouterProvider router={myRouter}/>
    {/* <Navbar setPage={setPage}/> */}
    {/* {page==="Home" && <Home/>}
    {page==="About" && <About/>}
    {page==="Items" && <Items/>} */}
   </>
  )
  
}

export default App;
