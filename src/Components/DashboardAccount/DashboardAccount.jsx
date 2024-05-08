import React from 'react'
import './DashboardAccount.css'
import GuestDashBoard from '../GuestDashBoard/GuestDashBoard'
import { Link } from 'react-router-dom'

const DashboardAccount = () => {
return (
    <div className='dashboardAccount'>
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
                    <div className='dashAccount-web-table-holder'>
                    <table className='dashAccount-web-table'>
                        <thead>
                        <tr>
                            <th>Date</th>
                            <th>Category</th>
                            <th>Bill</th>
                            <th>Paid</th>
                            <th>Balance</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>03.02.2023</td>
                            <td>Room</td>
                            <td>90,000.00</td>
                            <td>40,000.00</td>
                            <td>50,000.00</td>
                        </tr>
                        <tr>
                            <td>03.02.2023</td>
                            <td>Laundry</td>
                            <td>25,200.00</td>
                            <td>15,000.00</td>
                            <td>10,000.00</td>
                        </tr>
                        <tr>
                            <td>03.02.2023</td>
                            <td>Restaurant</td>
                            <td>9,500.00</td>
                            <td>9,500.00</td>
                            <td>0.00</td>
                        </tr>
                        <tr>
                            <td>03.02.2023</td>
                            <td>Pool</td>
                            <td>5,000.00</td>
                            <td>15,000.00</td>
                            <td>10,000.00</td>
                        </tr>
                        <tr>
                            <td>03.02.2023</td>
                            <td>Room</td>
                            <td>30,000.00</td>
                            <td>00.00</td>
                            <td>30,000.00</td>
                        </tr>
                        <tr>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td><h3 className='dashAccount-total'>TOTAL</h3></td>
                            <td><span className='dashAccount-total-amount'>216,500.00</span></td>
                        </tr>
                        </tbody>
                    </table>
                    </div>
                </div>
                </div>
            </div>
        </div>
    </div>
)
}

export default DashboardAccount
