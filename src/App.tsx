import {useCallback, useEffect, useState} from "react";
import axios from "axios";
import {CountryFromAPI, CountryType, Language, TargetCountry} from "./types";
import CountryItem from "./components/CountryItem/CountryItem";
import CountryListContainer from "./containers/CountryListContainer/CountryListContainer";
import Loader from "./components/Loader/Loader";

function App() {
    const [countryList, setCountryList] = useState<CountryType[]>([]);
    const [targetCountry, setTargetCountry] = useState<TargetCountry>();
    const [loader, setLoader] = useState(true);

    const getCountries = useCallback(async () => {
        try {
            const {data: countriesApi} = await axios.get('https://restcountries.com/v2/all?fields=alpha3Code,name');
            const countries = countriesApi.map((country: CountryFromAPI, index: number) => {
                return {
                    id: `country-${index}`,
                    name: country.name,
                    alpha3Code: country.alpha3Code
                };
            });
            setCountryList(countries);
            setLoader(false);
        } catch {
            alert("Please check requested url!");
        }
    }, []);

    useEffect(() => {
        void getCountries();
    }, [getCountries]);

    const onCountryClick = async (country: CountryType) => {
        try {
            const {data: response} = await axios.get(`https://restcountries.com/v2/alpha/${country.alpha3Code}`);
            const langNames = response.languages.map((language: Language) => language.name);

            const result: TargetCountry = {
                id: country.id,
                name: response.name,
                capital: response.capital,
                population: response.population,
                languages: langNames,
                borders: [],
                flag: response.flag
            };

            if (response.borders) {
                const responseBorders = response.borders.map(async (border: string) => await axios.get(`https://restcountries.com/v2/alpha/${border}`)) ;
                const bordersList = await Promise.all(responseBorders);
                result.borders = bordersList.map((border) => border.data.name);
            }

            setTargetCountry(result);
        } catch {
            alert("Please check requested url!");
        }
    };

  return (
      <>
          {!loader ?
              <div style={{display: 'flex', alignItems: "center"}}>
                  <CountryListContainer
                      countryList={countryList}
                      onClick={onCountryClick}
                      selectedCountryId={targetCountry?.id}
                  />
                  <CountryItem
                      countryObj={targetCountry}
                  />
              </div> :
              <Loader />
          }
      </>

  );
}

export default App;
