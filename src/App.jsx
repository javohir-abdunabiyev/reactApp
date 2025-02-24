import { useState } from 'react'
import Modal from './components/modal/modal'
import './App.css'
import './media.css'


const users = [
  { "id": 1, "name": "Alex Adams", "age": 23 },
  { "id": 2, "name": "John Doe", "age": 25 },
  { "id": 3, "name": "Emily Smith", "age": 22 },
  { "id": 4, "name": "Michael Brown", "age": 30 },
  { "id": 5, "name": "Sarah Johnson", "age": 27 },
  { "id": 6, "name": "David Williams", "age": 24 },
  { "id": 7, "name": "Laura Miller", "age": 26 },
  { "id": 8, "name": "James Taylor", "age": 29 },
  { "id": 9, "name": "Sophia Davis", "age": 21 },
  { "id": 10, "name": "Daniel Moore", "age": 28 }
]

let exportSetUser;

function App() {
  const [selectedUser, SetUser] = useState(null)
  const [showModal, SetShowModal] = useState(false)
  exportSetUser = SetUser
  return (
    <div>
      <div className={`container ${showModal ? 'blurred' : ""}`}>
        {
          users.map((user, idx) => (
            <div
              key={user.id}
              className="profile-container"
              onClick={() => {
                SetUser(user)
                SetShowModal(true)
              }}
            >
              <h1>{user.name}</h1>
              <b>{user.age} years old</b>
            </div>
          ))
        }
      </div>
      {
        showModal && (
          <Modal user={selectedUser} active={SetShowModal} />
        )
      }
    </div>
  )
}

export default App;
export { exportSetUser }