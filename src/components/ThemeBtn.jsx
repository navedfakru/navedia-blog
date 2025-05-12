import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { darkMode, lightMode, toggleMode } from '../store/themeSlice';
import { IoMoon, IoSunny } from "react-icons/io5";


function ThemeBtn() {
  const themeMode = useSelector((state) => state.theme.mode);
  const dispatch = useDispatch();

  useEffect(() => {
    document.querySelector("html").classList.remove("dark", "light");
    document.querySelector("html").classList.add(themeMode);
    console.log(themeMode)
  }, [themeMode])

  return (
    <button
      type="button"
      onClick={() => dispatch(toggleMode())}
      className="text-blue-700 border border-blue-700 hover:bg-blue-700 hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm p-2.5 text-center inline-flex items-center me-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:focus:ring-blue-800 dark:hover:bg-blue-500">
      {themeMode === "dark" ? <IoMoon /> : <IoSunny />}
    </button>
  )
}

export default ThemeBtn