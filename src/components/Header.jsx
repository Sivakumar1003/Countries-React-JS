import React, { useContext } from 'react'
import { themeContext } from '../App';

export default function Header({setDarkMode}) {

    const { darkMode, darkElement, lightElement} = useContext(themeContext);

    function changeMode() {
        setDarkMode((previouData) => {
            return !previouData;
        })
    }

    return (
        <div className={`${darkMode ? darkElement :lightElement} shadow h-[10%] flex justify-between p-4 lg:p-6`}>

            <p className='font-bold text-lg md:text-2xl lg:text-3xl'>Where in the World?</p>

            <button className='flex gap-2 items-center justify-center cursor-pointer' onClick={changeMode}>
                <img src={`${darkMode ? '/moonwhite.png' : '/moon.svg' }`} alt="Invalid image" className='h-5'/>
                <p className='text-md lg:text-lg'>Dark Mode</p>
            </button>
        </div>
    )
}
