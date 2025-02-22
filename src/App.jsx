import { createContext, useEffect, useState } from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToastContainer, toast, Bounce } from "react-toastify";

import Header from "./components/Header";
import CountryDetail from "./components/CountryDetail";
import PageNotFound from "./components/PageNotFound";
import Home from "./components/Home";

export const themeContext = createContext();

function App() {

  const [darkMode, setDarkMode] = useState(false);
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
        notify(error);
      })
  }, []);

  function notify() {
    toast.error('Data not found', {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Bounce,
      });
  }

  const theme = {
    darkMode,
    darkBackground: "bg-[hsl(207,26%,17%)] text-[hsl(0,0%,100%)] font-[Nunito_Sans] ",
    lightBackground: "bg-[hsl(0,0%,98%)] text-[hsl(200,15%,8%)] font-[Nunito_Sans] ",
    darkElement: "bg-[hsl(209,23%,22%)] text-[hsl(0,0%,100%)] font-[Nunito_Sans] ",
    lightElement: "bg-[hsl(0,0%,100%)] text-[hsl(200,15%,8%)] font-[Nunito_Sans] "
  }

  const toHome = {
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
  }

  return (
    <BrowserRouter>
      <div className={`${darkMode ? theme.darkBackground : theme.lightBackground} min-h-screen h-full`}>
        <themeContext.Provider value={theme} >
          <Header setDarkMode={setDarkMode} />
          <Routes>
            <Route path="/" element={<Home toHome={toHome} />} />
            <Route path="/country/:id" element={<CountryDetail countries={countries} />}/>
            <Route path="*" element={ <PageNotFound />}/>
          </Routes>
        </themeContext.Provider>
        <ToastContainer />
      </div>
    </BrowserRouter>
  )
}

export default App
