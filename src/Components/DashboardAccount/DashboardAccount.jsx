import React from 'react'
import './DashboardAccount.css'
import GuestDashBoard from '../GuestDashBoard/GuestDashBoard'
import { Link } from 'react-router-dom'
import DashBoardHeader from '../DashBoardHeader/DashBoardHeader'
import roll_icon from '../../assets/play-icon.svg'
import Table from '../Table/Table'

const DashboardAccount = () => {
return (
<div className='dashboardAccount'>    
    <div className='dashboardAccount-web'>
        <div className='dashAccount-guest-section'>
            <GuestDashBoard/>
        </div>
        

        <div className='dashAccount-content-section'>
            <div className='dashAccount-content-head'>
                <Link>Back to Homepage</Link>
            </div>
            <div className='dashAccount-content-body'>
                <p>Account </p>
                <div>
                <div className='dashAccount-content-table-section'>
                    {/* table */}
                    <Table/>
                </div>
                </div>
            </div>
        </div>
    </div>

    {/* mobile deign start here */}
    <div className='mobile-dasboardAccount'>
        <div className='mobile-dasboardAccount-head'>
            <DashBoardHeader/>
        </div>
        
    </div>
</div>    
)
}

export default DashboardAccount
