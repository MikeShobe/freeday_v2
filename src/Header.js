import React, { Component } from 'react';

import IconButton from 'material-ui/IconButton';
import ActionGrade from 'material-ui/svg-icons/action/grade';

class Header extends Component {
  render() {
    return (
      <div className="App-header">
        <h2>Welcome to Freeday</h2>
        <IconButton
          tooltip="test"
          touch
        >
          <ActionGrade />
        </IconButton>
      </div>
    );
  }
}

export default Header;
