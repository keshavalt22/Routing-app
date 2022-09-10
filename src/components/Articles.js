import React from 'react';
import {Link} from 'react-router-dom';
import articles from '../data/article.js'


class Articles extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            searchItem: "",
        }
    }

    handleChange = ({target: {value}}) => {
        this.setState({searchItem: value});
    }
    

    render(){

        let filteredArticle = articles.filter((article) => 
            article.title.toLowerCase().includes(this.state.searchItem)
        )

        return(
            <div>
                <input placeholder="Search"
                value={this.state.searchItem}
                onChange = {this.handleChange}/>
                <ul>
                {
                    filteredArticle.map((article) => (
                        <li>
                            <Link to={"acticles/"+article.slug}>
                                <h2>{article.title}</h2>
                            </Link>
                            <p>{article.author}</p>
                        </li>
                    ))
                }
                </ul>
            </div>
        )
    }
}


export default Articles;