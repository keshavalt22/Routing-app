import {Link} from 'react-router-dom';
import Asidebar from './Asidebar';


function Home(){
    return(
        <>
            <Asidebar/> 
            <h1>Welcome To Homepage</h1>
            <ul>
                {["articles", "books", "people"].map((path, i) => {
                    return(
                        <li key={i}>
                            <Link to={"/" + path}>
                                <h2>{path.toUpperCase() + " PAGE"}</h2>
                            </Link>
                        </li>
                    )
                })}
            </ul>
        </>
    )
}

export default Home;