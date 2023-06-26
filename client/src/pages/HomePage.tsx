import 'bootstrap/dist/css/bootstrap.min.css';
import '../HomePage.css'
import profilePicture from '../assets/images/notion-avatar.png';
import richDadPoorDad from '../assets/images/RichDadPoorDad.jpeg';
import surrondedBySetbacks from '../assets/images/SurroundedBySetbacks.jpg';
import theLeanStartup from '../assets/images/TheLeanStartup.jpeg';
import biografiMuhammad from '../assets/images/BiografiMuhammadbinAbdullah.jpeg';

import { Link } from 'react-router-dom';

function HomePage() {
    const currentDate = new Date();
    const isActiveHome = location.pathname === '/';
    const isActiveSearch = location.pathname === '/search';
    const isActiveProgress = location.pathname === '/progress';
    const isActiveProfile = location.pathname === '/profile';

    return (
        <div className="fluid-container">
            <div id='background'></div>
            <div id='sidebar'>
                <div id='Home' className={isActiveHome ? 'active' : ''}>
                    <Link to="/" id='Link'>
                        <span><i className="gg-home"></i></span>
                    </Link>
                </div>
                <div id='Search' className={isActiveSearch ? 'active' : ''}>
                    <Link to="/search" id='Link'>
                        <span><i className="gg-search"></i></span>
                    </Link>
                </div>
                <div id='Progress' className={isActiveProgress ? 'active' : ''}>
                    <Link to="/progress" id='Link'>
                        <span><i className="gg-open-collective"></i></span>
                    </Link>
                </div>
                <div id='Profile' className={isActiveProfile ? 'active' : ''}>
                    <Link to="/profile" id='Link'>
                        <span><i className="gg-user"></i></span>
                    </Link>
                </div>
            </div>
            <header>
                <div id='date'>{currentDate.toDateString()}</div>
                <div id='account'>
                    <div id='profile-pic' style={{ backgroundImage: `url(${profilePicture})` }}></div>
                    <div id='profile-name'>Amin Haiqal</div>
                </div>
            </header>
            <div id='hero'>
                <div id='title'>
                    <span>Happy Reading,</span><br /><span>Amin Haiqal</span>
                </div>
                <div id='description'>Don't let your love for books fade away! Rediscover the enhancement by tracking your favorite read. Let's keep the literacy going.</div>
                <div id='button'>
                    <span>Continue Reading</span>
                    <span><i className="gg-arrow-long-right"></i></span>
                </div>
            </div>
            <div id='section1'>
                <div id='title'>My Books</div>
                <div id='book-list'>
                    <div id='card'>
                        <div id='cover' style={{ backgroundImage: `url(${richDadPoorDad})` }}></div>
                        <div id='name'>Rich Dad Poor Dad</div>
                    </div>
                    <div id='card'>
                        <div id='cover' style={{ backgroundImage: `url(${surrondedBySetbacks})` }}></div>
                        <div id='name'>Surronded By Setbacks: Or, How...</div>
                    </div>
                    <div id='card'>
                        <div id='cover' style={{ backgroundImage: `url(${theLeanStartup})` }}></div>
                        <div id='name'>The Lean Startup</div>
                    </div>
                    <div id='card'>
                        <div id='cover' style={{ backgroundImage: `url(${biografiMuhammad})` }}></div>
                        <div id='name'>Biografi Muhammad bin Abdullah</div>
                    </div>
                </div>
            </div>
            <div id='section2'>
                <div id='current-read'>
                    <div id='cover' style={{ backgroundImage: `url(${surrondedBySetbacks})` }}></div>
                    <div id='description'>
                        <div id='title'>Surrounded by Setbacks: Or, How to Succeed When Everything's Gone Bad</div>
                        <div id='progress'><span>236</span><span> /</span><span>317</span> Pages</div>
                        <div id='quotes'>Success is not final, failure is not fatal, It is the courage to continue that counts.</div>
                    </div>
                </div>
                <div id='current-read-details'>
                    <div id='book-details'>
                        <p>Status</p>
                        <p>Author</p>
                        <p>Genre</p>
                        <p>Publisher</p>
                        <p>Dates</p>
                        <p>ISBN</p>
                    </div>
                    <div id='values'>
                        <p>Reading</p>
                        <p id='author'>Thomas Erikson</p>
                        <p id='genre'>Self-Help</p>
                        <p id='publisher'>Penguin Random House UK</p>
                        <p id='dates'>2021</p>
                        <p id='ISBN'>9781785043666</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HomePage;