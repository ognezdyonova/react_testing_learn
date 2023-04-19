import {useState} from "react";

function UserForm({onUserAdd}) {
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');

    const handlerSubmit = (event)=>{
        event.preventDefault();
        console.log(name,email);
        onUserAdd({name,email});
    }
    return <form onSubmit={handlerSubmit}>
        <div>
            <label>Name</label>
            <input value={name} onChange={e=>setName(e.target.value)} data-testid={'name'}/>
        </div>
        <div>
            <label>Email</label>
            <input value={email} onChange={e=>setEmail(e.target.value)} data-testid={'email'}/>
        </div>

        <button data-testid={'submitButton'}>Add User</button>
    </form>
}

export default UserForm;