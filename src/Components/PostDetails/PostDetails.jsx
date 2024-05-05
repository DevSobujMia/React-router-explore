import { useLoaderData, useNavigate, useParams } from "react-router-dom";

const PostDetails = () => {
    const post = useLoaderData();
    const {postId} = useParams();
    const navigate = useNavigate();
    const {id, title, body} = post;

    console.log(postId);

    const handleGoBack = () => {
        navigate(-1);
    }


    return (
        <div>
            <h3>Post Details About: {id}</h3>
            <p>Title: {title}</p>
            <p><small>{body}</small></p>
            <button className="text-lg bg-gray-700 m-2 p-2 rounded" onClick={handleGoBack}>Go Back</button>
        </div>
    );
};

export default PostDetails;