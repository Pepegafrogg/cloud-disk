import React from 'react'
import s from './Button.module.scss'

export default function Button({ children }) {
   return (
      <button className={s.btn}>{children}</button>
   )
}
