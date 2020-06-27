import React, { Component, Fragment } from 'react';
import axios from 'axios'
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'

import './App.css'; // entire app css

import Navbar from './components/layout/Navbar.js';
import Users from './components/users/Users.js';
import User from './components/users/User.js';
import Search from './components/users/Search.js';
import Alert from './components/layout/Alert.js';
import About from './components/Pages/About.js';

// this new with create-react-app, it creates functional components, not class components.
// the return of this function is the <App /> rendered in the index.html, in the <div /> with id of "root"

// Class component 
class App extends Component {

  state = {
    users: [],
    user: {},
    repos: [],
    loading: false,
    alert: null,
  }

  // this method is to search github users 
  searchUsers = async text => {
    this.setState({ loading: true })
    
    const res = await axios.get(`https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);

    this.setState({ users: res.data.items, loading: false })  
  }

  // get single Github User
  getUser = async (username) => {
    this.setState({ loading: true })
    
    const res = await axios.get(`https://api.github.com/users/${username}?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);

    this.setState({ user: res.data, loading: false })  
  }

  // get users Repos

  getUserRepos = async (username) => {
    this.setState({ loading: true })
    
    const res = await axios.get(`https://api.github.com/users/${username}/repos?per_page=5&sort=created:asc&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);

    this.setState({ repos: res.data, loading: false })  
  }

  // Clear users method
  clearUsers = () => this.setState({ users: [], loading: false })

  // alert method
  setAlert = (msg, type) => {
    this.setState({ alert: { msg, type }});
    setTimeout(() => this.setState({ alert: null }), 5000)
  }

  render(){
    const { loading, users, repos, alert, user } = this.state;
    return (
      <Router>
     <div className="App">
        <Navbar/>
        <div className='container'>
          <Alert alert={alert} />

          <Switch>
            <Route 
            exact 
            path='/'
            render={props => (
              <Fragment>
                 <Search 
          searchUsers={this.searchUsers} 
          clearUsers={this.clearUsers}  
          showClear={(users.length > 0) ? true : false } 
          setAlert={this.setAlert}
          />

             <Users loading={loading} users={users} />
            </Fragment>
            )}/>

            <Route exact path='/about' component={About} />
            
            <Route exact path='/user/:login' render={props => (
              <User 
              {...props} 
              getUser= {this.getUser} 
              getUserRepos= {this.getUserRepos} 
              user={user} 
              repos={repos}
              loading={loading} 
              />

            )} />
          </Switch>
         
        </div>
      </div>
      </Router>
 
    );
  }
}

export default App;
