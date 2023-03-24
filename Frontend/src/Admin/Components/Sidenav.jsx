import React from 'react'
import { Sidebar,Menu,MenuItem,useProSidebar,} from 'react-pro-sidebar'
import { Link } from 'react-router-dom'
import DehazeIcon from '@mui/icons-material/Dehaze';
import PersonPinIcon from '@mui/icons-material/PersonPin';
import VerifiedIcon from '@mui/icons-material/Verified';
import GppMaybeIcon from '@mui/icons-material/GppMaybe';
import '../Styles/Sidenav.css'

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
              
              <MenuItem component={<Link to ="/admin/" />} icon={<GppMaybeIcon/>}>Unerified</MenuItem>
              <MenuItem component={<Link to ="/admin/verified" />} icon={<VerifiedIcon/>}>Verified</MenuItem>
              <MenuItem component={<Link to ="/admin/profile" />} icon={<PersonPinIcon/>}>Profile</MenuItem>
          </Menu>
      </Sidebar>
    </div>
  )
}

export default Sidenav
