import React, {Component} from 'react';

import Navbar from './components/navbar';

const App = ({children}) => (
  <div>
    <Navbar />
    <main role="main">
      <div className="container-fluid">{children}</div>
    </main>
  </div>
);

export default App;
