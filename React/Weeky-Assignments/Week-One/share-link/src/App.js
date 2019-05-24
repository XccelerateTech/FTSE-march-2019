// import React from 'react';
// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

import * as React from 'react';
import './App.css';

import AddButton from './components/AddButton';
import LinkList from './components/LinkList';
import SearchBar from './components/SearchBar';
import logo from './logo.svg';

class App extends React.Component{
  constructor(){
    super()

    const storedLink = localStorage.getItem('links');

    const parsedLink = ( storedLink === '' || storedLink === null )? [] : JSON.parse(storedLink)

    this.state = {
      links: Array.isArray(parsedLink) ? parsedLink : [], search: ''
    }
  }

  render(){
    const lowerSearch = this.state.search.toLowerCase();


    const linksFiltered = this.state.links.filter(link => link.name.toLowerCase().indexOf(lowerSearch) > -1 || link.url.toLowerCase().indexOf(lowerSearch) > -1 )

    // || link.tags.toLowerCase().indexOf(lowerSearch) > -1 

    return (
      <div className="container-fluid">
        <div className="row">
          <div className="App-intro col-4">
            <img src={logo} className="App-logo" alt="logo" />
            <br />
            King of JavaScript
            <br />
            <p>Links Shared 999</p>
            <AddButton onAddLink = {this.onAddButtonAddLink} />
          </div>
          <div className="App-intro col-8">
          <h4>Search Stored Links:</h4>        
          <SearchBar onSearchChange = {this.onSearchBarChange} />
          <h3>Links for {this.state.search}</h3>  
          <LinkList links={ linksFiltered } />
          </div>
        </div>
      </div>
    );
  }

  onAddButtonAddLink = (name, url, tags) => {
    const newLink = this.state.links.concat([
      {
        name: name,
        url: url, 
        tags: tags
      }
    ]);
    this.setState({
      links: newLink
    })

    localStorage.setItem ('links', JSON.stringify(newLink));
  }

  onSearchBarChange = (search) => {
    this.setState({
      search: search
    })
  }
}

export default App;