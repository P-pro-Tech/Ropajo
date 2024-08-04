import React from 'react'
import './RegisterGuests.css'
import GuestReservationHeader from '../../GuestReservationHeader/GuestReservationHeader'
import DashBoardHeader from '../../DashBoardHeader/DashBoardHeader'

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
                        <label htmlFor="">Guest Name:
                            <input type="text" placeholder='' className='registerGuests-form50p'  />
                            </label>
                            
                            <label className='registerGuests-form50p registerGuests-passport'>
                                <span>Upload ID Card:</span>
                                <input type="file" name="" id="registerGuests-passport" placeholder='Upload ID:' hidden />
                                <label htmlFor="registerGuests-passport" className='registerGuests-file-label'>upload</label>
                            </label>
                        </div>
                        <div className='registerGuests-form-holder'>
                        <label htmlFor="">Address:
                            <input type="text" placeholder='' className='registerGuests-form50p' />
                            </label>
                            <label htmlFor="">Nationality:
                            <input type="text" placeholder='' className='registerGuests-form50p' />
                            </label>
                        </div>
                        <div className='registerGuests-form-holder'>
                        <label htmlFor="">Email:
                            <input type="email" placeholder='' className='registerGuests-form50p' />
                            </label>
                            <label htmlFor="">Phone:
                            <input type="number" placeholder='' className='registerGuests-form50p' />
                            </label>
                        </div>
                        <div className='registerGuests-form-holder'>
                            <label htmlFor="">Occupation:
                            <input type="text" placeholder='' className='registerGuests-form50p' />
                            </label>
                            <label htmlFor="">Passport No:
                            <input type="text" placeholder='' className='registerGuests-form50p' />
                            </label>
                        </div>
                        <div className='registerGuests-form-holder'>
                        <label htmlFor="">Car Reg No:
                            <input type="text" placeholder='' className='registerGuests-form50p' />
                            </label>
                            <label htmlFor="">Purpose of Travel:
                            <input type="text" placeholder='' className='registerGuests-form50p' />
                            </label>
                        </div>
                        <div className='registerGuests-form-holder'>
                            <label htmlFor="">Arrival Date:
                            <input type="text" placeholder='' className='registerGuests-form50p' onFocus={(e)=> e.target.type = 'date'} onBlur={(e) => (e.target.type = "text")} />
                            </label>
                            <label htmlFor="">Departure Date:
                            <input type="text" placeholder='' className='registerGuests-form50p' onFocus={(e)=> e.target.type = 'date'} onBlur={(e) => (e.target.type = "text")} />
                            </label>
                        </div>
                        <div className='registerGuests-form-holder'>
                            <label htmlFor="">Arrival From:
                            <input type="text" placeholder='' className='registerGuests-form50p' />
                            </label>
                            <label htmlFor="">Depart To:
                            <input type="text" placeholder='' className='registerGuests-form50p' />
                            </label>
                        </div>
                        <div className='registerGuests-form-holder'>
                            {/* <input type="button" value="Room" className='registerGuests-form25p' />
                            <input type="button" value="Pool" className='registerGuests-form25p' />
                            <input type="button" value="Restaurant" className='registerGuests-form25p' />
                            <input type="button" value="Laundry" className='registerGuests-form25p' /> */}
                        </div>
                        <div className='registerGuests-form-holder'>
                            <input type="submit" value="Register" className='registerGuests-form-100p' />
                        </div>
                        


                    </form>
                </div>
            </div>
        </div>
    </div>
)
}

export default RegisterGuests
