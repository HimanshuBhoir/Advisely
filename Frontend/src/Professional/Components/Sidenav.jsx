import React from 'react'
import { Sidebar,Menu,MenuItem,useProSidebar} from 'react-pro-sidebar'
import { Link } from 'react-router-dom'
import DehazeIcon from '@mui/icons-material/Dehaze';
import PersonPinIcon from '@mui/icons-material/PersonPin';
import VerifiedIcon from '@mui/icons-material/Verified';
import GppMaybeIcon from '@mui/icons-material/GppMaybe';
import BookOnlineIcon from '@mui/icons-material/BookOnline';
import HomeIcon from '@mui/icons-material/Home';
// import '../Styles/Sidenav.css'

function Sidenav() {

  const { collapseSidebar } = useProSidebar();

  return (
    <div>
      <Sidebar className='side'>
          <Menu>

              <MenuItem 
                icon={<DehazeIcon/>}
                onClick={()=>{
                  collapseSidebar()
                }}
                >
                  <h2>Advisely</h2>
              </MenuItem>
              
              <MenuItem component={<Link to ="/professional/" />} icon={<HomeIcon/>}>Myprofession</MenuItem>
              <MenuItem component={<Link to ="/professional/confirmed" />} icon={<VerifiedIcon/>}>Confirmed</MenuItem>
              <MenuItem component={<Link to ="/professional/appointments" />} icon={<BookOnlineIcon/>}>Appointmentss</MenuItem>
              <MenuItem component={<Link to ="/professional/profile" />} icon={<PersonPinIcon/>}>Profile</MenuItem>
          </Menu>
      </Sidebar>
    </div>
  )
}

export default Sidenav
