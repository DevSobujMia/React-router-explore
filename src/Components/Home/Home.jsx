import { Outlet, useLocation, useNavigate } from "react-router-dom";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";

const Home = () => {
    const navigate = useNavigate();
    const location = useLocation();

    console.log(location);

    return (
        <div>
            <Header></Header>
            <div className="max-w-[1170px] mx-auto p-5">
            {
                navigate.state === "loading" ?
                <p>Loading...</p> :
                <Outlet></Outlet>
            }

            </div>
            
            <Footer className=""></Footer>

        </div>
    );
};

export default Home;