import React, {Component} from 'react';

import Navbar from './components/navbar';

const App = ({children}) => (
  <div>
    <Navbar />
    <main role="main">
      <div className="container-fluid">
        {children}
      </div>
    </main>
    <footer className="container-fluid footer">
      <p>&copy; Copyright klg 2018</p>
    </footer>
  </div>
);

export default App;
