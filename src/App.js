import React, { Component } from 'react';
import './App.css'; // entire app css
import Navbar from './components/layout/Navbar.js';
import Users from './components/users/Users.js';
import Search from './components/users/Search.js'
import Alert from './components/layout/Alert.js'
import axios from 'axios'
// this new with create-react-app, it creates functional components, not class components.
// the return of this function is the <App /> rendered in the index.html, in the <div /> with id of "root"

// Class component 
class App extends Component {

  state = {
    users: [],
    loading: false,
    alert: null,
  }

  // this method is to search github users 
  searchUsers = async text => {
    this.setState({ loading: true })
    
    const res = await axios.get(`https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);

    this.setState({ users: res.data.items, loading: false })  
  }

  // Clear users method
  clearUsers = () => this.setState({ users: [], loading: false })

  // alert method
  setAlert = (msg, type) => {
    this.setState({ alert: { msg, type }});
    setTimeout(() => this.setState({ alert: null }), 5000)
  }

  render(){
    const { loading, users, alert } = this.state;
    return (
      <div className="App">
        <Navbar/>
        <div className='container'>
          <Alert alert={alert} />
          <Search 
          searchUsers={this.searchUsers} 
          clearUsers={this.clearUsers}  
          showClear={(users.length > 0) ? true : false } 
          setAlert={this.setAlert}
          />

        <Users loading={loading} users={users} />
        </div>
      </div>
    );
  }
}

export default App;
