import {Link} from 'react-router-dom';
import articles from '../data/article';

function Article(){
    return(
        <>
            <Link to={"/articles"}>
                <h3>Back To Home...</h3>
            </Link>
        </>
    )
}

export default Article;