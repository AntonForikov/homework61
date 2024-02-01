import './App.css';
import Country from "./components/Country/Country";
import {useCallback, useEffect, useState} from "react";
import axios from "axios";
import {CountryFromAPI, CountryType, Language, TargetCountry} from "./types";
import CountryItem from "./components/CountryItem/CountryItem";

function App() {
    const [countryList, setCountryList] = useState<CountryType[]>([]);
    const [targetCountry, setTargetCountry] = useState<TargetCountry>();
    const [targetCountryBorders, setTargetCountryBorders] = useState();
    const [click, setClick] = useState(false);

    const getCountries = useCallback(async () => {
        const {data: countriesApi} = await axios.get('https://restcountries.com/v2/all?fields=alpha3Code,name');
        const countries = countriesApi.map((country: CountryFromAPI, index: number) => {
            return {
                id: `country-${index}`,
                name: country.name,
                alpha3Code: country.alpha3Code
            };
        });
        console.log(countries);
        setCountryList(countries);
    }, []);

    useEffect(() => {
        void getCountries();
    }, [getCountries]);

    const onCountryClick = async (country: CountryType) => {
        const {data: response} = await axios.get(`https://restcountries.com/v2/alpha/${country.alpha3Code}`);
        // console.log(response);
        const langNames = response.languages.map((language: Language) => language.name);

        const result: TargetCountry = {
            name: response.name,
            capital: response.capital,
            population: response.population,
            borders: response.borders,
            languages: langNames,
            flag: response.flag
        };

        console.log(result);
        setTargetCountry(result);
    };

  return (
    <>
        {countryList.map((country) => {
            return <Country
                    key={country.id}
                    countryName={country.name}
                    onClick={() => onCountryClick(country)}
                    clicked={click}
                />;
        })}
        <CountryItem
            countryObj={targetCountry}
        />
    </>
  );
}

export default App;
