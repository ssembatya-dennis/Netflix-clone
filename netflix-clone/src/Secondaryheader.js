import React from "react";
import Searchbutton from "./components/SearchBtn";
import { Navelement } from "./components/SearchBtn";
import SubNavNotification from "./components/SubNavNotify";
import SubNavDropdown from "./components/SubNavDrop";



class Secondaryheader extends React.Component {
    render () {
      return (
        <div className='sub-navigation'>
          <Searchbutton />
          {Navelement()}
          <SubNavNotification />
          <SubNavDropdown />
        </div>
      );
    }
}

export default Secondaryheader;