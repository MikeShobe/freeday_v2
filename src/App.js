import React, { Component } from 'react';
import './CSS/App.css';

import Footer from './Containers/Footer.js';
import Header from './Containers/Header.js';
import List from './Containers/List.js';
import Map from './Containers/Map.js';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <div className="App">
          <Header />
          <Map />
          <List />
          <Footer />
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
