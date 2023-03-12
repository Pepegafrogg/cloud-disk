import React from 'react'
import s from './ErorrMesage.module.scss'

export default function ErorrMesage({ children }) {
   return (
      <div className={s.errorMessage}>{children}</div>
   )
}
