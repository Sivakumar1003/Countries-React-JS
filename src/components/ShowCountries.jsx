import { useContext } from "react";
import Card from "./Card";
import { themeContext } from "../App";

export default function ShowCountries({ selectedRegion, searchCountry, countries }) {

    const {darkMode, darkBackground, lightBackground } = useContext(themeContext);

    let showCountries;

    if(selectedRegion && searchCountry) {
        showCountries = countries.filter((country) => {
            return country["region"] === selectedRegion && ((country["name"]["common"].toLowerCase()).includes(searchCountry.trim().toLowerCase()));
        });
    } else if (selectedRegion) {
        showCountries = countries.filter((country) => {
            return country["region"] === selectedRegion
        });
    } else if(searchCountry) {
        showCountries = countries.filter((country) => {
            return (country["name"]["common"].toLowerCase()).includes(searchCountry.trim().toLowerCase())
        })
    } else {
        showCountries = countries
    }

    if(showCountries == null) {
        return <div className={`${darkMode? darkBackground: lightBackground} flex justify-center font-bold text-2xl m-8`}>Loading..</div>
    } else if(showCountries.length == 0){
        return <div className={`${darkMode? darkBackground: lightBackground} flex justify-center font-bold text-2xl m-8`}>NO DATA FOUND</div>
    }

    return (
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4 w-[90%] m-auto py-6 items-center">
            {
                showCountries &&
                showCountries.map(country => {
                    return <Card key={country["name"]["common"]} country={country}/>
                })
            }
        </div>
    )
}