import React from 'react'

import { Link } from 'react-router-dom'

import ReceptioistManageProfile from '../ReceptioistManageProfile/ReceptioistManageProfile'
import PaymentTable from '../PaymentTable/PaymentTable'


const ReceptionistGuestPayment = () => {
  return (
    <div className='dashboardAccount'>    
    <div className='dashboardAccount-web'>
        <div className='dashAccount-guest-section'>
            <ReceptioistManageProfile/>
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
                    <PaymentTable/>
                </div>
                </div>
            </div>
        </div>
    </div>

    
</div>  
  )
}

export default ReceptionistGuestPayment