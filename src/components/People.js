import React from 'react';
import got from '../data/got';

class People extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            searchItem: "",
        }
    }

    handleChange = ({target: {value}}) => {
        this.setState({searchItem: value})
    };

    render(){
        let allPeople = got.reduce((acc, cv) => {
            acc = acc.concat(cv.people);
            return acc;
        }, []);
        return(
            <div>
                <input
                placeholder='Search'
                value={this.state.searchItem}
                onChange= {this.handleChange}
                />   
                <ul>
                {allPeople.map((elm) => (
                    <SinglePerson {...elm}/>
                ))
                }
            </ul>
            </div>
        )
    }
}

function SinglePerson(props){
    return(
        <li>
            <img src={props.image} alt=""/>
            <h2>{props.name}</h2>
            <p>{props.description}</p> 
            <a href={props.wikiLink}> Learn More </a>
        </li>
    )
}


export default People;