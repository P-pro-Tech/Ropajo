import React from 'react'
import './RegisterGuests.css'
import GuestReservationHeader from '../../GuestReservationHeader/GuestReservationHeader'

const RegisterGuests = () => {
return (
    <div className='registerGuests'>
        <div className='registerGuests-hue'>
            <div className='registerGuests-head'>
                <GuestReservationHeader/>
            </div>
            <div className='registerGuests-body'>
                <div className='registerGuests-body-content-holder'>
                    <h1>Register Guests</h1>
                    <form action="" className='registerGuests-form'>
                        
                        <div className='registerGuests-form-holder'>
                            <input type="text" placeholder='Guest Name:' className='registerGuests-form50p' />
                            <input type="file" placeholder='Passport:' className='registerGuests-form50p' />
                        </div>
                        <div className='registerGuests-form-holder'>
                            <input type="text" placeholder='Address:' className='registerGuests-form50p' />
                            <input type="text" placeholder='Nationality:' className='registerGuests-form50p' />
                        </div>
                        <div className='registerGuests-form-holder'>
                            <input type="email" placeholder='Email:' className='registerGuests-form50p' />
                            <input type="number" placeholder='Phone:' className='registerGuests-form50p' />
                        </div>
                        <div className='registerGuests-form-holder'>
                            <input type="text" placeholder='Occupation:' className='registerGuests-form50p' />
                            <input type="text" placeholder='Passport No:' className='registerGuests-form50p' />
                        </div>
                        <div className='registerGuests-form-holder'>
                            <input type="text" placeholder='Car Reg No.' className='registerGuests-form50p' />
                            <input type="text" placeholder='Purpose of Travel:' className='registerGuests-form50p' />
                        </div>
                        <div className='registerGuests-form-holder'>
                            <input type="text" placeholder='Arrival Date:' className='registerGuests-form50p' onFocus={(e)=> e.target.type = 'date'} onBlur={(e) => (e.target.type = "text")} />
                            <input type="text" placeholder='Departure Date:' className='registerGuests-form50p' onFocus={(e)=> e.target.type = 'date'} onBlur={(e) => (e.target.type = "text")} />
                        </div>
                        <div className='registerGuests-form-holder'>
                            <input type="text" placeholder='Arrival From:' className='registerGuests-form50p' />
                            <input type="text" placeholder='Depart To:  ' className='registerGuests-form50p' />
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
