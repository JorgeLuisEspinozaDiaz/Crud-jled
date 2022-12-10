import axios from "axios"
import { useState } from "react"

const useCrud = () => {
    //estados
    const [users, setUsers] = useState()

    //obtener usuario
    const getUsers = () => {
        const URL = 'https://users-crud.academlo.tech/users/'
        axios.get(URL)
            .then(res => setUsers(res.data))
            .catch(err => console.log(err))
    }
    //create 
    const createNewUser = data => {
        const URL = 'https://users-crud.academlo.tech/users/'
        axios.post(URL, data)
            .then(() => {
                getUsers()
            })
            .catch()
    }
    //delete
    const deleteUser = id => {
        const URL = `https://users-crud.academlo.tech/users/${id}/`
        axios.delete(URL)
            .then(() => {
                getUsers()
            })
            .catch(err => console.log(err))
    }

    //update 
    const updateUserById = (id, data) => {
        const URL = `https://users-crud.academlo.tech/users/${id}/`
        axios.put(URL, data)
            .then(() => {
                getUsers()
            })
            .catch(err => console.log(err))
    }
    return {
        users,
        getUsers,
        createNewUser,
        deleteUser,
        updateUserById
    }
}

export default useCrud