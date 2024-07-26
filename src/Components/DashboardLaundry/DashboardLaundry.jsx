import React from 'react'
import './DashboardLaundry.css'
import GuestDashBoard from '../Guest/GuestDashBoard/GuestDashBoard'
import { Link } from 'react-router-dom'

const DashboardLaundry = () => {
return (
    <div className='dashboardLaundry'>
        <div className='dashLaundry-guest-section'>
            <GuestDashBoard/>
        </div>
        

        <div className='dashLaundry-content-section'>
            <div className='dashLaundry-content-head'>
                <Link>Back to Homepage</Link>
            </div>
            <div className='dashLaundry-content-body'>
                <p>Laundry</p>
                <div>
                <div className='dashLaundry-content-table-section'>
                    <div className='dashLaundry-web-table-holder'>
                    <table className='dashLaundry-web-table'>
                        <thead>
                        <tr>
                            <th>Serial</th>
                            <th>Date</th>
                            <th>Submitted</th>
                            <th>Pickup</th>
                            <th>Amount</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>0023</td>
                            <td>13.02.2023</td>
                            <td>06:47pm</td>
                            <td>16.02.2023</td>
                            <td>16,500.00</td>
                        </tr>
                        <tr>
                            <td>0109</td>
                            <td>27.10.2023</td>
                            <td>02:47pm</td>
                            <td>02.03.2023</td>
                            <td>36,450.00</td>
                        </tr>
                        <tr>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td>
                            <div></div>
                            <div></div>
                            </td>
                            <td>&nbsp;</td>
                        </tr>
                        <tr>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td>
                            <div></div>
                            <div></div>
                            </td>
                            <td>&nbsp;</td>
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

export default DashboardLaundry
