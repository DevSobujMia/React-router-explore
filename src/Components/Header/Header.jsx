import { Link, NavLink } from "react-router-dom";

const Header = () => {
    return (
        <div>
            <nav className="flex justify-center gap-10 bg-gray-400 font-semibold">
                <Link className="py-2 px-8 m-2 hover:text-blue-400 hover:bg-gray-700 duration-500 bg-gray-600 rounded" to="/">Home</Link>
                <NavLink className="py-2 px-8 m-2 hover:text-blue-400 hover:bg-gray-700 duration-500 bg-gray-600 rounded" to="/users">Users</NavLink>
                <NavLink className="py-2 px-8 m-2 hover:text-blue-400 hover:bg-gray-700 duration-500 bg-gray-600 rounded" to="/posts">Posts</NavLink>
                <NavLink className="py-2 px-8 m-2 hover:text-blue-400 hover:bg-gray-700 duration-500 bg-gray-600 rounded" to="/about">About</NavLink>
                <NavLink className="py-2 px-8 m-2 hover:text-blue-400 hover:bg-gray-700 duration-500 bg-gray-600 rounded" to="/contact">Contact</NavLink>
            </nav>
        </div>
    );
};

export default Header;