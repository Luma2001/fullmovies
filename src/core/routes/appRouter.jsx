import { createBrowserRouter } from "react-router-dom"
import Home from "../../features/home/views/home_view";
import Login from "../../features/login/views/login_view";
import PrivateRoute from "../auth/components/private_route";
import PublicRoute from "../auth/components/public_route";

export const AppRouter = createBrowserRouter([
    {
        path:"/",
        element:<PrivateRoute><Home/></PrivateRoute>
        
        
    },
    {
        path:"/login",
        element: <PublicRoute><Login/></PublicRoute>
    }
]); 

//Fc que le dice a la app de React que use la api nativa del navegador para las rutas. 
// Esta es una fc que recibe un array de rutas. 
// Las rutas son objetos, que tiene dos propiedades obligatorias. 
// El path y el Component, que a diferencia de element permite cargar las vistas a demanda.
//Component, son todos los archivos .jsx que renderizan una vista, 
// un element es básicamente lo que retorna el Component, si yo ejecuto el componente, obtengo el elemento
//Cuando usamos Component en vez de element  vamos a hacer importaciones dinámicas. 
// Es decir vamos a cargarr el componente recién cuando lo necesitemos.
// En las últimas versiones de react-router cuando usamos element podemos hacer importaciones dinámicas también
