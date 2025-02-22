import { useContext, useEffect } from "react";
import { themeContext } from "../App";

export default function FilterRegion({ selectedRegion, searchCountry, countries, setFilteredCountry }) {

    const {darkMode, darkBackground, lightBackground } = useContext(themeContext);

    let filterCountry;
    
    useEffect(() => {
        if(selectedRegion && searchCountry) {
            filterCountry = countries.filter((country) => {
                return country["region"] === selectedRegion && ((country["name"]["common"].toLowerCase()).includes(searchCountry.trim().toLowerCase()));
            });
        } else if (selectedRegion) {
            filterCountry = countries.filter((country) => {
                return country["region"] === selectedRegion
            });
        } else if(searchCountry) {
            filterCountry = countries.filter((country) => {
                return (country["name"]["common"].toLowerCase()).includes(searchCountry.trim().toLowerCase())
            })
        } else {
            filterCountry = countries
        }

        setFilteredCountry(filterCountry);
    }, [selectedRegion, searchCountry, countries])

    if(countries == null) {
        return <div className={`${darkMode? darkBackground: lightBackground} flex justify-center font-bold text-2xl m-8`}>Loading...</div>
    } else if(filterCountry && filterCountry.length == 0){
        return <div className={`${darkMode? darkBackground: lightBackground} flex justify-center font-bold text-2xl m-8`}>NO DATA FOUND</div>
    }

}