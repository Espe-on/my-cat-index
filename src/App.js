import React, {Component} from 'react';

import './App.css';

import {SearchBox} from "./components/search-box/search-box.component"
import {catsArray} from "./data/cats.data";
import {CardList} from "./components/card-list/card-list.component";

class App extends Component {
    constructor() {
        super();
        this.state = {
            cats: catsArray,
            searchField: ""
        }
    }

    

    handleChange = event => {
        this.setState({searchField: event.target.value})
    }

    render() {
        const {cats, searchField} = this.state;
        const filteredCats = cats.filter(cat =>
            cat.name.toLowerCase().includes(searchField.toLowerCase())
        )
        
        return (
            <div className="App">
                <h1>My Cat Index</h1>
                <SearchBox
                    placeholder="search cats"
                    handleChange={this.handleChange}
                />
                <CardList cats={filteredCats}/>
                    
            </div>
        )
    }
}

export default App;
