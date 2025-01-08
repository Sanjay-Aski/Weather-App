import { useEffect, useState } from 'react';
import Logo from '../assets/Logo.png';
function Navbar() {
  // Theme Changing Code
  const [theme, setTheme] = useState('light');
  const [themeloc, setThemeLoc] = useState('/src/assets/lightIcon.png');

  // Check theme on mount and apply it
  useEffect(() => {
    const savedTheme = document.querySelector('html').classList.contains('dark') ;
    if(savedTheme){
      setTheme('light');
      setThemeLoc(`/src/assets/lightIcon.png`);
    }
    else{
      setTheme('dark');
      setThemeLoc(`/src/assets/darkIcon.png`);
    }
  }, []);

  const handleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    if (newTheme === 'light') {
      setTheme('light');
      setThemeLoc(`/src/assets/darkIcon.png`);
    } else {
      setTheme('dark');
      setThemeLoc(`/src/assets/lightIcon.png`);
    }
    changeTheme(newTheme);
  };

  const changeTheme = (theme) => {
    document.querySelector('html').classList.remove('light', 'dark');
    document.querySelector('html').classList.add(theme);
  };

  // Searching Handle
  const handleSearch = (searchText) => {
    console.log('Search is happening', searchText);
  };

  return (
    <>
      <div className="sticky top-0 pt-4 left-0 pl-2 p-3 flex flex-row justify-between h-20 w-full bg-yellow-100 shadow-md dark:bg-slate-900">
      <img src={Logo} alt="Logo" className="rounded-2xl h-14 items-start bg-yellow-400 dark:bg-slate-700" />
        <input
        className='focus:outline-none w-1/4 m-3 pl-4 rounded-lg h-1/2 dark:text-gray-600 dark:bg-slate-200'
          type="text"
          placeholder="Search City/Country"
          onChange={(e) => handleSearch(e.target.value)}
        />
        <img
          src={themeloc}
          alt="Theme Icon"
          className="pr-5 dark:bg-slate-900 cursor-pointer h-14 "
          onClick={handleTheme}
        />
      </div>
    </>
  );
}

export default Navbar;
