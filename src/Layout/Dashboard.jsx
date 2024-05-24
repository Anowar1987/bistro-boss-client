import { NavLink, Outlet } from "react-router-dom";


const Dashboard = () => {
    return (
        <div className="flex">
            {/* dashboard side bar */}
            <div className="w-64 min-h-full bg-[#D1A054]">
                <ul className="menu">
                    <li><NavLink to='/dashboard/cart'>My Cart</NavLink></li>
                </ul>
            </div>
            <div className="flex-1">
                {/* dashboard content */}
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;