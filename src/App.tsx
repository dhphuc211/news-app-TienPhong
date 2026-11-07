
import { RouterProvider } from "react-router-dom"
import { router } from "./routers/Routers"



const App = ()=>
{
    return <RouterProvider router={router}/>
}

export default App