import React from 'react';
import './App.css';
import SearchBox from './Searchbox';
import CardList from "./CardList";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            characters:[{"char_id":1,"name":"Walter White","birthday":"09-07-1958","occupation":["High School Chemistry Teacher","Meth King Pin"],"img":"https://images.amcnetworks.com/amc.com/wp-content/uploads/2015/04/cast_bb_700x1000_walter-white-lg.jpg","status":"Presumed dead","nickname":"Heisenberg","appearance":[1,2,3,4,5],"portrayed":"Bryan Cranston","category":"Breaking Bad","better_call_saul_appearance":[]},{"char_id":2,"name":"Jesse Pinkman","birthday":"09-24-1984","occupation":["Meth Dealer"],"img":"https://vignette.wikia.nocookie.net/breakingbad/images/9/95/JesseS5.jpg/revision/latest?cb=20120620012441","status":"Alive","nickname":"Cap n' Cook","appearance":[1,2,3,4,5],"portrayed":"Aaron Paul","category":"Breaking Bad","better_call_saul_appearance":[]}],
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
 
export default App;