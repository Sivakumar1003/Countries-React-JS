import React, { useContext } from 'react'
import { themeContext } from '../App'

export default function Card({ country }) {

    const { darkMode, darkElement, lightElement } = useContext(themeContext);

    return (
        <div className={`${darkMode ? darkElement : lightElement} w-full m-auto h-[400px] rounded-lg shadow-lg`}>
            {
                country &&
                <div >
                    <img src={`${country["flags"]["svg"]}`} alt="Invalid image" className='h-[200px] w-full object-cover object-center shadow-lg rounded-t-lg' />

                    <div className='p-5'>
                        <p className='font-black text-base'>{country["name"]["common"]}</p>
                        <div className='py-4'>
                            <p>
                                <span className='font-bold text-sm'>Population: </span>
                                <span className='font-normal text-sm'>{country["population"] ? country["population"] : "N/A"}</span>
                            </p>
                            <p>
                                <span className='font-bold text-sm'>Region: </span>
                                <span className='font-normal text-sm'>{country["region"] ? country["region"] : "N/A"}</span>
                            </p>
                            <p>
                                <span className='font-bold text-sm'>Capital: </span>
                                <span className='font-normal text-sm'>{ country["capital"] ? country["capital"].join(", ") : "N/A"}</span>
                            </p>
                        </div>
                    </div>
                </div>
            }
        </div>
    )
}