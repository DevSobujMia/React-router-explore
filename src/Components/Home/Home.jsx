import { Outlet, useLocation, useNavigation } from "react-router-dom";
import Footer from "../Footer/Footer";
import Form from "../Form/Form";
import Header from "../Header/Header";

const Home = () => {
    const navigation = useNavigation();
    const location = useLocation();

    console.log(location);

    return (
        <div>
            <Header></Header>
            {
                location.pathname === '/' && <Form></Form>
            }
            
            <main className="max-w-[1170px] mx-auto p-5">
            {
                navigation.state === "loading" ?
                <p>Loading...</p> :
                <Outlet></Outlet>
            }

            </main>
            
            <Footer></Footer>

        </div>
    );
};

export default Home;