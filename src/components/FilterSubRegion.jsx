import React, { useEffect } from 'react'
import ShowCountries from './ShowCountries'

export default function FilterSubRegion({ filteredCountry, selectSubRegion, sortCountry }) {

    let resultCountries = [];
    if (filteredCountry && selectSubRegion) {
        filteredCountry.forEach(country => {
            if (country["subregion"] && country["subregion"] == selectSubRegion) {
                resultCountries.push(country);
            }
        });
    } else {
        resultCountries = filteredCountry
    }

    if (sortCountry["sort"] && sortCountry["sort"] == "population") {
        resultCountries.sort((country1, country2) => {
            return country1["population"] - country2["population"]
        })
    } else if (sortCountry["sort"] && sortCountry["sort"] == "area") {
        resultCountries.sort((country1, country2) => {
            return country1["area"] - country2["area"]
        })
    }

    if (sortCountry["store"] && sortCountry["store"] == "descending") {
        resultCountries.reverse();
    }

    return (
        <div>
            <ShowCountries resultCountries={resultCountries} />
        </div>
    )
}