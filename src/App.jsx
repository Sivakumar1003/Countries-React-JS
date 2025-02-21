import { createContext, useEffect, useState } from "react"
import Header from "./components/Header";
import RegionSelector from "./components/RegionSelector";
import ShowCountries from "./components/ShowCountries";

export const themeContext = createContext();

function App() {

  const [darkMode, setDarkMode] = useState(false);
  const [countries, setCountries] = useState(null);
  const [selectedRegion, setSelectedRegion] = useState("");
  const [searchCountry, setSearchCountry] = useState("");

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((response) => {
        return response.json();
      })
      .then(result => {
        setCountries(result);
      })
      .catch(error => {
        console.log( "Data not found", error);
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
    <div className={`${darkMode ? theme.darkBackground : theme.lightBackground} min-h-screen h-full`}>
      <themeContext.Provider value={theme} >
        <Header setDarkMode={setDarkMode} />
        <RegionSelector countries={countries} setSelectedRegion={setSelectedRegion} selectedRegion={selectedRegion} searchCountry={searchCountry} setSearchCountry={setSearchCountry}/>
        <ShowCountries selectedRegion={selectedRegion} searchCountry={searchCountry} countries={countries} />
      </themeContext.Provider>
    </div>
  )
}

export default App
