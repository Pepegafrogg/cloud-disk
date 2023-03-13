import React from 'react'
import s from './NavBar.module.scss'
import logo from '../../img/logo.svg'
import { NavLink } from 'react-router-dom'
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { logout } from '../../redux/userSlice';

export default function NavBar() {
   const dispatch = useDispatch()
   const { isAuth } = useSelector((state) => state.user)
   return (
      <div className={s.navContainer}>
         <div className={s.nav}>
            <div className={s.navLogo}>
               <img src={logo} alt="" />
               <span>MERN CLOUD</span>
            </div>
            <div className={s.navAuth}>
               {!isAuth && <NavLink to='/login'><span>Войти</span></NavLink>}
               {!isAuth && <NavLink to='registration'><span>Регистрация</span></NavLink>}
               {isAuth && <NavLink to='/' onClick={() => dispatch(logout())} ><span>Выйти</span></NavLink>}
            </div>
         </div>
      </div>
   )
}
