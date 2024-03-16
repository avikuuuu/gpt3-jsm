import './navbar.css'
import { Constant } from '../../constant.js'

const Navbar = () => {
    return (
        <nav className='flex-div'>
            <div className='nav-left flex-div'>
                <img className='menu-icon' src={Constant.menuIcon} alt="" />
                <img src={Constant.logo} alt="" className="nav-logo" />

            </div>

            <div className="nav-middle flex-div">
                <div className="search-box flex-div">
                    <input type="text" placeholder="Search for something..." />
                    <img src={Constant.searchIcon} alt="" />
                </div>
            </div>

            <nav className="nav-right flex-div">
                <img src={Constant.uploadIcon} alt="" />
                <img src={Constant.moreIcon} alt="" />
                <img src={Constant.notificationIcon} alt="" />
                <img src={Constant.profileIcon} className='user-icon' alt="" />
            </nav>
        </nav>
    )
}

export default Navbar;
