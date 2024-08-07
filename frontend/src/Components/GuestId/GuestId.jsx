/** @format */

import React, { useContext } from "react";
import { CgSpinner } from "react-icons/cg";
import "./GuestId.css";
import guest_img from "../../assets/Ropa2.jpeg";
import { useNavigate, useLocation } from "react-router-dom";
import toast from "react-hot-toast";

import { Store } from "../../Store";
import { useSigninMutation } from "../../services/userSignIn";

const GuestId = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { state, dispatch } = useContext(Store);
  const { userInfo } = state;
  const [userUniqueId, setUserUniqueId] = React.useState("");

  const { mutateAsync: signin, isPending } = useSigninMutation();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await signin({ userUniqueId });
      const { access_token, user } = response;

      if (access_token && user) {
        toast.success("Login successful");
        const userData = { access_token, ...user };
        dispatch({ type: "USER_SIGNIN", payload: userData });
        localStorage.setItem("userInfo", JSON.stringify(userData));

        // Handle redirect
        const query = new URLSearchParams(location.search);
        const redirect = query.get("redirect");
        navigate(redirect || "/GuestAccessPage");
      }
    } catch (err) {
      console.error("Login failed:", err);
      toast.error("An error occurred");
    }
  };

  React.useEffect(() => {
    if (location.pathname === "/") {
      dispatch({ type: "USER_SIGNOUT" });
      localStorage.removeItem("userInfo");
    }
  }, [location.pathname, dispatch]);

  React.useEffect(() => {
    if (userInfo) {
      const query = new URLSearchParams(location.search);
      const redirect = query.get("redirect");
      navigate(redirect || "/GuestAccessPage");
    }
  }, [navigate, userInfo, location.search]);

  return (
    <div className='guest-id'>
      <div className='guest-img-holder'>
        <img src={guest_img} alt='Guest' />
      </div>
      <div className='guest-des-holder'>
        <form onSubmit={handleSubmit} className='guest-form'>
          <fieldset>
            <legend>Enter your unique Guest ID</legend>
            <input
              value={userUniqueId}
              onChange={(e) => setUserUniqueId(e.target.value)}
              type='text'
              placeholder='#R1410X'
            />
          </fieldset>
          <button type='submit' disabled={isPending}>
            {isPending ? (
              <CgSpinner className='animate-spin mr-2' size={20} />
            ) : (
              "Enter Guest ID"
            )}
          </button>
        </form>
      </div>
    </div>
  );
};

export default GuestId;
