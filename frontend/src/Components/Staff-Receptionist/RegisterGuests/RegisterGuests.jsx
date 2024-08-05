import React from 'react'
import './RegisterGuests.css'
import GuestReservationHeader from '../../GuestReservationHeader/GuestReservationHeader'
import DashBoardHeader from '../../DashBoardHeader/DashBoardHeader'
import { Link } from 'react-router-dom'

const RegisterGuests = () => {
return (
    <div className='registerGuests'>
        <div className='registerGuests-hue'>
            <div className='registerGuests-head'>
                <GuestReservationHeader/>
            </div>
            <div className='registerGuests-mobile-head'>
                <DashBoardHeader/>
            </div>
            <div className='registerGuests-body'>
                <div className='registerGuests-body-content-holder'>
                    <h1>Register Guests</h1>
                    <form action="" className='registerGuests-form'>
                        
                        <div className='registerGuests-form-holder'>
                            <label htmlFor="">Guest Name: &nbsp;
                            <input type="text" placeholder='' className='registerGuests-form50p'  />
                            </label>
                            <div className='registerGuests-form50p registerGuests-passport'>
                                
                                <span>Upload ID Card:</span>
                                <input type="file" name="" id="registerGuests-passport" placeholder='Upload ID:' hidden />
                                <label htmlFor="registerGuests-passport" className='registerGuests-file-label'>upload</label>
                            </div>
                        </div>
                        <div className='registerGuests-form-holder'>
                            <label htmlFor="">Address: &nbsp;
                            <input type="text" placeholder='' className='registerGuests-form50p' />
                            </label>
                            <label htmlFor="">Nationality:  &nbsp;
                            <input type="text" placeholder='' className='registerGuests-form50p' />
                            </label>
                        </div>
                        <div className='registerGuests-form-holder'>
                            <label htmlFor="">Email: &nbsp;
                            <input type="email" placeholder='' className='registerGuests-form50p' />
                            </label>
                            <label htmlFor="">Phone:  &nbsp;
                            <input type="number" placeholder='' className='registerGuests-form50p' />
                            </label>
                        </div>

                        <div className='registerGuests-form-holder'>
                            <label htmlFor="">Occupation: &nbsp;
                            <input type="text" placeholder='' className='registerGuests-form50p' />
                            </label>
                            <label htmlFor="">Passport No:  &nbsp;
                            <input type="text" placeholder='' className='registerGuests-form50p' />
                            </label>
                        </div>
                        
                        <div className='registerGuests-form-holder'>
                            <label htmlFor="">Car Reg No.: &nbsp;
                            <input type="text" placeholder='' className='registerGuests-form50p' />
                            </label>
                            <label htmlFor="">Purpose of Travel:  &nbsp;
                            <input type="text" placeholder='' className='registerGuests-form50p' />
                            </label>
                        </div>
                        
                        
                        <div className='registerGuests-form-holder'>
                            <label htmlFor="">Arrival Date: &nbsp;
                            
                            <input type="text" placeholder='' className='registerGuests-form50p' onFocus={(e)=> e.target.type = 'date'} onBlur={(e) => (e.target.type = "text")} />
                            </label>
                            <label htmlFor="">Departure Date:  &nbsp;
                            
                            <input type="text" placeholder='' className='registerGuests-form50p' onFocus={(e)=> e.target.type = 'date'} onBlur={(e) => (e.target.type = "text")} />
                            </label>
                        </div>
                        
                        
                        <div className='registerGuests-form-holder'>
                            <label htmlFor="">Arrival From: &nbsp;
                            <input type="text" placeholder='' className='registerGuests-form50p' />
                            </label>
                            <label htmlFor="">Depart To:  &nbsp;
                            <input type="text" placeholder='' className='registerGuests-form50p' />
                            </label>
                        </div>
                        
                        <div className='registerGuests-form-holder'>
                            {/* <input type="button" value="Room" className='registerGuests-form25p' />
                            <input type="button" value="Pool" className='registerGuests-form25p' />
                            <input type="button" value="Restaurant" className='registerGuests-form25p' />
                            <input type="button" value="Laundry" className='registerGuests-form25p' /> */}
                        </div>
                        <Link to='/ManageGuest'><div className='registerGuests-form-holder'>
                            <input type="submit" value="Register" className='registerGuests-form-100p' />
                        </div></Link>
                        


                    </form>
                </div>
            </div>
        </div>
    </div>
)
}

export default RegisterGuests
