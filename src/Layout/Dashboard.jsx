import {BsCart4, BsWallet2, BsCalendar3} from "react-icons/bs";
import {FaBook, FaUsers, FaUtensils} from "react-icons/fa";
import {FaHome} from "react-icons/fa";
import {NavLink, Outlet} from "react-router-dom";
import useCart from "../hooks/useCart";
import useAdmin from "../hooks/useAdmin";


const Dashboard = () => {
    const [cart] = useCart();

    // TODO: load data from the server to have dynamic isAdmin based on data
    // const isAdmin = false;
    const isAdmin = useAdmin();
    console.log(isAdmin);

    return (
        <div className="drawer drawer-mobile">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col">
                <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>
                <Outlet />
            </div>
            <div className="drawer-side bg-[#D1A054]">
                <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                <ul className="menu p-4 w-80">
                    {
                        isAdmin[0] ? <>
                            <li><NavLink to='/dashboard/home'><FaHome className="text-3xl" />Admin Home</NavLink></li>
                            <li><NavLink to='/dashboard/reservation'><FaUtensils className="text-3xl" />Add Items</NavLink></li>
                            <li><NavLink to='/dashboard/myCart'><FaBook className="text-3xl" />Manage Bookings</NavLink></li>
                            <li><NavLink to='/dashboard/allUsers'><FaUsers className="text-3xl" />All Users</NavLink></li>
                            <div className="divider"></div>
                            <li><NavLink to='/'><FaHome className="text-3xl" />Home</NavLink></li>
                            <li><NavLink to='/menu'>Our Menu</NavLink></li>
                            <li><NavLink to='/order/salad'>Order Food</NavLink></li>
                        </> :
                            <>
                                <li><NavLink to='/dashboard/home'><FaHome className="text-3xl" />User Home</NavLink></li>
                                <li><NavLink to='/dashboard/reservation'><BsCalendar3 className="text-3xl" />Reservation</NavLink></li>
                                <li><NavLink to='/dashboard/history'><BsWallet2 className="text-3xl" />Payment History</NavLink></li>
                                <li><NavLink to='/dashboard/myCart'><BsCart4 className="text-3xl" />My Cart {cart.length}</NavLink></li>
                                <div className="divider"></div>
                                <li><NavLink to='/'><FaHome className="text-3xl" />Home</NavLink></li>
                                <li><NavLink to='/menu'>Our Menu</NavLink></li>
                                <li><NavLink to='/order/salad'>Order Food</NavLink></li>
                            </>
                    }
                </ul>
            </div>
        </div>
    );
};


export default Dashboard;