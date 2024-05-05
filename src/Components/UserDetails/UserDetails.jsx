import { useLoaderData, useNavigate } from "react-router-dom";

const UserDetails = () => {
    const user = useLoaderData();

    const navigate = useNavigate();

    const handleGoBack = () =>{
        navigate(-1);
    }
    
    const {name, website} = user;
    return (
        <div>
            <h2>User Details: {name}</h2>
            <p>Website: {website}</p>
            <button className="text-lg bg-gray-700 m-2 p-2 rounded" onClick={handleGoBack}>Go Back</button>
        </div>
    );
};

export default UserDetails;