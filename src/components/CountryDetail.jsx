import React, { useContext } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { themeContext } from '../App'

export default function CountryDetail({ countries }) {

  const { id } = useParams()
  const navigate = useNavigate();

  const { darkMode, darkBackground, lightBackground, darkElement, lightElement } = useContext(themeContext);

  let country;
  if (!countries) {
    return <div className={`${darkMode ? darkBackground : lightBackground} flex justify-center font-bold text-2xl m-8`}>Loading...</div>
  } else {
    country = countries.find((country) => {
      let cca3 = id
      return country["cca3"] == cca3.toUpperCase();
    })
    console.log(country);
  }

  let nativeName, population, region, subRegion, capital, domain, Currencies, Languages, borders;
  if (country) {
    population = country["population"];
    region = country["region"] ? country["region"] : "No region";
    subRegion = country["subregion"] ? country["subregion"] : "No subRegion";
    capital = country["capital"] ? country["capital"].join(", ") :  "No capital";
    domain = country["tld"] ? country["tld"].join(", ") : "No domain";
    Currencies = country["currencies"] ? Object.values(country["currencies"]).map((nameAndSymbol) => {
      return nameAndSymbol["name"];
    }).join(", ") : "N/A";
    Languages = country["languages"] ? Object.values(country["languages"]).join(", ") : "No Languages";
    borders = country["borders"];

    if (country["name"]["nativeName"]) {
      let name = Object.values(country["name"]["nativeName"]);
      nativeName = country["name"]["nativeName"]["eng"] ? country["name"]["nativeName"]["eng"]["common"] : name[name.length - 1]["common"];
    }
  }

  return (
    <div>
      {
        !country ? <div className={`${darkMode ? darkBackground : lightBackground} flex justify-center font-bold text-2xl m-8`}>Country Not Found</div>
          :
          <div className='flex flex-col items-center'>

            <div className={`m-8 w-[90%] lg:w-[100%] lg:px-15`}>
              <button onClick={() => navigate(-1)} className={`${darkMode ? darkElement : lightElement} px-4 pr-6 flex items-center`}>
                <span className='font-black  text-4xl pb-3'>&larr; </span>
                <span className="">Back</span>
              </button>
            </div>

            <div className='flex flex-col md:flex-row  justify-between md:items-center md:px-10 w-full'>

              <div className='h-fit md:w-[50%] lg:w-[40%] p-5'>
                <img src={`${country["flags"]["svg"]}`} alt="Country image" className='h-fit max-h-[300px] m-auto md:max-h-[300px]' />
              </div>

              <div className={`md:w-[47%] lg:w-[58%] p-5`}>

                <p className='font-black text-xl md:text-2xl lg:text-4xl py-2 md:py-3'>{country["name"]["common"]}</p>

                <section className='flex flex-col md:flex-row gap-5 lg:gap-10 py-3'>
                  <section >
                    <div>
                      <span className='font-bold text-sm lg:text-base'>Native Name: </span>
                      <span className='font-normal text-sm lg:text-base'>{nativeName || "No NativeName"}</span>
                    </div>

                    <div>
                      <span className='font-bold text-sm lg:text-base'>Population: </span>
                      <span className='font-normal text-sm lg:text-base'>{population || "0"}</span>
                    </div>

                    <div>
                      <span className='font-bold text-sm'>Region: </span>
                      <span className='font-normal text-sm'>{region}</span>
                    </div>

                    <div>
                      <span className='font-bold text-sm lg:text-base'>Sub Region: </span>
                      <span className='font-normal text-sm lg:text-base'>{subRegion}</span>
                    </div>

                    <div>
                      <span className='font-bold text-sm lg:text-base'>Capital: </span>
                      <span className='font-normal text-sm lg:text-base'>{capital}</span>
                    </div>
                  </section>

                  <section>
                    <div>
                      <span className='font-bold text-sm lg:text-base'>Top Level Domain:</span>
                      <span className='font-normal text-sm lg:text-base'>{domain}</span>
                    </div>

                    <div>
                      <span className='font-bold text-sm lg:text-base'>Currencies: </span>
                      <span className='font-normal text-sm lg:text-base'>{Currencies}</span>
                    </div>

                    <div>
                      <span className='font-bold text-sm lg:text-base'>Languages: </span>
                      <span className='font-normal text-sm lg:text-base'>{Languages}</span>
                    </div>
                  </section>
                </section>

                <section>
                  <p className='font-bold text-base lg:text-xl my-2'>Border Countries:</p>
                  <p className='py-2 flex flex-wrap'>
                    {
                      !borders ? <p className='font-medium opacity-60'>No Borders</p>
                        : borders.map(border => {
                          return <Link
                            key={border}
                            to={`/country/${border}`}
                            className={`${darkMode ? darkElement : lightElement} m-1 p-1 px-2 rounded`}
                          >
                            {border}
                          </Link>
                        })
                    }
                  </p>
                </section>

              </div>
            </div>
          </div>
      }
    </div>
  )
}