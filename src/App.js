import "./styles.css";
import UserForm from "./components/UserForm";
import {useState} from "react";
import UserList from "./components/UserList";
import ProductList from "./components/ProductList";

export default function App() {
    const [users, setUsers] = useState([]);
    const onUserAdd = (user) => {
        setUsers([...users, user]);
    }
    return (
        <div className="container mx-auto">
            <UserForm onUserAdd={onUserAdd}/>
            <hr/>
            <UserList users={users}/>
            <hr/>
            <ProductList/>
        </div>

    );
}
