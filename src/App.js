import React from 'react';
import './App.css';
import RepositoryList from './Components/RepositorySearchList';
import 'bootstrap/dist/css/bootstrap.css';

function App() {
  return (
    <div className="container">
      <RepositoryList></RepositoryList>
    </div>
  );
}

export default App;
