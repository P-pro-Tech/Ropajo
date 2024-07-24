import React, { useState } from 'react'
import DashboardRoomProfile from '../DashboardRoomProfile/DashboardRoomProfile';
import DashboardRoom from '../DashboardRoom/DashboardRoom';
import DashBoardHeader from '../DashBoardHeader/DashBoardHeader';

const DashboardComponents = () => {

  const [profileShow, setProfileShow] = useState(false);

  return (
    <div className='dashboard-components'>
      <DashboardRoomProfile profileShow={profileShow} setProfileShow={setProfileShow}/>
        <DashboardRoom />
        {/* <DashBoardHeader setProfileShow={setProfileShow}/> */}
    </div>
  )
}

export default DashboardComponents
