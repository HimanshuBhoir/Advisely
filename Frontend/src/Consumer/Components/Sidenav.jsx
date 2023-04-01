import React from 'react'
import { Sidebar,Menu,MenuItem,useProSidebar,SubMenu} from 'react-pro-sidebar'
import { Link,useNavigate } from 'react-router-dom'
import DehazeIcon from '@mui/icons-material/Dehaze';
import PersonPinIcon from '@mui/icons-material/PersonPin';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import SellIcon from '@mui/icons-material/Sell';
import LocalMallIcon from '@mui/icons-material/LocalMall';// import '../Styles/Sidenav.css'
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import LogoutIcon from '@mui/icons-material/Logout';
import HomeIcon from '@mui/icons-material/Home';


function Sidenav() {
  
  const navigate = useNavigate()
  const { collapseSidebar } = useProSidebar();

  const handleLogout = () => {
    localStorage.setItem('conjwt','')
    navigate('/consumersignin')
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
              
              <MenuItem component={<Link to ="/consumer/" />} icon={<SellIcon/>}>Services</MenuItem>
              <MenuItem component={<Link to ="/consumer/bookings" />} icon={<LocalMallIcon/>}>Bookings</MenuItem>
              <MenuItem component={<Link to ="/consumer/pricing" />} icon={<AccountBalanceWalletIcon/>}>Pricing</MenuItem>
              <MenuItem component={<Link to ="/consumer/profile" />} icon={<PersonPinIcon/>}>Profile</MenuItem>
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
