import React from 'react';
import logo from './logo.svg';
import './App.css';
import { MyRouter } from './component/MyRouter';
import { useSelector } from 'react-redux';
import { RootState } from './app/store';

function App() {
  // const data = useSelector((state: RootState) => state);
  // console.log(data);
  
  return (
    <div className="App">
     <MyRouter></MyRouter>
    </div>
  );
}

export default App;
