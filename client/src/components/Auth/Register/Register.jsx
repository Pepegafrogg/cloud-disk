import React from 'react'
import ErorrMesage from '../../UI/ErorrMesage/ErorrMesage';
import Button from './../../UI/Button/Button';
import { useForm } from 'react-hook-form';
import s from './Register.module.scss'
import { registration } from './../../../redux/userSlice';
import { useDispatch } from 'react-redux';

export default function Register() {
   const dispatch = useDispatch()
   const { register, handleSubmit, formState: { errors } } = useForm({ mode: 'onChange' });
   const isValidEmail = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/
   const onSubmit = (data) => {
      const { email, password } = data
      dispatch(registration({ email, password }))
   }

   return (
      <div className='container'>
         <div className={s.reg}>
            <div className={s.regTitle}>Регистрация</div>
            <form className={s.regForm} onSubmit={handleSubmit(onSubmit)}>
               <input placeholder='Имя' {...register("name", { required: 'Обязательное поле' })} />
               {errors.name && <ErorrMesage>{errors.name.message}</ErorrMesage>}

               <input placeholder='Почта' {...register("email", { required: 'Обязательное поле', pattern: { value: isValidEmail, message: 'Неверная почта' } })} />
               {errors.email && <ErorrMesage>{errors.email.message}</ErorrMesage>}

               <input placeholder='Пароль' type='password' {...register("password", { required: 'Обязательное поле' })} />
               {errors.password && <ErorrMesage>{errors.password.message}</ErorrMesage>}
               <Button>Зарегистрироваться</Button>
            </form>
         </div>
      </div>
   );
}
