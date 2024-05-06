import PropTypes from 'prop-types';
import { Link } from "react-router-dom";

const User = ({user}) => {

    const {id, name, email, phone} = user;
    
    return (
        <div className="border-2 border-yellow-500 rounded-2xl p-5">
            <h2>{name}</h2>
            <p className="my-4">Email: {email}</p>
            <p className="my-4">Phone: {phone}</p>
            <Link className="text-xl text-blue-400 mr-4" to={`/user/${id}`}>Show Details</Link>
            <Link className="text-lg bg-gray-700 m-2 p-2 rounded" to={`/user/${id}`}>
                Click Me
            </Link>
        </div>
    );
};

User.propTypes = {
    user: PropTypes.object
}

export default User;