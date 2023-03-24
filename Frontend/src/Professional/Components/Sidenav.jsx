import React from 'react'
import { Sidebar,Menu,MenuItem,useProSidebar,SubMenu} from 'react-pro-sidebar'
import { Link,useNavigate } from 'react-router-dom'
import DehazeIcon from '@mui/icons-material/Dehaze';
import PersonPinIcon from '@mui/icons-material/PersonPin';
import VerifiedIcon from '@mui/icons-material/Verified';
import BookOnlineIcon from '@mui/icons-material/BookOnline';
import HomeIcon from '@mui/icons-material/Home';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import LogoutIcon from '@mui/icons-material/Logout';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
// import '../Styles/Sidenav.css'

function Sidenav() {

  const navigate = useNavigate()
  const { collapseSidebar } = useProSidebar();

  const handleLogout = () => {
    localStorage.setItem('jwt','')
    navigate('/professionalsignin')
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
              
              <MenuItem component={<Link to ="/professional/" />} icon={<HomeIcon/>}>Myprofession</MenuItem>
              <MenuItem component={<Link to ="/professional/confirmed" />} icon={<VerifiedIcon/>}>Confirmed</MenuItem>
              <MenuItem component={<Link to ="/professional/appointments" />} icon={<BookOnlineIcon/>}>Appointmentss</MenuItem>
              <MenuItem component={<Link to ="/professional/profile" />} icon={<PersonPinIcon/>}>Profile</MenuItem>
              <MenuItem component={<Link to ="/professional/earning" />} icon={<CurrencyRupeeIcon/>}>Earning</MenuItem>
              <SubMenu label="More" icon={<MoreHorizIcon/>}>
                <MenuItem onClick={handleLogout} icon={<LogoutIcon/>}>Logout</MenuItem>
              </SubMenu>
          </Menu>
      </Sidebar>
    </div>
  )
}

export default Sidenav
