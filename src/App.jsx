import React from 'react';
import { Provider } from 'react-redux';
import './App.css';
import Body from './Components/Body/Body';
import Footer from './Components/Footer';
import Navbar from './Components/Navbar';
import Store from './Wea_app/Store';
function App() {
  

  return (
    <>
      <Provider store={Store}>
        <Navbar></Navbar>
        <Body/>
        <Footer/>
      </Provider>
    </>
  );
}

export default App;
