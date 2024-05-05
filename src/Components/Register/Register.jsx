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

    </div>
    </div>
)
}

export default Register
