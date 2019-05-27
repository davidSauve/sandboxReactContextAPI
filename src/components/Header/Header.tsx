import React, { Component } from 'react';

import './Header.css';

interface HeaderProperties {
}

interface HeaderState {
}

class Header extends Component<HeaderProperties, HeaderState> {

 constructor(props : HeaderProperties) {
    super(props);
 }

 render() {
  return (
   <div className="Header">
    Header Component Works !
   </div>
  );
 }
}

export default Header;
