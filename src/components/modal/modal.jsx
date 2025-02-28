import './modal.css'

function UserPage({ user, back}) {
    return (
        <div className="user-details">
          <button onClick={back}>Назад</button>
          <h1>{user.name}</h1>
          <p>Email: {user.email}</p>
          <p>Phone: {user.phone}</p>
          <p>Website: {user.website}</p>
        </div>
    )
}

export default UserPage
