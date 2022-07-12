import React from "react";


class NavigationList extends React.Component {
    render () {
      return (
        <ul className='primary-navigation'>
          <li className='navigation-list'>
            <a href='#navLink' className='navigation-link'>Home</a>
          </li>
          <li className='navigation-list'>
            <a href='#navLink' className='navigation-link'>Tv Shows</a>
          </li>
          <li className='navigation-list'>
            <a href='#navLink' className='navigation-link'>Movies</a>
          </li>
          <li className='navigation-list'>
            <a href='#navLink' className='navigation-link'>Latest</a>
          </li>
          <li className='navigation-list'>
            <a href='#navLink' className='navigation-link'>MyList</a>
          </li>
        </ul>
      )
    }
}

export default NavigationList;
  