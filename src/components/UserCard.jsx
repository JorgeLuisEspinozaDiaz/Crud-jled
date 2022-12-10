import React, { useState } from 'react'
import DeleteElimarUser from './DeleteElimarUser'

import './styles/cardUser.css'

const UserCard = ({ user, deleteUser, setUpdateInfo, setcloseForm }) => {


    const [first, setfirst] = useState(false)

    const deleteUsers = () => {
        if (setfirst(!first)) {
            deleteUser(user.id)
        }

    }
    const handleEdit = () => {
        setUpdateInfo(user)
        setcloseForm(false)
    }


    return (
        <>

            <article className='card'>
                <h3 className='card__title'>{user.first_name} {user.last_name}</h3>
                <ul className='card__body'>
                    <li className='card__item'><span className='card__span'>Correo</span>{user.email}</li>
                    <li className='card__item'><span className='card__span'>Cumpleaños</span>{user.birthday}</li>
                </ul>
                <footer className='card__footer'>

                    <button className='card__btn card__btn__trash' onClick={deleteUsers}><i className="fa-solid fa-trash-can "></i>
                    </button>
                    <button className='card__btn card__btn__edit' onClick={handleEdit}><i className="fa-regular fa-pen-to-square"></i>
                    </button>
                </footer>
            </article>
            <div className='delete'>
                <DeleteElimarUser user={user} first={first} setfirst={setfirst} deleteUser={deleteUser} />
            </div>

        </>


    )
}

export default UserCard