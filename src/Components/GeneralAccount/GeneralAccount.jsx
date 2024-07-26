import React from 'react'

import GuestDashBoard from '../Guest/GuestDashBoard/GuestDashBoard'
import { Link } from 'react-router-dom'
import DashBoardHeader from '../DashBoardHeader/DashBoardHeader'

import Table from '../Table/Table'

const GeneralAccount = () => {
  return (
    <>
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
                <p>General --------- Account </p>
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
    </>
  )
}

export default GeneralAccount
