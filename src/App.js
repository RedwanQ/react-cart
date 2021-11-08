import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import Navbar from './components/Navbar';
import {Product} from './components/Product'
import Home from './views/Home';
import { Login } from './views/Login';
import {Products} from './views/Products'
import Register from './views/Register';
import Users from './views/Users';

export default class App extends Component {
  constructor(props){
    super(props);
    console.log('Constructed!')
    this.state = {
      count: 0,
      name: 'Brian',
      loggedIn: localStorage.getItem('token'),
      userId: localStorage.getItem('userId')
    };
  };

  logOut = () =>{
    localStorage.removeItem('token');
    this.setState({
      loggedIn: null
    })
  }

  logIn = (e) => {
    e.preventDefault();
    let username = e.target.username.value;
    let password = e.target.password.value;
    let encodedString = btoa(`${username}:${password}`)
    let myHeaders = new Headers();
    myHeaders.append('Authorization', `Basic ${encodedString}`)
    
    fetch('http://localhost:5000/api/token', {
        method: 'POST',
        headers: myHeaders
    }).then(res => res.json())
        .then(data => {
            localStorage.setItem('token', data['token'])
            localStorage.setItem('userId', data['user_id'])
            this.setState({
              loggedIn: data['token'],
              userId: data['user_id']
            })
        })
        .catch(err => console.error(err))
  }

  render() {
    return (
      <>
        <Navbar loggedIn={this.state.loggedIn} logOut={this.logOut}/>
        <div className='container'>
            <Route exact path='/'>
                <Home count={this.state.count} handleClick={this.handleClick} name={this.state.name} changeName={this.changeName}/>
            </Route>

            <Route exact path='/users'>
                <Users userId={this.state.userId}/>
            </Route>
            <Route exact path='/products'>
                <Products />
            </Route>
            <Route exact path='/register'>
                <Register />
            </Route>
            <Route exact path='/login'>
                <Login handleSubmit={this.logIn} loggedIn={this.state.loggedIn}/>
            </Route>

            <Route exact path='/products/:id' component={Product}></Route>

        </div>
      </>
    )
  }
}
