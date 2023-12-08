import './navbar.scss';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import GridViewOutlinedIcon from '@mui/icons-material/GridViewOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import { Link } from 'react-router-dom';


function navbar() {
  return (

    <div className='navbar'>
        <div className='left'>
        <Link to="/" style={{textDecoration:"none"}}>
        <span> Social</span>
        </Link>
        <HomeOutlinedIcon/>
        <DarkModeOutlinedIcon/>
        <GridViewOutlinedIcon/>
        <div className='search'>
            <SearchOutlinedIcon/>
            <input type='text' placeholder='Search'/>
        </div>
        </div>
        <div className='right'>
            <PersonOutlinedIcon/>
            <EmailOutlinedIcon/>
            <NotificationsNoneOutlinedIcon/>
            <div className="user">
                <img src="#" alt="User"/>
                <span>Neeraj</span>
            </div>

        </div>
    </div>
  )
}

export default navbar