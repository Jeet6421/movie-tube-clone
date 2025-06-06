import React, { useState, useEffect } from 'react';
import logo from './logo.ico';
import './Navbar.css';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { RiVideoAddLine } from 'react-icons/ri';
import { IoMdNotificationsOutline } from 'react-icons/io';
import { BiUserCircle } from 'react-icons/bi';
import Searchbar from './Searchbar/Searchbar';
import Auth from '../../pages/Auth/Auth.jsx';
import axios from 'axios';
import { useGoogleLogin, googleLogout } from '@react-oauth/google';
import { jwtDecode } from 'jwt-decode';
import  login  from '../../action/auth';
import { setcurrentuser } from '../../action/currentuser';

const Navbar = ({ toggledrawer, seteditcreatechanelbtn }) => {
    const [showAuthModal, setShowAuthModal] = useState(false);
    const [googleUser, setGoogleUser] = useState(null);
    const [googleProfile, setGoogleProfile] = useState({});
    const dispatch = useDispatch();
    const currentUser = useSelector((state) => state.currentuserreducer);

    // Google Login Setup
    const googleLogin = useGoogleLogin({
        onSuccess: (tokenResponse) => setGoogleUser(tokenResponse),
        onError: (error) => console.error("Login Failed:", error),
    });

    // Fetch Google profile after login
    useEffect(() => {
        if (googleUser) {
            axios
                .get(`https://www.googleapis.com/oauth2/v1/userinfo?access_token=${googleUser.access_token}`, {
                    headers: {
                        Authorization: `Bearer ${googleUser.access_token}`,
                        Accept: 'application/json',
                    },
                })
                .then((res) => setGoogleProfile(res.data))
                .catch((err) => console.error("Error fetching Google profile:", err));
        }
    }, [googleUser]);

    // Dispatch login action when Google profile is ready
    useEffect(() => {
        if (googleProfile?.email) {
            dispatch(login({ email: googleProfile.email }));
            console.log("Logging in with:", googleProfile.email);
        }
    }, [googleProfile, dispatch]);

    // Token expiry check & restore user from localStorage
    useEffect(() => {
        const localProfile = JSON.parse(localStorage.getItem("Profile"));
        if (localProfile) {
            dispatch(setcurrentuser(localProfile));
        }

        const token = currentUser?.token;
        if (token) {
            const decoded = jwtDecode(token);
            if (decoded.exp * 1000 < Date.now()) {
                handleLogout();
            }
        }
    }, [currentUser?.token, dispatch]);

    const handleLogout = () => {
        googleLogout();
        dispatch(setcurrentuser(null));
        localStorage.clear();
        console.log("User logged out");
    };

    return (
        <>
            <div className="Container_Navbar">
                <div className="Burger_Logo_Navbar">
                    <div className="burger" onClick={toggledrawer}>
                        <p></p>
                        <p></p>
                        <p></p>
                    </div>
                    <Link to="/" className="logo_div_Navbar">
                        <img src={logo} alt="logo" />
                        <p className="logo_title_navbar">Your-Tube</p>
                    </Link>
                </div>

                <Searchbar />

                <RiVideoAddLine size={22} className="vid_bell_Navbar" />

                <div className="apps_Box">
                    {[...Array(9)].map((_, i) => (
                        <p key={i} className="appBox"></p>
                    ))}
                </div>

                <IoMdNotificationsOutline size={22} className="vid_bell_Navbar" />

                <div className="Auth_cont_Navbar">
                    {currentUser ? (
                        <div className="Chanel_logo_App" onClick={() => setShowAuthModal(true)}>
                            <p className="fstChar_logo_App">
                                {currentUser.result.name
                                    ? currentUser.result.name.charAt(0).toUpperCase()
                                    : currentUser.result.email.charAt(0).toUpperCase()}
                            </p>
                        </div>
                    ) : (
                        <p className="Auth_Btn" onClick={googleLogin}>
                            <BiUserCircle size={22} />
                            <b>Sign in</b>
                        </p>
                    )}
                </div>
            </div>

            {showAuthModal && (
                <Auth
                    seteditcreatechanelbtn={seteditcreatechanelbtn}
                    setauthbtn={setShowAuthModal}
                    user={currentUser}
                />
            )}
        </>
    );
};

export default Navbar;
