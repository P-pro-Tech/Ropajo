import React from 'react'
import './Register.css'
import DashBoardHeader from '../DashBoardHeader/DashBoardHeader'
import DashboardRoomProfile from '../DashboardRoomProfile/DashboardRoomProfile'
import { useState } from 'react'


const Register = () => {
    const [profileShow, setProfileShow] = useState(false);
return (
    <div className='register'>
        <div className='register-hue'>
            <div>
            <DashboardRoomProfile profileShow={profileShow} setProfileShow={setProfileShow}/>
            <DashBoardHeader setProfileShow={setProfileShow}/>
            </div>
            <div className='register-body'>
                <form  className="register-form">
                    <h1>Register</h1>
                    <input type="text" name="" id=""  placeholder='Full Names'/>
                    <input type="email" name="" id="" placeholder='Email'/>
                    <input type="number" name="" id="" placeholder='Phone Number'/>
                    <input type="number" name="" id="" placeholder=' Identity No.'/>
                    <input type="file" name=" " id="" placeholder='Upload ID:' hidden/>
                    <button type="submit" className='register-submit'>Submit</button>
                </form>
            </div>
        </div>
    </div>
)
}

export default Register
