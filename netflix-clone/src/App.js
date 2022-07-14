import {useEffect, useState} from 'react';
import React from 'react';
import './App.css';
import Mainheader from './components/Mainheader';
import Secondaryheader from './Secondaryheader';
class App extends React.Component{

  constructor (props) {
    super(props);
    this.state = {
      showNavBar: false
    }
  }

  toggleNavBar = () => {
    this.setState((previousState) => {
      if(previousState.showNavBar) {
        return {
          showNavBar: false
        }
      } else {
        return {
          showNavBar: true
        }
      }
    })
  }

  componentDidMount() {
    window.addEventListener('scroll', this.toggleNavBar);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.toggleNavBar);
  }

  render () {
  return (
    <div className={this.state.showNavBar ? 'navigation-bar active' : 'navigation-bar'}>
    <Mainheader />
    <Secondaryheader />
    </div>
  );
  }
}


export default App;
