import React, { Component } from 'react';
import SearchComponent from './sharedComponents/search/SearchComponent';

class App extends Component {
  state = {
    contacts: [
      {Name:"Shaimaa Nabil",Job:"Front-End Developer"},
      {Name:"Mohamed Khalil", Job:"Software Engineer"},
      {Name:"Nora Emary", Job:"Communication Engineer"},
      {Name:"Manoj Karthik", Job:"Web Developer"},
      { Name: "Jhonson", Job: "Android Developer" },
      { Name: "Jhonson", Job: "Android Developer" },
      { Name: "Jhonson", Job: "Android Developer" },
      { Name: "Jhonson", Job: "Android Developer" },
      { Name: "Jhonson", Job: "Android Developer" },
      { Name: "Jhonson", Job: "Android Developer" },
      { Name: "Jhonson", Job: "Android Developer" },
      { Name: "Jhonson", Job: "Android Developer" },
      
    ]
  }
  render() {
    return (
      <div>
        <SearchComponent contacts={this.state.contacts}></SearchComponent>
      </div>
    );
  }
}

export default App;
