import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div className="flex flex-col justify-center items-center h-screen">
            <h2 className="text-5xl text-center mb-6">Oops !!</h2>
            <p className="text-xl">Page not found</p>
            <p className="text-lg my-4">Go Back</p>
            <Link to="/">
                <button className="bg-gray-950 m-2 py-3 px-6 rounded-lg border">Home</button>
            </Link>
        </div>
    );
};

export default ErrorPage;
