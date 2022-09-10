import { Link, NavLink, BrowserRouter } from "react-router-dom";

function Asidebar(){
    return(
        <div className="asidebar">
             <ul>
                <li>
                    <Link to= "/">
                        <span>Home</span>
                    </Link>
                </li>
                <li>
                    <Link to= "/articles">
                        <span>Articles</span>
                    </Link>
                </li>
                <li>
                    <Link to= "/people">
                        <span>People</span>
                    </Link>
                </li>
                <li>
                    <Link to= "/books">
                        <span>Books</span>
                    </Link>
                </li>
                <li>
                    <Link to= "/help">
                        <span>Help & Support</span>
                    </Link>
                </li>
            </ul>
        </div>
    )
}

export default Asidebar;