import React, { useContext } from 'react'
import Card from "./Card"
import { themeContext } from '../App'

export default function SubRegionSelector({ filteredCountry, selectSubRegion, setSelectSubRegion, selectedRegion, setSortCountry }) {

    const { darkMode, darkElement, lightElement } = useContext(themeContext);

    function changeSubRegion(event) {
        let value = event.target.value;
        setSelectSubRegion(value);
    }

    function changeSort(event) {
        let value = event.target.value;
        setSortCountry((previousData) => {
            return { ...previousData, sort: value };
        })
    }

    function changeStore(event) {
        let value = event.target.value;
        setSortCountry((previousData) => {
            return { ...previousData, store: value };
        })
    }

    let subRegion = [];

    if (filteredCountry && selectedRegion) {
        filteredCountry.forEach(country => {
            if (country["subregion"] && !subRegion.includes(country["subregion"])) {
                subRegion.push(country["subregion"]);
            }
        });
    }

    return (
        <div className='flex flex-col p-6 pt-0 md:flex-row md:justify-between items-center shadow-lg'>

            <div className={` ${darkMode ? darkElement : lightElement} shadow p-2 items-center w-[80%] md:w-[32%] rounded-lg`}>
                <select
                    name="subRegion"
                    id="subRegion"
                    className='focus:outline-none cursor-pointer w-full font-bold text-sm md:text-md'
                    onChange={changeSubRegion}
                    value={selectSubRegion}
                >

                    <option hidden className={` ${darkMode ? darkElement : lightElement} font-medium text-sm md:text-md`}>Select Sub-Region</option>
                    {
                        selectedRegion == "Antarctic" ? <option disabled className={` ${darkMode ? darkElement : lightElement} font-medium text-sm md:text-md`}>No Sub-Region</option>
                            : subRegion.length == 0 ? <option disabled className={` ${darkMode ? darkElement : lightElement} font-medium text-sm md:text-md`}>Select Region</option>
                                : subRegion.map((subRegion) => {
                                    return <option key={subRegion} value={subRegion} className={` ${darkMode ? darkElement : lightElement} font-medium text-sm md:text-md`}>{subRegion}</option>
                                })

                    }
                </select>
            </div>

            <div className='flex justify-center gap-4 items-center my-2 w-[80%] md:w-[32%]'>
                {/* <h1 className='text-md'>Sort by: </h1> */}
                <select name="sort" id="sort" onChange={changeSort} className={`${darkMode ? darkElement : lightElement} w-full p-2 font-medium text-sm md:text-md rounded-lg focus:outline-none cursor-pointer`}>
                    <option hidden className={` ${darkMode ? darkElement : lightElement} font-medium text-sm md:text-md`} >Sort By</option>
                    <option value="population" className={` ${darkMode ? darkElement : lightElement} font-medium text-sm md:text-md`}>Population</option>
                    <option value="area" className={` ${darkMode ? darkElement : lightElement} font-medium text-sm md:text-md`}>Area</option>
                </select>
            </div>

            <div className='flex justify-end gap-4 items-center my-2 w-[80%] md:w-[32%]'>
                {/* <h1 className='text-md'>Store by: </h1> */}
                <select name="sort" id="sort" onChange={changeStore} className={`${darkMode ? darkElement : lightElement} w-full p-2 font-medium text-sm md:text-md rounded-lg focus:outline-none cursor-pointer`}>
                    <option hidden className={` ${darkMode ? darkElement : lightElement} font-medium text-sm md:text-md`} >Store By</option>
                    <option value="ascending" className={` ${darkMode ? darkElement : lightElement} font-medium text-sm md:text-md`}>Ascending</option>
                    <option value="descending" className={` ${darkMode ? darkElement : lightElement} font-medium text-sm md:text-md`}>Descending</option>
                </select>
            </div>

        </div>
    )
}
