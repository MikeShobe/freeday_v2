import React, { Component } from 'react';
import './CSS/App.css';
import Header from './Header';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <div className="App">
          <Header />
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
