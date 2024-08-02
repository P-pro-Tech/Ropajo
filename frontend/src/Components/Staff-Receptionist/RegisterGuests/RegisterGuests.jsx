/** @format */

import React from "react";
import "./RegisterGuests.css";
import GuestReservationHeader from "../../GuestReservationHeader/GuestReservationHeader";
import DashBoardHeader from "../../DashBoardHeader/DashBoardHeader";
import { convertToBase64 } from "../../../utils/convertImg";
import { useAddGuestMutation } from "../../../hooks/guest";
import toast from "react-hot-toast";
import { shuffleString } from "../../../utils/generateId";

const RegisterGuests = () => {
  const {
    mutateAsync: addGuest,
    error,
    isPending,
    refetch,
  } = useAddGuestMutation();

  const [fullName, setFullName] = React.useState("");
  const [address, setAddress] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [occupation, setOccupation] = React.useState("");
  const [carRegNumber, setCarRegNumber] = React.useState("");
  const [arriverDate, setArriverDate] = React.useState("");
  const [arriverFrom, setArriverFrom] = React.useState("");
  const [guestIdPhoto, setGuestIdPhoto] = React.useState("");
  const [Nationality, setNationality] = React.useState("");
  const [phoneNumber, setPhoneNumber] = React.useState("");
  const [passportNumber, setPassportNumber] = React.useState("");
  const [purposeOfTravel, setPurposeOfTravel] = React.useState("");
  const [departureDate, setDepartureDate] = React.useState("");
  const [departTo, setDepartTo] = React.useState("");

  const part1 = Date.now().toString().slice(0, 2);
  const part2 = Date.now().toString(36).slice(0, 1);
  const part3 = Date.now().toString(36).toUpperCase().slice(0, 2);
  const part4 = Date.now().toString(36).slice(0, 2);

  const unique = `${part1}${part2}${part3}${part4}`;

  const userUniqueId = `RPJ${shuffleString(unique)}`.trim();

  console.log(userUniqueId);

  const uploadFile = async (e) => {
    const target = e.target;
    const { files } = target;
    const file = files[0];
    try {
      const base64 = await convertToBase64(file);
      setGuestIdPhoto(base64);
    } catch (error) {
      console.error("Error compressing image:", error);
    }
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addGuest({
        fullName,
        address,
        email,
        occupation,
        carRegNumber,
        arriverDate,
        arriverFrom,
        guestIdPhoto,
        Nationality,
        phoneNumber,
        passportNumber,
        purposeOfTravel,
        departureDate,
        departTo,
        userUniqueId,
      });
      toast.success("guest added");
    } catch (error) {
      toast.error("registration faild");
    }
  };

  return (
    <div className='registerGuests'>
      <div className='registerGuests-hue'>
        <div className='registerGuests-head'>
          <GuestReservationHeader />
        </div>
        <div className='registerGuests-mobile-head'>
          <DashBoardHeader />
        </div>
        <div className='registerGuests-body'>
          <div className='registerGuests-body-content-holder'>
            <h1>Register Guests</h1>
            <form onSubmit={handleSubmit} className='registerGuests-form'>
              <div className='registerGuests-form-holder'>
                <input
                  onChange={(e) => setFullName(e.target.value)}
                  value={fullName}
                  type='text'
                  placeholder='Guest Name:'
                  className='registerGuests-form50p'
                />
                <div className='registerGuests-form50p registerGuests-passport'>
                  <span>Upload ID Card:</span>
                  <input
                    type='file'
                    onChange={(e) => uploadFile(e)}
                    id='registerGuests-passport'
                    placeholder='Upload ID:'
                    hidden
                  />
                  <label
                    htmlFor='registerGuests-passport'
                    className='registerGuests-file-label'
                  >
                    upload
                  </label>
                </div>
              </div>
              <div className='registerGuests-form-holder'>
                <input
                  type='text'
                  placeholder='Address:'
                  onChange={(e) => setAddress(e.target.value)}
                  value={address}
                  className='registerGuests-form50p'
                />
                <input
                  type='text'
                  placeholder='Nationality:'
                  onChange={(e) => setNationality(e.target.value)}
                  value={Nationality}
                  className='registerGuests-form50p'
                />
              </div>
              <div className='registerGuests-form-holder'>
                <input
                  type='email'
                  placeholder='Email:'
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className='registerGuests-form50p'
                />
                <input
                  type='number'
                  placeholder='Phone:'
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  className='registerGuests-form50p'
                />
              </div>
              <div className='registerGuests-form-holder'>
                <input
                  type='text'
                  placeholder='Occupation:'
                  value={occupation}
                  onChange={(e) => setOccupation(e.target.value)}
                  className='registerGuests-form50p'
                />
                <input
                  type='text'
                  placeholder='Passport No:'
                  value={passportNumber}
                  onChange={(e) => setPassportNumber(e.target.value)}
                  className='registerGuests-form50p'
                />
              </div>
              <div className='registerGuests-form-holder'>
                <input
                  type='text'
                  placeholder='Car Reg No.'
                  value={carRegNumber}
                  onChange={(e) => setCarRegNumber(e.target.value)}
                  className='registerGuests-form50p'
                />
                <input
                  type='text'
                  placeholder='Purpose of Travel:'
                  value={purposeOfTravel}
                  onChange={(e) => setPurposeOfTravel(e.target.value)}
                  className='registerGuests-form50p'
                />
              </div>
              <div className='registerGuests-form-holder'>
                <input
                  type='text'
                  placeholder='Arrival Date:'
                  value={arriverDate}
                  onChange={(e) => setArriverDate(e.target.value)}
                  className='registerGuests-form50p'
                  onFocus={(e) => (e.target.type = "date")}
                  onBlur={(e) => (e.target.type = "text")}
                />
                <input
                  type='text'
                  placeholder='Departure Date:'
                  value={departureDate}
                  onChange={(e) => setDepartureDate(e.target.value)}
                  className='registerGuests-form50p'
                  onFocus={(e) => (e.target.type = "date")}
                  onBlur={(e) => (e.target.type = "text")}
                />
              </div>
              <div className='registerGuests-form-holder'>
                <input
                  type='text'
                  value={arriverFrom}
                  onChange={(e) => setArriverFrom(e.target.value)}
                  placeholder='Arrival From:'
                  className='registerGuests-form50p'
                />
                <input
                  type='text'
                  placeholder='Depart To:  '
                  value={departTo}
                  onChange={(e) => setDepartTo(e.target.value)}
                  className='registerGuests-form50p'
                />
              </div>
              <div className='registerGuests-form-holder'>
                {/* <input type="button" value="Room" className='registerGuests-form25p' />
                            <input type="button" value="Pool" className='registerGuests-form25p' />
                            <input type="button" value="Restaurant" className='registerGuests-form25p' />
                            <input type="button" value="Laundry" className='registerGuests-form25p' /> */}
              </div>
              <div className='registerGuests-form-holder'>
                <input
                  type='submit'
                  value='Register'
                  className='registerGuests-form-100p'
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterGuests;
