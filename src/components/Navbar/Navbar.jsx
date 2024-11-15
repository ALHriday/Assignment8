import { useContext } from "react";
import { Link} from "react-router-dom";
import { HandleContextApi } from "../../App";
import { FaCartPlus } from "react-icons/fa6";

const Navbar = () => {
    
    const { handleBtn } = useContext(HandleContextApi);

    return (
        <div>
            <div className="navbar">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 text-black rounded-box z-[1] mt-3 w-52 p-2 shadow">
                            <Link className="px-4 py-2" to='/'>Home</Link>
                            <Link className="px-4 py-2" to='/statistic'>Statistic</Link>
                            <Link className="px-4 py-2" to='/dashboard'>Dashboard</Link>
                        </ul>
                    </div>
                    <a className="btn btn-ghost text-xl">Gadget Heaven</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <Link className="px-4 py-2" to='/'>Home</Link>
                        <Link className="px-4 py-2" to='/statistic'>Statistic</Link>
                        <Link className="px-4 py-2" to='/dashboard'>Dashboard</Link>
                    </ul>
                </div>
                <div className="navbar-end">
                    <Link onClick={()=> handleBtn('Cart')} className="btn rounded-full px-4 py-2 mr-2 hover:bg-green-400" to='/dashboard'><FaCartPlus /></Link>
                    <Link onClick={()=> handleBtn('Wishlist')} className="btn rounded-full px-4 py-2 hover:bg-green-400" to='/dashboard'>Wish-List</Link>
                </div>
            </div>
        </div>
    );
};

export default Navbar;