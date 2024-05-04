import { Link } from "react-router-dom";

const User = ({user}) => {
    const {id, name, email, phone} = user;
    return (
        <div className="border-2 border-yellow-800 rounded-2xl p-5">
            <h2>{name}</h2>
            <p className="my-4">Email: {email}</p>
            <p>Phone: {phone}</p>
            <Link></Link>
        </div>
    );
};

export default User;