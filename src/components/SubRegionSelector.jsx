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
        <div className='flex flex-col justify-center p-4 pt-0 md:pt-4 md:flex-row lg:w-[60%] md:justify-around'>

            <div className={` ${darkMode ? darkElement : lightElement} shadow p-2 items-center w-full md:w-[32%] my-1 rounded-lg`}>
                <select
                    name="subRegion"
                    id="subRegion"
                    className={`${darkMode ? darkElement : lightElement} w-full font-medium text-sm md:text-md rounded-lg focus:outline-none cursor-pointer`}
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

            <div className={` ${darkMode ? darkElement : lightElement} shadow p-2 items-center w-full md:w-[32%] my-1 rounded-lg`}>
                <select name="sort" id="sort" onChange={changeSort} className={`${darkMode ? darkElement : lightElement} w-full font-medium text-sm md:text-md rounded-lg focus:outline-none cursor-pointer`}>
                    <option hidden className={` ${darkMode ? darkElement : lightElement} font-medium text-sm md:text-md`} >Sort By</option>
                    <option value="population" className={` ${darkMode ? darkElement : lightElement} font-medium text-sm md:text-md`}>Population</option>
                    <option value="area" className={` ${darkMode ? darkElement : lightElement} font-medium text-sm md:text-md`}>Area</option>
                </select>
            </div>

            <div className={` ${darkMode ? darkElement : lightElement} shadow p-2 items-center w-full md:w-[32%] my-1 rounded-lg`}>
                <select name="sort" id="sort" onChange={changeStore} className={`${darkMode ? darkElement : lightElement} w-full font-medium text-sm md:text-md rounded-lg focus:outline-none cursor-pointer`}>
                    <option hidden className={` ${darkMode ? darkElement : lightElement} font-medium text-sm md:text-md`} >Store By</option>
                    <option value="ascending" className={` ${darkMode ? darkElement : lightElement} font-medium text-sm md:text-md`}>Ascending</option>
                    <option value="descending" className={` ${darkMode ? darkElement : lightElement} font-medium text-sm md:text-md`}>Descending</option>
                </select>
            </div>

        </div>
    )
}
