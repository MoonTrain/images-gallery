import 'bootstrap/dist/css/bootstrap.min.css'; 
import { Component } from 'react';
import Header from './Components/Header';
import Search from './Components/Search';

const handleSearchSubmit = (e) =>{
  e.preventDefault();
  console.log(e.target[0].value);
}

const App = () => {
  return (
    <div>
      <Header title = "Images Gallery"/>
      <Search handleSubmit={handleSearchSubmit}/>
    </div>
  );
}

export default App;
