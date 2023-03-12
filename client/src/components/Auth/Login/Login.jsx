import React from 'react'
import ErorrMesage from '../../UI/ErorrMesage/ErorrMesage';
import Button from './../../UI/Button/Button';
import { useForm } from 'react-hook-form';
import s from './Login.module.scss'

export default function Login() {
   const { register, handleSubmit, formState: { errors } } = useForm({ mode: 'onChange' });
   const onSubmit = data => console.log(data);

   return (
      <div className='container'>
         <div className={s.log}>
            <div className={s.logTitle}>Авторизация</div>
            <form className={s.logForm} onSubmit={handleSubmit(onSubmit)}>
               <input placeholder='Имя' {...register("name", { required: 'Обязательное поле' })} />
               {errors.name && <ErorrMesage>{errors.name.message}</ErorrMesage>}

               <input placeholder='Почта' {...register("email", { required: 'Обязательное поле' })} />
               {errors.email && <ErorrMesage>{errors.email.message}</ErorrMesage>}

               <input placeholder='Пароль' type='password' {...register("password", { required: 'Обязательное поле' })} />
               {errors.password && <ErorrMesage>{errors.password.message}</ErorrMesage>}
               <Button>Войти</Button>
            </form>
         </div>
      </div>
   );
}