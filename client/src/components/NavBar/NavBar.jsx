import React from 'react'
import s from './NavBar.module.scss'
import logo from '../../img/logo.svg'
import { NavLink } from 'react-router-dom'

export default function NavBar() {
   return (
      <div className={s.navContainer}>
         <div className={s.nav}>
            <div className={s.navLogo}>
               <img src={logo} alt="" />
               <span>MERN CLOUD</span>
            </div>
            <div className={s.navAuth}>
               <NavLink to='/login'><span>Войти</span></NavLink>
               <NavLink to='registration'><span>Регистрация</span></NavLink>
            </div>
         </div>
      </div>
   )
}
