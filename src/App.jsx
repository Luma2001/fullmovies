
import { RouterProvider } from 'react-router-dom'
import './App.css'

import { AppRouter } from './core/routes/appRouter'
import RootProvider from './core/providers/root_provider'



const App = () => {
  return (
    <>

      <RootProvider>
          <RouterProvider router={ AppRouter }/>  
      </RootProvider>
          
    </>

  )
}

export default App