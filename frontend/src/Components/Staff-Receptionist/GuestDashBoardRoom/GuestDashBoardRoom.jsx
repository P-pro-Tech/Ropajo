/** @format */

import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import play_btn from "../../../assets/play-icon.svg";
import { useGetGuestDetailsQuery } from "../../../hooks/guest";
import DashBoardHeader from "../../DashBoardHeader/DashBoardHeader";
import ReceptionistDashboard from "../ReceptionistDashboard/ReceptionistDashboard";
import "./GuestDashBoardRoom.css";
import { useGetPaymentDetailQuery } from "../../../hooks/payment";

const GuestDashBoardRoom = () => {
  const location = useLocation();

  const queryParams = new URLSearchParams(location.search);

  const userUniqueId = queryParams.get("userUniqueId");

  const { data } = useGetGuestDetailsQuery(userUniqueId);

  const { data: paymentData } = useGetPaymentDetailQuery(userUniqueId);

  const [isVisible, setIsVisible] = useState(false);
  const [isVisible1, setIsVisible1] = useState(false);
  const [isVisible2, setIsVisible2] = useState(false);
  const [isVisible3, setIsVisible3] = useState(false);
  const [isVisible4, setIsVisible4] = useState(false);

  const handlePlayButtonClick = () => {
   setIsVisible(!isVisible);
  };

  return (
    <>
      <div className='GuestDashBoardRoom'>
        <div className='GuestDashBoardRoom-web'>
          <div className='GuestDashBoardRoom-profile-section'>
            <ReceptionistDashboard />
          </div>

          <div className='GuestDashBoardRoom-content-section'>
            <div className='GuestDashBoardRoom-content-head'>
              <Link to='/'>Back to Homepage</Link>
            </div>
            <div className='GuestDashBoardRoom-content-body'>
              <div className='GuestDashBoardRoom-option-details'>
                <div className='GuestDashBoardRoom-user-detail'>
                  <p>{data ? data.fullName : null}</p>
                  <p>{data ? data.userUniqueId : null}</p>
                </div>
                <div className='GuestDashBoardRoom-recep-detail'>
                  <Link
                    to={`/UpdateGuestPayment?userUniqueId=${
                      data ? data.userUniqueId : ""
                    }`}
                  >
                    <button>Payments</button>
                  </Link>
                  <Link to=''>
                    <button>Receipt</button>
                  </Link>
                  <Link to='/ManageGuest'>
                    <button>Checkout</button>
                  </Link>
                </div>
              </div>
              <div className='GuestDashBoardRoom-center-holder'>
                <div className='GuestDashBoardRoom-content-table-section'>
                  <main className='GT-container'>
                    <div className='GT-table-optioin'>
                      <div className='GT-option-Button'>
                        <div>
                          <img
                            src={play_btn}
                            alt=''
                            onClick={handlePlayButtonClick}
                          />
                          <p>Room:</p>
                        </div>
                      </div>
                      {isVisible && (
                        <div className='GT-option-Body'>
                          <section className='GT-table'>
                            <div className='GT-Table-row table-row-header'>
                              <p>Room No.</p>
                              <p>Date</p>
                              <p>Bill</p>
                              <p>Paid</p>
                            </div>

                            {paymentData.map((item, index) => (
                              <div key={index} className='GT-Table-row'>
                                <p>{item.room}</p>
                                <p>13.02.2023</p>
                                <p>06:47pm</p>
                                <p>14:02:2023</p>
                                <p>{item.bill}</p>
                              </div>
                            ))}

                          </section>
                        </div>
                      )}
                      ;
                    </div>

                    {/* ----------------------------------- */}
                    <div className='GT-table-option'>
                      <div className='GT-option-Button'>
                        <div>
                          <img
                            src={play_btn}

                            alt=''
                            onClick={()=>setIsVisible1(!isVisible1)}

                          />
                          <p>Laundry:</p>
                        </div>
                      </div>

                      {isVisible1 && (
                        <div className="GT-option-Body">
                          <section className="GT-table">
                            <div className="GT-Table-row table-row-header">
                              <p>Items</p>

                              <p>Date</p>
                              <p>Bill</p>
                              <p>Paid</p>
                            </div>

                            <div className="GT-Table-row">
                              <p>2 shirts, 3 trouser, 1 vest</p>

                              <p>13.02.2023</p>
                              <p>23,900</p>
                              <p>16,500.00</p>
                            </div>

                            <div className="GT-Table-row">
                              <p>2 caps, 5 stockings</p>
                              <p>13.02.2023</p>
                              <p>4,650</p>
                              <p>4,650</p>

                            </div>
                          </section>
                        </div>
                      )}
                      ;
                    </div>
                    <div className="GT-table-option">
                      <div className="GT-option-Button">
                        <div>
                          <img
                            src={play_btn}
                            alt=""
                            onClick={() => setIsVisible2(!isVisible2)}
                          />
                          <p>Restaurant:</p>
                        </div>
                      </div>
                      {isVisible2 && (
                        <div className="GT-option-Body">
                          <section className="GT-table">
                            <div className="GT-Table-row table-row-header">
                              <p>Items</p>
                              <p>Date</p>
                              <p>Bill</p>
                              <p>Paid</p>
                            </div>
                            <div className="GT-Table-row">
                              <p>rice, plantain and beans</p>
                              <p>13.02.2023</p>
                              <p>12,550.00</p>
                              <p>16,500.00</p>
                            </div>
                            <div className="GT-Table-row">
                              <p>Coffee, milk and bread</p>
                              <p>13.02.2023</p>
                              <p>23,120.00</p>
                              <p>16,500.00</p>
                            </div>
                          </section>
                        </div>
                      )}
                      ;
                    </div>

                    <div className="GT-table-option">
                      <div className="GT-option-Button">
                        <div>
                          <img
                            src={play_btn}
                            alt=""
                            onClick={() => setIsVisible3(!isVisible3)}
                          />
                          <p>Bar</p>
                        </div>
                      </div>
                      {isVisible3 && (
                        <div className="GT-option-Body">
                          <section className="GT-table">
                            <div className="GT-Table-row table-row-header">
                              <p>Items</p>
                              <p>Date</p>
                              <p>Bill</p>
                              <p>Paid</p>
                            </div>
                            <div className="GT-Table-row">
                              <p>Pool, 3 bottles of Heineken</p>
                              <p>13.02.2023</p>
                              <p>9,840</p>
                              <p>6,500.00</p>
                            </div>
                            <div className="GT-Table-row">
                              <p>Guiness, Amstel and Water</p>
                              <p>13.02.2023</p>
                              <p>12,655</p>
                              <p>12,655.00</p>
                            </div>
                          </section>
                        </div>
                      )}
                      ;
                    </div>

                    <div className="GT-table-option">
                      <div className="GT-option-Button">
                        <div>
                          <img
                            src={play_btn}
                            alt=""
                            onClick={() => setIsVisible4(!isVisible4)}
                          />
                          <p>Others;</p>
                        </div>
                      </div>
                      {isVisible4 && (
                        <div className="GT-option-Body">
                          <section className="GT-table">
                            <div className="GT-Table-row table-row-header">
                              <p>Items</p>
                              <p>Date</p>
                              <p>Bill</p>
                              <p>Paid</p>
                            </div>
                            <div className="GT-Table-row">
                              <p>Massage and therapy</p>
                              <p>13.02.2023</p>
                              <p>50,000.00</p>
                              <p>50,000.00</p>
                            </div>
                            <div className="GT-Table-row">
                              <p>External Entertainers</p>
                              <p>13.02.2023</p>
                              <p>45,000.00</p>
                              <p>45,000.00</p>
                            </div>
                          </section>
                        </div>
                      )}
                      ;
                    </div>

                    
                    









                    {/* <GuestTable /> */}
                  </main>
                  <section className='GT-Balance'>
                    <h2>TOTAL</h2>
                    <div className='GT-Balance-right'>
                      <div className='GT-Balance-square'>
                        <p>Bill</p>
                        <p className='red'>216,500.00</p>
                      </div>
                      <div className='GT-Balance-square'>
                        <p>Paid</p>
                        <p className='green'>116,000.00</p>
                      </div>
                      <div className='GT-Balance-square'>
                        <p>Balance</p>
                        <p>100,500.00</p>
                      </div>
                    </div>
                  </section>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* mobile deign start here */}
        <div className='mobile-dasboardAccount'>
          <div className='mobile-dasboardAccount-head'>
            <DashBoardHeader />
          </div>
        </div>
      </div>
    </>
  );
};

export default GuestDashBoardRoom;
