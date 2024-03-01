import Search from "../Search";
import "./Nav.css";
function Nav() {
    return(
        <div className="nav">
            <div className="nav_logo">
                <div className= "nav_logo_img">
                    <img
                    // src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/250px-Netflix_2015_logo.svg.png"
                    alt='Netflix Logo'
                    />
                </div>
            </div>
           <div>
                <ul className="nav_links">
                    <li className="nav_link">Home</li>
                    <li className="nav_link">TV Shows</li>
                    <li className="nav_link">Movies</li>
                    <li className="nav_link">Latest</li>
                    <li className="nav_link">My List</li>
                </ul>
           </div>
           <div>
            <Search />
           </div>
        </div>
    )
}

export default Nav;
