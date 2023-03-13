import Login from "../components/Auth/Login/Login"
import Register from './../components/Auth/Register/Register';
import Disk from './../components/Disk/Disk';


export const privateRoutes = [
   { id: 1, path: '/registration', element: <Register /> },
   { id: 2, path: '/login', element: Login },
   { id: 3, path: '/*', element: Login }

]
export const publicRoutes = [
   { id: 1, path: '/', element: Disk }
]