import { Outlet, useNavigate } from "react-router"
import Navbar from "./Navbar"
import axios from "axios"
import { BASE_URL } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addUser } from "../store/userSlice";
import { useEffect } from "react";


const Body = () => {
    const dispatch = useDispatch();
    const Navigate = useNavigate();
    const userData = useSelector(state => state.user);

    const fetchUser = async () => {
        if (userData) return;

        try {
            const res = await axios.get(BASE_URL + '/profile/view', {
                withCredentials: true
            });
            dispatch(addUser(res.data))
        } catch (error) {
            if (error.status === 401) {
                Navigate('/login');
            }
            console.log(error);
        }
    }

    useEffect(() => {
        fetchUser();
    }, []);

    return (
        <div>
            <Navbar />
            <Outlet />

        </div>
    )
}

export default Body