import React from 'react'
import './Reservations.css'
import GuestReservationHeader from '../GuestReservationHeader/GuestReservationHeader'

const Reservations = () => {
return (
    <div className='reservations'>
        <div className='reservations-hue'>
            <div className='reservations-head'>
                <GuestReservationHeader/>
            </div>
            <div className='reservations-body'>
                <div className='reservations-body-content-holder'>
                    <h1>Reservations</h1>
                    <form action="" className='reservations-form'>
                        <input type="text" className='reservations-type-input' placeholder='Full Names:'  />
                        <input type="email" className='reservations-type-input' placeholder='Email'  />
                        <input type="number" className='reservations-type-input' placeholder='Phone Number'  />
                        <input type="text" className='reservations-type-input' placeholder='Address:'  />
                        <div className='reservations-type-input'>
                            <span>Upload ID:</span>
                            <input type="file" className='reservations-file-input' placeholder='' id='resUpload'  />
                            <label htmlFor="resUpload">upload</label>
                        </div>
                        <div className='reservations-form-holder'>
                            <input type="button" value="Room" className='reservations-form25p' />
                            <input type="button" value="Pool" className='reservations-form25p' />
                            <input type="button" value="Restaurant" className='reservations-form25p' />
                            <input type="button" value="Laundry" className='reservations-form25p' />
                        </div>
                        <div className='reservations-form-holder'>
                            <input type="submit" value="Register" className='reservations-form-100p' />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
)
}

export default Reservations
