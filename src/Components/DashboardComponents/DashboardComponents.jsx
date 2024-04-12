import React, { useState } from 'react'
import DashboardRoomProfile from '../DashboardRoomProfile/DashboardRoomProfile';
import DashboardRoom from '../DashboardRoom/DashboardRoom';

const DashboardComponents = () => {

  const [profileShow, setProfileShow] = useState(false);

  return (
    <div className='dashboard-components'>
      <DashboardRoomProfile profileShow={profileShow} setProfileShow={setProfileShow}/>
        <DashboardRoom setProfileShow={setProfileShow}/>
    </div>
  )
}

export default DashboardComponents
