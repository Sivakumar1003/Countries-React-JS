import React, { useContext } from 'react'

import { themeContext } from '../App';

export default function RegionSelector({ countries, setSelectedRegion, selectedRegion, searchCountry, setSearchCountry }) {
    const { darkMode, darkElement, lightElement } = useContext(themeContext);

    const region = [];
    if (countries !== null) {
        countries.forEach(country => {
            if (!region.includes(country["region"])) {
                region.push(country["region"]);
            }
        });
    }

    function changeSearch(event) {
        let value = event.target.value;
        setSearchCountry(value);
    }

    function changeSelected(event) {
        let value = event.target.value;
        setSelectedRegion(value);
    }

    return (
        <div className='flex flex-col justify-center gap-8 p-6 md:flex-row md:justify-between '>

            <div className={` ${darkMode ? darkElement : lightElement} shadow flex p-2 w-full m-auto md:m-0 md:w-[45%] max-w-[600px] gap-4 items-center rounded-lg`}>
                <img src={`${darkMode ? '/searchdark.svg' : '/searchdark.svg' }`} className={`h-[30px] ${darkMode ? "" : ""}`} />
                <input
                    type="text"
                    placeholder='Search for a country...'
                    value={searchCountry}
                    onChange={changeSearch}
                    className={`${darkMode ? darkElement : lightElement} font-medium text-md md:text-lg w-full h-[30px] focus:border-0 cursor-pointer focus:outline-none`}
                />
            </div>

            <div className={` ${darkMode ? darkElement : lightElement} shadow p-2 items-center w-[60%] md:max-w-[350px] rounded-lg`}>

                <select
                    name="region"
                    id="region"
                    className='focus:outline-none cursor-pointer w-full font-bold text-md md:text-lg'
                    onChange={changeSelected}
                    value={selectedRegion}>

                    <option hidden className={` ${darkMode ? darkElement : lightElement}`}>Select Region</option>
                    {
                        region.length > 0 &&
                        region.map((country => {
                            return <option key={country} value={country} className={` ${darkMode ? darkElement : lightElement} font-medium text-md md:text-lg`}>{country}</option>
                        }))
                    }
                </select>
            </div>
        </div>
    )
}

