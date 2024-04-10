import React from 'react'
import DashboardRoomProfile from '../DashboardRoomProfile/DashboardRoomProfile';
import DashboardRoom from '../DashboardRoom/DashboardRoom';

const DashboardComponents = () => {
  return (
    <div className='dashboard-components'>
      <DashboardRoomProfile/>
        <DashboardRoom/>
    </div>
  )
}

export default DashboardComponents
