import { useUser } from "@clerk/clerk-react";
import profilePicture from './assets/images/notion-avatar.png';
import './header.css';

function Header() {
    const { user } = useUser();
    const name = user?.firstName + ' ' + user?.lastName;
    const currentDate = new Date();
    return(
        <header>
        <div id='date'>{currentDate.toDateString()}</div>
        <div id='account'>
            <div id='profile-pic' style={{ backgroundImage: `url(${profilePicture})` }}></div>
            <div id='profile-name'>{name}</div>
        </div>
    </header>
    )
}

export default Header;