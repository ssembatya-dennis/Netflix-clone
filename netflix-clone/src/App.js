
import React from 'react';
import './App.css';
import Mainheader from './components/Mainheader';
import Secondaryheader from './Secondaryheader';
class App extends React.Component {
 render () {
  return (
    <div className='navigation-bar'>
    <Mainheader />
    <Secondaryheader />
    </div>
  );
 }
}


export default App;
