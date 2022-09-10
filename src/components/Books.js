import React from "react";
import books from '../data/book';

class Books extends React.Component{
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
        let fillteredBooks = books.filter((book) => 
            book.title.toLowerCase().includes(this.state.searchItem)
        );
        return(
            <div>
                <input placeholder="Search"
                value={this.state.searchItem}
                onChange = {this.handleChange}/>
                <ul className="boxes">
                {fillteredBooks.map((book) => (
                    <li>
                        <img src={book.image} alt=""></img>
                        <h2>{book.title}</h2>
                        <p>Auhtor: {book.author}</p>
                    </li>
                ))}
            </ul>
            </div>
        )
    }
}

export default Books;