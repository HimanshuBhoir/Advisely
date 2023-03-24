import React from 'react'
import { Sidebar,Menu,MenuItem,useProSidebar} from 'react-pro-sidebar'
import { Link } from 'react-router-dom'
import DehazeIcon from '@mui/icons-material/Dehaze';
import PersonPinIcon from '@mui/icons-material/PersonPin';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import SellIcon from '@mui/icons-material/Sell';
import LocalMallIcon from '@mui/icons-material/LocalMall';// import '../Styles/Sidenav.css'

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
              
              <MenuItem component={<Link to ="/consumer/" />} icon={<SellIcon/>}>Services</MenuItem>
              <MenuItem component={<Link to ="/consumer/bookings" />} icon={<LocalMallIcon/>}>Bookings</MenuItem>
              <MenuItem component={<Link to ="/consumer/pricing" />} icon={<AccountBalanceWalletIcon/>}>Pricing</MenuItem>
              <MenuItem component={<Link to ="/consumer/profile" />} icon={<PersonPinIcon/>}>Profile</MenuItem>
          </Menu>
      </Sidebar>
    </div>
  )
}

export default Sidenav
