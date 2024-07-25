import React from 'react'
import './SignIn.css'
import DashBoardHeader from '../../DashBoardHeader/DashBoardHeader'
import DashboardRoomProfile from '../../DashboardRoomProfile/DashboardRoomProfile'
import { useState } from 'react'

const SignIn = () => {
    const [profileShow, setProfileShow] = useState(false);
return (
    <div className='signIn'>
        <div className='signIn-hue'>
            <div>
                <DashboardRoomProfile profileShow={profileShow} setProfileShow={setProfileShow}/>
                <DashBoardHeader setProfileShow={setProfileShow}/>
            </div>
            <div className='signIn-body'>
                <form  className="signIn-form">
                    <h1>Sign in</h1>
                    <div className='signIn-hide-box'></div>
                    <input type="text" name="" id=""  placeholder='Staff  Unique ID'/>
                    <button type="submit" className='signIn-submit'>Submit</button>
                </form>
            </div>
        </div>
    </div>
)
}

export default SignIn
