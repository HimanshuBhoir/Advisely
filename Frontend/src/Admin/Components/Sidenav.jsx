import React from 'react'
import { Sidebar,Menu,MenuItem,useProSidebar,SubMenu} from 'react-pro-sidebar'
import { Link, useNavigate } from 'react-router-dom'
import DehazeIcon from '@mui/icons-material/Dehaze';
import PersonPinIcon from '@mui/icons-material/PersonPin';
import VerifiedIcon from '@mui/icons-material/Verified';
import GppMaybeIcon from '@mui/icons-material/GppMaybe';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import LogoutIcon from '@mui/icons-material/Logout';
import HomeIcon from '@mui/icons-material/Home';
import '../Styles/Sidenav.css'

function Sidenav() {

  const navigate = useNavigate()
  const { collapseSidebar } = useProSidebar();

  const handleLogout = () => {
    localStorage.setItem('admjwt','')
    navigate('/adminsignin')
  }

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
              <SubMenu label="More" icon={<MoreHorizIcon/>}>
                <MenuItem onClick={() => navigate('/')} icon={<HomeIcon/>}>Go To</MenuItem>
                <MenuItem onClick={handleLogout} icon={<LogoutIcon/>}>Logout</MenuItem>
              </SubMenu>
          </Menu>
      </Sidebar>
    </div>
  )
}

export default Sidenav
