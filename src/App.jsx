import { createContext, useEffect, useState } from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import RegionSelector from "./components/RegionSelector";
import FilterRegion from "./components/FilterRegion";
import SubRegionSelector from "./components/SubRegionSelector";
import FilterSubRegion from "./components/FilterSubRegion";
import CountryDetail from "./components/CountryDetail";
import PageNotFound from "./components/PageNotFound";

export const themeContext = createContext();

function App() {

  const [darkMode, setDarkMode] = useState(true);
  const [countries, setCountries] = useState(null);
  const [selectedRegion, setSelectedRegion] = useState("");
  const [selectSubRegion, setSelectSubRegion] = useState("");
  const [searchCountry, setSearchCountry] = useState("");
  const [sortCountry, setSortCountry] = useState({});

  const [filteredCountry, setFilteredCountry] = useState();

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((response) => {
        return response.json();
      })
      .then(result => {
        setCountries(result);
      })
      .catch(error => {
        console.error("Data not found", error);
      })
  }, [])

  const theme = {
    darkMode,
    darkBackground: "bg-[hsl(207,26%,17%)] text-[hsl(0,0%,100%)] font-[Nunito_Sans] ",
    lightBackground: "bg-[hsl(0,0%,98%)] text-[hsl(200,15%,8%)] font-[Nunito_Sans] ",
    darkElement: "bg-[hsl(209,23%,22%)] text-[hsl(0,0%,100%)] font-[Nunito_Sans] ",
    lightElement: "bg-[hsl(0,0%,100%)] text-[hsl(200,15%,8%)] font-[Nunito_Sans] "
  }


  return (
    <BrowserRouter>
      <div className={`${darkMode ? theme.darkBackground : theme.lightBackground} min-h-screen h-full`}>
        <themeContext.Provider value={theme} >
          <Header setDarkMode={setDarkMode} />
          <Routes>
            <Route
              path="/"
              element={
                <>
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
                </>
              }
            />
            <Route path="/country/:id" element={<CountryDetail countries={countries} />}/>
            <Route path="*" element={ <PageNotFound />}/>
          </Routes>
        </themeContext.Provider>
      </div>
    </BrowserRouter>
  )
}

export default App
