/** @format */

import React, { useContext } from "react";
import "./SignIn.css";
import DashBoardHeader from "../../DashBoardHeader/DashBoardHeader";
import DashboardRoomProfile from "../../DashboardRoomProfile/DashboardRoomProfile";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { Store } from "../../../Store";
import { CgSpinner } from "react-icons/cg";
import { useStaffSigninMutation } from "../../../services/staffSignIn";

const SignIn = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { state, dispatch } = useContext(Store);
  const { userInfo } = state;
  const [staffUniqueId, setStaffUniqueId] = React.useState("");

  const { mutateAsync: signin, isPending } = useStaffSigninMutation();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await signin({ staffUniqueId });
      const { access_token, staff } = response;

      if (access_token && staff) {
        toast.success("Login successful");
        const userData = { access_token, ...staff };
        dispatch({ type: "USER_SIGNIN", payload: userData });
        localStorage.setItem("userInfo", JSON.stringify(userData));

        // Handle redirect
        const query = new URLSearchParams(location.search);
        const redirect = query.get("redirect");
        navigate(redirect || "/StaffDashboard");
      }
    } catch (err) {
      console.error("Login failed:", err);
      toast.error("An error occurred");
    }
  };

  React.useEffect(() => {
    if (location.pathname === "/#/SignIn") {
      dispatch({ type: "USER_SIGNOUT" });
      localStorage.removeItem("userInfo");
    }
  }, [location.pathname, dispatch]);

  React.useEffect(() => {
    if (userInfo) {
      const query = new URLSearchParams(location.search);
      const redirect = query.get("redirect");
      navigate(redirect || "/StaffDashboard");
    }
  }, [navigate, userInfo, location.search]);

  const [profileShow, setProfileShow] = useState(false);
  return (
    <div className='signIn'>
      <div className='signIn-hue'>
        <div>
          <DashboardRoomProfile
            profileShow={profileShow}
            setProfileShow={setProfileShow}
          />
          <DashBoardHeader setProfileShow={setProfileShow} />
        </div>
        <div className='signIn-body'>
          <form onSubmit={handleSubmit} className='signIn-form'>
            <h1>Sign in</h1>
            <div className='signIn-hide-box'></div>
            <input
              type='text'
              onChange={(e) => setStaffUniqueId(e.target.value)}
              id=''
              placeholder='Staff  Unique ID'
            />

            {isPending ? (
              <CgSpinner
                className='animate-spin'
                style={{ margin: "auto" }}
                size={20}
              />
            ) : (
              <button type='submit' className='signIn-submit'>
                Submit
              </button>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
