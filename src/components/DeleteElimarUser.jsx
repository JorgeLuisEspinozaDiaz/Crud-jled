import React from 'react'
import './styles/deleteCard.css'
const DeleteElimarUser = ({ user, setfirst, first, deleteUser }) => {

    const deleteUsers = () => {
        deleteUser(user.id)
        console.log('usuario eliminado')
    }



    return (
        <>
            {first &&
                < div className='container__delete' >
                    <div className='card__delete'>
                        <button className='btn__x' onClick={() => setfirst(!first)}>X</button>
                        <h3 className='delete__title'>ELIMINAR USUARIO</h3>
                        <p className='delete__texto'>Desea eliminar el usuario {user.first_name} {user.last_name} ?</p>
                        <div className='container__button'>
                            <button className='button__delete' onClick={deleteUsers}>SI</button>
                            <button className='button__delete' onClick={() => setfirst(!first)}>NO</button>
                        </div>
                    </div>
                </div>
            }
        </>
    )
}

export default DeleteElimarUser