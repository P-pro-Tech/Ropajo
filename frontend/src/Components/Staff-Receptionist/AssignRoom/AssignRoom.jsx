/** @format */

import React, { useContext, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./AssignRoom.css";
import GuestReservationHeader from "../../GuestReservationHeader/GuestReservationHeader";
import { useMakePaymentMutation } from "../../../hooks/payment";
import { Store } from "../../../Store";
import toast from "react-hot-toast";

const AssignRoom = () => {
  const navigation = useNavigate();
  const {
    state: { userInfo },
  } = useContext(Store);
  const location = useLocation();
  const [totalamount, setTotalAmount] = useState("");
  const [room, setRoom] = useState("");
  const [type, setType] = useState("");
  const [collectedFrom, setCollectedFrom] = useState("");
  let collectedBy;
  if (userInfo) {
    collectedBy = userInfo.staffUniqueId;
  }

  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const amountParam = queryParams.get("amount");
    const roomParam = queryParams.get("room");
    setTotalAmount(amountParam || "N/A");
    setRoom(roomParam || "N/A");
  }, [location.search]);

  const { mutateAsync: makePayment, isPending } = useMakePaymentMutation();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await makePayment({
        bill: totalamount,
        collectedBy,
        type,
        collectedFrom,
        room,
      });

      toast.success("Payment successful");
      navigation(`/GuestDashBoardRoom?userUniqueId=${collectedFrom}`);
    } catch (error) {
      console.log("Error response:", error);
      console.log(error);
      if (error.response && error.response.data && error.response.data.error) {
        let errorMessage = error.response.data.error;

        toast.error(`${errorMessage}`);
      } else {
        toast.error("An unexpected error occurred");
      }
    }
  };

  return (
    <div className='assignRoom'>
      <div className='assignRoom-hue'>
        <div className='head'>
          <GuestReservationHeader />
        </div>
        <form onSubmit={handleSubmit} className='assignRoom-body'>
          <div className='assignRoom-body-top'>
            <h3>Assign Room</h3>
            <input
              type='text'
              value={collectedFrom}
              onChange={(e) => setCollectedFrom(e.target.value)}
              name='guest_id'
              id=''
              placeholder='Guest ID'
            />
            {/* <h1>Guest ID</h1> */}
          </div>
          <div className='assignRoom-body-middle'>
            <p>{room}</p>
            <div className='assignRoom-middle-checkbox'>
              <label htmlFor=''>
                <input
                  type='checkbox'
                  value='Check in'
                  checked={type === "Check in"}
                  onChange={(e) => setType(e.target.value)}
                  name='Check in'
                  id='Check in'
                />
                Check in
              </label>
              <label htmlFor=''>
                <input
                  type='checkbox'
                  value='reservation'
                  checked={type === "reservation"}
                  onChange={(e) => setType(e.target.value)}
                  name='Reservation'
                  id='Reservation'
                />
                Reservation
              </label>
            </div>
            <div className='assign-date-container'>
              <input
                type='date'
                name='assign_date'
                id='assign_date'
                className='assign_date'
              />
            </div>
          </div>
          <div className='assignRoom-body-bottom'>
            {/* <Link to='/GuestDashBoardRoom'> */}
            <button type='submit'>Register</button>
            {/* </Link> */}
          </div>
        </form>
      </div>
    </div>
  );
};

export default AssignRoom;
