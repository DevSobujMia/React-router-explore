import PropTypes from 'prop-types';
import { Link, useNavigate } from "react-router-dom";

const Post = ({post}) => {
    const {id, title} = post;

    const navigate = useNavigate();

    const handleShowDetail = () =>{
        navigate(`/post/${id}`);
    }

    return (
        <div className="border-2 border-yellow-600 p-5 rounded-2xl">
            <h2 className="my-4">Post of Id: {id}</h2>
            <p className="my-4">{title}</p>
            <Link className="text-xl text-sky-500 mr-4" to={`/post/${id}`}>Post Detail</Link>
            <Link className="text-lg bg-gray-700 m-2 p-2 rounded" to={`/post/${id}`}><button>Show Details</button></Link>
            <button className="bg-gray-800 my-8 ml-20 p-4 rounded-lg" onClick={handleShowDetail}>Click to see Details</button>
        </div>
    );
};

Post.propTypes = {
    post: PropTypes.object
}

export default Post;