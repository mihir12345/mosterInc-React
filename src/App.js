// import logo from './logo.svg';
import './App.css';
import React, { Component } from "react";
import Cardlist from "./card-list/card-list-component";
import SearchField from "./searchField/searchField-component";
import './searchField/searchField_style.css'

class App extends Component {
  constructor() {
    super();
    this.state = {
      character: [ ],
      searchField:''
    };
  }

handleChange= (e)=>{
  this.setState({searchField:e.target.value})

}

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users').then((response)=>
  response.json()).then((body)=>this.setState({character:body}))
  }

  render() {

const character=this.state.character
const searchField=this.state.searchField
// const {c}

const filterCharacter=character.filter(character=>character.name.toLowerCase().includes(searchField.toLocaleLowerCase()))

    return <div className='App'>


      <h1>Monster Inc</h1>
       <input className='search' type='search' placeholder='Search Character' onChange={this.handleChange}/>  
 {/* <Cardlist character={this.state.character}> */}
{/* <SearchField
 placeholder='Search Character' 
 handleChange={this.handleChange}
 />  */}
<Cardlist character={filterCharacter}>
 
</Cardlist>

  
  
    </div>;
  }
}

export default App;
