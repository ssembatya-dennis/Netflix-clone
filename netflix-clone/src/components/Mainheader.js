import React from "react";
import AppLogo from "./Applogo";
import NavigationList from "./Navigationlist";


class Mainheader extends React.Component {
    render () {
      return (
        <div className='main-navigation'>
          <AppLogo />
          <NavigationList />
        </div>
      )
    }
}

export default Mainheader;