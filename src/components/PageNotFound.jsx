import React, { useContext } from 'react'
import { themeContext } from '../App'

export default function PageNotFound() {

  const {darkMode, darkBackground, lightBackground} = useContext(themeContext);

  return (
    <div className={`${darkMode?darkBackground:lightBackground} m-10 flex justify-center`}>
      <p className='font-black text-2xl'>404 Page Not Found</p>
    </div>
  )
}