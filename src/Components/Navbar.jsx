import React from 'react'
import Logo from '../assets/Logo.png'

function Navbar() {

    const handleSearch = (searchText) =>{
        console.log('Search is happening',searchText)
    }

    

  return (
    <>  
      <div className='flex flex-row p-3 m-3 h-20 w-screen'>
      <img src={Logo} alt="Logo" className='rounded-2xl h-auto items-start'/>
      <input type="text" placeholder='Search City/Country' onChange={(e)=>{handleSearch(e.target.value)}} />
      </div>
    </>
  )
}

export default Navbar
