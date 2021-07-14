import React from 'react';
import './App.css';
import SearchBox from './Searchbox';
import CardList from "./CardList";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            characters:[],
            searchField:''
        }
    }
    componentDidMount() {
        fetch("https://breakingbadapi.com/api/characters").then(response=> {
            return response.json();
        })
        .then(users => {
            this.setState({characters: users})
        })
    }
    onSearchChange = (event) => {
        this.setState({searchField:event.target.value});
    }
    render() { 
        const filtered = this.state.characters.filter(character =>{
            return character.name.toLowerCase().includes(this.state.searchField.toLowerCase())
        })
        if(!characters.length){
        	return <h1> Loading </h1>
        }else{
        	return (
      		  <div>
            	<div className="header">
            	    <h1>Breaking Bad</h1>
            	    <SearchBox searchChange={this.onSearchChange}/>
          		</div>
            	<CardList characters={filtered}/>
        		</div>
        	);
        }	
    }
}
 
export default App;
