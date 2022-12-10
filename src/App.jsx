import { useEffect, useState } from 'react'
import './App.css'
import DeleteElimarUser from './components/DeleteElimarUser'
import FormUser from './components/FormUser'
import UserCard from './components/UserCard'
import useCrud from './hooks/useCrud'

function App() {
  const { users, getUsers, createNewUser, deleteUser, updateUserById } = useCrud()

  const [updateInfo, setUpdateInfo] = useState()

  const [closeForm, setcloseForm] = useState(true)




  useEffect(() => {
    getUsers()
  }, [])

  return (
    <div className="App">

      <div className='container__principal'>
        <h1>Users</h1>
        <button onClick={() => setcloseForm(false)} className='App__btn'>Open Form</button>
      </div>
      <div className={`form-container ${closeForm && 'close__form'}`}>

        <FormUser
          createNewUser={createNewUser}
          updateInfo={updateInfo}
          updateUserById={updateUserById}
          setcloseForm={setcloseForm}
          setUpdateInfo={setUpdateInfo}

        />
      </div>



      <div className='user-container'>

        {
          users?.map(user => (<UserCard key={user.id}
            user={user}
            deleteUser={deleteUser}
            setUpdateInfo={setUpdateInfo}
            setcloseForm={setcloseForm}
          />))
        }

      </div>
    </div >
  )
}

export default App
