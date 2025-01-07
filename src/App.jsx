import React, { useState } from 'react';
import './App.css';
import Navbar from './Components/Navbar';

function App() {
  const [theme, setTheme] = useState('light');

  const handleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    changeTheme(newTheme);
  };

  const changeTheme = (theme) => {
    document.querySelector('html').classList.remove('light', 'dark');
    document.querySelector('html').classList.add(theme);
  };

  return (
    <>
    <Navbar></Navbar>
      <button
        className="dark:bg-slate-800 dark:text-white"
        onClick={handleTheme}
      >
        Change theme For me
      </button>

      <div className="dark:bg-slate-800 dark:text-white bg-yellow-500 w-20 h-20">
        hii
      </div>
    </>
  );
}

export default App;
