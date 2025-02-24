import './media.css'
import './modal.css'

function Modal({ user, active }) {
    return (
        <div className="overlay" onClick={() => active(false)} >
            <dialog className="usersModal" open>
                <center>
                    <h1>{user.name}</h1>
                    <p>{user.age} years old</p>
                </center>
                <button className="closeModal" onClick={() => active(false)}>x</button>
            </dialog>
        </div>
    )
}

export default Modal
