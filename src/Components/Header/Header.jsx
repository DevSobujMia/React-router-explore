import { Link } from "react-router-dom";

const Header = () => {
    return (
        <div>
            <nav className="flex justify-center gap-10 bg-gray-400 font-semibold">
                <Link className="py-2 px-8 m-2 hover:text-blue-400 hover:bg-gray-700 duration-500 bg-gray-600 rounded" to="/">Home</Link>
                <Link className="py-2 px-8 m-2 hover:text-blue-400 hover:bg-gray-700 duration-500 bg-gray-600 rounded" to="/users">Users</Link>
                <Link className="py-2 px-8 m-2 hover:text-blue-400 hover:bg-gray-700 duration-500 bg-gray-600 rounded" to="/posts">Posts</Link>
                <Link className="py-2 px-8 m-2 hover:text-blue-400 hover:bg-gray-700 duration-500 bg-gray-600 rounded" to="/about">About</Link>
                <Link className="py-2 px-8 m-2 hover:text-blue-400 hover:bg-gray-700 duration-500 bg-gray-600 rounded" to="/contact">Contact</Link>
            </nav>
        </div>
    );
};

export default Header;