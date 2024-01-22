import { Outlet, Link, useLocation } from "react-router-dom";

const Layout = () => {
    const location = useLocation()

    return (
        <div className="bg-primary_1 h-screen w-screen">



            <Outlet />
        </div>
    )
};

export default Layout; 