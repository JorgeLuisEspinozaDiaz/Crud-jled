import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import DeleteElimarUser from './DeleteElimarUser'

import './styles/formUser.css'

const FormUser = ({ createNewUser, updateInfo, updateUserById, setUpdateInfo, setcloseForm }) => {

    const { register, reset, handleSubmit } = useForm()


    useEffect(() => {
        reset(updateInfo)

    }, [updateInfo])


    const createUsuario = data => {
        if (updateInfo) {
            updateUserById(updateInfo.id, data)
            setUpdateInfo()
            console.log('se actualizo ')

        } else {
            createNewUser(data)
        }
        setcloseForm(true)

        reset({
            email: '',
            password: '',
            first_name: '',
            last_name: '',
            birthday: ''
        })
    }

    return (



        <form className='form' onSubmit={handleSubmit(createUsuario)}>
            <div onClick={() => setcloseForm(true)} className='form__x'>X</div>
            <h2 className='form__title'>
                {
                    updateInfo ? 'Update User' : 'Create User'
                }
            </h2>
            <div className='form__div'>
                <label className='form__label' htmlFor='email'>Email</label>
                <input className='form_input' type='email' id='email' {...register('email')} />
            </div>
            <div className='form__div'>
                <label className='form__label' htmlFor='password'>Password</label>
                <input className='form_input' type='password' id='password' {...register('password')} />
            </div>
            <div className='form__div'>
                <label className='form__label' htmlFor='first_name'>First name</label>
                <input className='form_input' type='text' id='first_name' {...register('first_name')} />
            </div>
            <div className='form__div'>
                <label className='form__label' htmlFor='last_name'>Last name</label>
                <input className='form_input' type='text' id='last_name'  {...register('last_name')} />
            </div>
            <div className='form__div'>
                <label className='form__label' htmlFor='birthday'>Birthday</label>
                <input className='form_input' type='date' id='birthday'  {...register('birthday')} />
            </div>
            <button className='form__btn'>{updateInfo ? 'Update' : 'Create'}</button>
        </form>

    )
}

export default FormUser