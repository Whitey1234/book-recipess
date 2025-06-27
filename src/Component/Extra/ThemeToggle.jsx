import React from 'react';
import { useDarkMode } from '@rbnd/react-dark-mode';
import { IoIosSunny } from "react-icons/io";
import { MdOutlineNightlightRound } from "react-icons/md";

function ThemeToggle() {
  const { mode, setMode } = useDarkMode();

  const toggleTheme = () => {
    setMode(mode === 'dark' ? 'light' : 'dark');
  };

  return (
    <button className='text-black-700' onClick={toggleTheme}>
      {mode === 'dark' ? <IoIosSunny className='text-white' /> :< MdOutlineNightlightRound className='text-white'/>} 
    </button>
  );
}

export default ThemeToggle;
