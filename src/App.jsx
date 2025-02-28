import { useEffect, useState } from 'react'
import UserPage from './components/modal/modal'
import './App.css'
import './media.css'


function App() {
  const [users, setUsers] = useState([])
  const [selectedUser, setSelectedUser] = useState(null)
  const [userPage, setUserPage] = useState(false)

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((res) => setUsers(res));
  }, [])

  const openUserPage = (user) => {
    setSelectedUser(user)
    setUserPage(true)
    window.history.pushState(null, '', `user/${user.id}`)
  }

  const goBack = () => {
    setSelectedUser(null)
    setUserPage(false)
    window.history.pushState(null, '', '/')
  }

  return (
    <div>
      {
        userPage ? (
          <UserPage user={selectedUser} setUser={setSelectedUser} back={goBack} />
        ) : (
          <div className="container">
            {
              users.map((user) => (
                <div
                  key={user.id}
                  className="profile-container"
                  onClick={() => {
                    openUserPage(user)
                  }}
                >
                  <h1>{user.name}</h1>
                  <b>{user.email} years old</b>
                </div>
              ))
            }
          </div>
        )
      }
    </div>
  )
}

export default App;