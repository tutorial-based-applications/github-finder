import React, { Component } from 'react';
import './App.css'; // entire app css
import Navbar from './components/layout/Navbar.js';
import Users from './components/users/Users.js';
import axios from 'axios'
// this new with create-react-app, it creates functional components, not class components.
// the return of this function is the <App /> rendered in the index.html, in the <div /> with id of "root"

// Class component 
class App extends Component {

  state = {
    users: [],
    loading: false
  }

  // Life Cycle Method
  async componentDidMount() {
    console.log(process.env.REACT_APP_GITHUB_CLIENT_SECRET)
    this.setState({ loading: true })
    const res = await axios.get(`https://api.github.com/users?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`)

    this.setState({ users: res.data, loading: false })

  }
  render(){
    return (
      <div className="App">
        <Navbar/>
        <div className='container'>
        <Users loading={this.state.loading} users={this.state.users} />
        </div>
      </div>
    );
  }
}

export default App;
