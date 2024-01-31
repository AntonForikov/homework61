// import { useState } from 'react'
import './App.css';
import Country from "./components/Country/Country";
import {useCallback, useEffect, useState} from "react";
import axios from "axios";
import {CountryFromAPI, CountryType} from "./types";

function App() {
    const [countries, setCountries] = useState<CountryType[]>([]);
    // const [click, setClick] = useState(false);

    const getCountries = useCallback(async () => {
        const {data: countriesApi} = await axios.get('https://restcountries.com/v2/all?fields=alpha3Code,name');
        const countries = countriesApi.map((country: CountryFromAPI, index: number) => {
            return {
                id: `country-${index}`,
                clicked: false,
                ...country,
            };
        });
        console.log(countries);
        setCountries(countries);
    }, []);

    useEffect(() => {
        void getCountries();
    }, [getCountries]);

    const clickedOnCountry = (idx: number) => {
        // setCountries(prevState => {
        //     prevState[idx].clicked = true;
        //     return prevState;
        // });
    };

  return (
    <>
        {countries.map((country, index) => {
            return <Country
                    key={country.id}
                    countryName={country.name}
                    onClick={() => clickedOnCountry(index)}
                    clicked={country.clicked}
                />;
        })}
    </>
  );
}

export default App;
