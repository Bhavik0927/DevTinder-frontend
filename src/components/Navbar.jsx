import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router";
import axios from "axios";
import { BASE_URL } from "../utils/constants";
import { removeUser } from "../store/userSlice";

const Navbar = () => {

    const user = useSelector(store => store.user);
    const navigate = useNavigate();
    const dispatch = useDispatch();


    const handleLogOut = async () => {
        await axios.post(BASE_URL + '/logout', {}, { withCredentials: true });
        dispatch(removeUser());
        navigate('/');
    }

    return (
        <div className="navbar bg-base-300 shadow-sm px-5 ">
            <div className="flex-1">
                <Link to="/" className="btn btn-ghost text-xl">DevTinder</Link>
            </div>
            <div className="flex gap-2  ">

                <div className="dropdown dropdown-end">
                    {user &&
                        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                            {/* <div>Welcome, {user.userName}</div> */}
                            <div className="w-10 rounded-full">
                                <img
                                    alt="Tailwind CSS Navbar component"
                                    src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                            </div>
                        </div>}

                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        <li>
                            <Link to="/profile" className="justify-between">
                                Profile
                                <span className="badge">New</span>
                            </Link>
                        </li>
                        <li><Link>Settings</Link></li>
                        <li><Link to="/logout" onClick={handleLogOut}>Logout</Link></li>
                    </ul>
                </div>

            </div>
        </div>
    )
}

export default Navbar;