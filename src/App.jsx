import React from 'react';
import { Provider } from 'react-redux';
import './App.css';
import Body from './Components/Body/Body';
import Footer from './Components/Footer';
import Navbar from './Components/Navbar';
import Store from './Wea_app/Store';
function App() {
  

  return (
    <div className='w-[1024px] lg:w-screen min-h-screen bg-background-light dark:bg-background-dark'>
      <Provider store={Store}>
        <Navbar></Navbar>
        <Body/>
        <Footer/>
      </Provider>
    </div>
  );
}

export default App;
