/** @format */

import React from "react";
import "./Booking.css";
import DashBoardHeader from "../../DashBoardHeader/DashBoardHeader";
import DashboardRoomProfile from "../../DashboardRoomProfile/DashboardRoomProfile";
import { useState } from "react";
import { convertToBase64 } from "../../../utils/convertImg";
import { useMakeBookingMutation } from "../../../hooks/book";
import toast from "react-hot-toast";

const Booking = () => {
  const {
    mutateAsync: makeBooking,
    isPending: isLoading,
    refetch,
  } = useMakeBookingMutation();
  const [profileShow, setProfileShow] = useState(false);
  // form field state
  const [fullName, setFullName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [phoneNumber, setPhoneNumber] = React.useState("");
  const [identityNumber, setIdentityNumber] = React.useState("");
  const [identityImage, setIdentityImage] = React.useState("");

  const uploadFile = async (e) => {
    const target = e.target;
    const { files } = target;
    const file = files[0];
    try {
      const base64 = await convertToBase64(file);
      setIdentityImage(base64);
    } catch (error) {
      console.error("Error compressing image:", error);
    }
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await makeBooking({
        fullName,
        email,
        phoneNumber,
        identityNumber,
        identityImage,
      });
      toast.success("booking successful");
    } catch (error) {
      toast.error("booking failed");
    }
  };

  return (
    <div className='booking'>
      <div className='book-hue'>
        <DashboardRoomProfile
          profileShow={profileShow}
          setProfileShow={setProfileShow}
        />
        <DashBoardHeader setProfileShow={setProfileShow} />

        <div className='book-body'>
          <form onSubmit={handleSubmit} className='book-form'>
            <h1>Booking</h1>
            <p>
              Please fill in your information below, we will contact you within
              24 hours
            </p>
            <input
              type='text'
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              placeholder='Full Names'
            />
            <input
              type='email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder='Email'
            />
            <input
              type='number'
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              placeholder='Phone Number'
            />
            <input
              type='number'
              value={identityNumber}
              onChange={(e) => setIdentityNumber(e.target.value)}
              placeholder=' Identity No.'
            />
            <div>
              <span>Upload ID:</span>
              <input
                type='file'
                name=''
                id='file'
                onChange={(e) => uploadFile(e)}
                placeholder='Upload ID:'
                hidden
              />
              <label htmlFor='file' className='book-file-label'>
                upload
              </label>
            </div>
            <button type='submit' className='book-submit'>
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Booking;
