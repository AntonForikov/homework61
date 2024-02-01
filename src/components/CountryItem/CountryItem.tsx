import React from 'react';
import {TargetCountryObj} from "../../types";

const CountryItem: React.FC<TargetCountryObj> = ({countryObj}) => {
    console.log(countryObj);
    return (
        <>
            {countryObj ?
                <>
                    <div>
                        <div>
                            <h2>{countryObj.name}</h2>
                            <p>Capital: <span>{countryObj.capital}</span></p>
                            <p>Population: <span>{countryObj.population}</span></p>
                        </div>
                        <div>
                            <img src={countryObj.flag} alt={`${countryObj.name} flag`}/>
                        </div>
                    </div>

                    <div>
                        {countryObj.languages.length > 0
                            ? <>{countryObj.languages.map(language => <h3>{language.name}</h3>)}</>
                            : <h3>There is no language</h3>
                        }
                    </div>

                    <div>
                        {countryObj.borders.length > 0
                            ? <>{countryObj.borders.map(border => <h3>{border}</h3>)}</>
                            : <h3>There is no language</h3>
                        }
                    </div>
                </>
                : <h1>Please choose country</h1>}
        </>
    );
};

export default CountryItem;