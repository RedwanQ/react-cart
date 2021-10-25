import React, { Component } from 'react'
import Navbar from './components/Navbar';
import About from './views/About';
import Home from './views/Home';
import { Route } from 'react-router-dom'
import Racers from './views/Racers';

export default class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      count: 0
    }
  }

  handleClick = (step) => {
    let newCount = this.state.count + step
    this.setState({
        count: newCount
    })
  }

  render() {
    return (
      <>
      <Navbar />
      <div className='container'>
        <Route exact path='/'>
          <Home count={this.state.count} handleClick={this.handleClick} name={this.props.name}/>
        </Route>
        <Route exact path='/about'>
          <About />
        </Route>
        <Route exact path='/racers'>
          <Racers />
        </Route>

      </div>
      </>
    )
  }
}
