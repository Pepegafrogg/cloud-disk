import NavBar from "./components/NavBar/NavBar";
import './App.scss'
import Login from './components/Auth/Login/Login';
import Register from './components/Auth/Register/Register';
import { Route, Routes } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { auth } from './redux/userSlice';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { privateRoutes, publicRoutes } from "./router/router";

function App() {
   const dispatch = useDispatch()
   const { isAuth } = useSelector((state) => state.user)

   useEffect(() => {
      dispatch(auth())
   }, []);

   return (
      <div className="App">
         <NavBar />
         <Routes>
            <Route path='login' element={<Login />} />
            <Route path='registration' element={<Register />} />
            <Route path='/*' element={<Login />} />
            {/* {!isAuth
               ? privateRoutes.map(route => {
                  < Route key={route.id} path={route.path} element={route.element} />
               })
               : publicRoutes.map(route => {
                  <Route key={route.id} path={route.path} element={<Route.element />}></Route>
               })
            } */}
         </Routes>
      </div >
   );
}

export default App;
