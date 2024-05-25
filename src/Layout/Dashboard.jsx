import { NavLink, Outlet } from "react-router-dom";
import { FaHome, FaShoppingCart } from "react-icons/fa";
import { RiSecurePaymentFill } from "react-icons/ri";
import { MdPreview } from "react-icons/md";
import { TbBrandBooking } from "react-icons/tb";
import { FaCalendar, FaList, FaUsers } from "react-icons/fa6";
import { FiMenu } from "react-icons/fi";
import useCart from "../hooks/useCart";
import { ImSpoonKnife } from "react-icons/im";


const Dashboard = () => {
    const [cart] = useCart();

    // TODO: get isAdmin value from the database
    const isAdmin = true;

    return (
        <div className="flex">
           <div className="w-64 min-h-screen bg-[#D1A054]">
                <ul className="menu">
                    {
                        isAdmin ? <>
                        <li>
                        <NavLink to="/dashboard/adminhome">
                        <FaHome></FaHome>
                        Admin Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/dashboard/additems">
                        <ImSpoonKnife></ImSpoonKnife>
                        Add Items</NavLink>
                    </li>
                    <li>
                        <NavLink to="/dashboard/manageitems">
                        <FaList></FaList>
                        Manage Items</NavLink>
                    </li>
                    <li>
                        <NavLink to="/dashboard/managebooking">
                        <TbBrandBooking></TbBrandBooking>
                         Manage Booking</NavLink>
                    </li>
                    <li>
                        <NavLink to="/dashboard/users">
                        <FaUsers></FaUsers>
                        All Users</NavLink>
                    </li>
                        </>
                        :
                        <>
                        <li>
                        <NavLink to="/dashboard/userhome">
                        <FaHome></FaHome>
                        User Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/dashboard/reservation">
                        <FaCalendar></FaCalendar>
                        Reservation</NavLink>
                    </li>
                    <li>
                        <NavLink to="/dashboard/payment">
                        <RiSecurePaymentFill></RiSecurePaymentFill>
                        Payment History</NavLink>
                    </li>
                    <li>
                        <NavLink to="/dashboard/cart">
                        <FaShoppingCart></FaShoppingCart>
                        My Cart({cart.length})</NavLink>
                    </li>
                    <li>
                        <NavLink to="/dashboard/review">
                        <MdPreview></MdPreview>
                         Add Review</NavLink>
                    </li>
                    <li>
                        <NavLink to="/dashboard/booking">
                        <TbBrandBooking></TbBrandBooking>
                         My Booking</NavLink>
                    </li>
                        </>
                    }
                    {/* shared nav Links */}
                    <div className="divider"></div>
                    <li>
                        <NavLink to="/">
                        <FaHome></FaHome>
                        Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/order">
                        <FiMenu></FiMenu>
                        Menu</NavLink>
                    </li>
                    <li>
                        <NavLink to="/">
                        <FaHome></FaHome>
                        Shop</NavLink>
                    </li>
                    <li>
                        <NavLink to="/">
                        <FaHome></FaHome>
                        Contact</NavLink>
                    </li>
                </ul>
           </div>
           <div className="flex-1 p-8">
                <Outlet></Outlet>
           </div>
        </div>
    );
};

export default Dashboard;