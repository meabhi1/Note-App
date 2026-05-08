import './App.css'
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import ViewPaste from './componenets/ViewPaste';
import Navbar from './componenets/Navbar';
import Paste from './componenets/Paste';
import Home from './componenets/Home';


const router=createBrowserRouter(
[
  {
    path:'/',
    element:<div>
      <Navbar/>
      <Home/>
    </div>
  },

  {
    path:'/pastes',
    element:<div>
      <Navbar/>
      <Paste/>

    </div> 
  },

  {
     path:'/pastes/:id',
    element:<div>
      <Navbar/>
      <ViewPaste/>
    </div>
  },
]
)
function App() {
 

  return (
  <div>
    <RouterProvider router={router}>

    </RouterProvider>
  </div>
  )
}

export default App
