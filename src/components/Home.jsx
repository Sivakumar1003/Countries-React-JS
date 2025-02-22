import React from 'react'
import RegionSelector from './RegionSelector'
import SubRegionSelector from './SubRegionSelector'
import FilterRegion from './FilterRegion'
import FilterSubRegion from './FilterSubRegion'

export default function Home({ toHome }) {

    const {
        countries,
        selectedRegion,
        selectSubRegion,
        searchCountry,
        filteredCountry,
        sortCountry,
        setSelectedRegion,
        setSearchCountry,
        setSelectSubRegion,
        setSortCountry,
        setFilteredCountry
    } = toHome

    return (
        <div>
            <div className='flex flex-col md:flex-row w-full  px-10 md:justify-between shadow-lg'>
                <RegionSelector
                    countries={countries}
                    setSelectedRegion={setSelectedRegion}
                    selectedRegion={selectedRegion}
                    searchCountry={searchCountry}
                    setSearchCountry={setSearchCountry}
                />
                <SubRegionSelector
                    filteredCountry={filteredCountry}
                    selectSubRegion={selectSubRegion}
                    setSelectSubRegion={setSelectSubRegion}
                    selectedRegion={selectedRegion}
                    setSortCountry={setSortCountry}
                />
            </div>
            <FilterRegion
                selectedRegion={selectedRegion}
                searchCountry={searchCountry}
                countries={countries}
                setFilteredCountry={setFilteredCountry}
            />
            <FilterSubRegion
                filteredCountry={filteredCountry}
                selectSubRegion={selectSubRegion}
                sortCountry={sortCountry}
            />
        </div>
    )
}
