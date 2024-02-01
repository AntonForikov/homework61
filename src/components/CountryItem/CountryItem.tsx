import React from 'react';
import {TargetCountryObj} from "../../types";

const CountryItem: React.FC<TargetCountryObj> = ({countryObj}) => {
    const mainStyles: React.CSSProperties = {
        border: '2px solid #FF8C00',
        width: "100%",
        height: '93vh',
        overflowX: 'hidden',
        overflowY: 'auto',
        padding: 20,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between"
    };
    return (
        <>
            {countryObj ?
                <div style={mainStyles}>
                    <div style={{display: "flex", justifyContent: "space-between"}}>
                        <div>
                            <h1 style={{marginTop: 0}}>{countryObj.name}</h1>
                            <p>Capital: <span style={{fontWeight: "bold"}}>{countryObj.capital}</span></p>
                            <p>Population: <span style={{fontWeight: "bold"}}>{countryObj.population}</span></p>
                        </div>
                        <div>
                            <img src={countryObj.flag} alt={`${countryObj.name} flag`} width={300} style={{border: '2px solid #FF8C00', padding: 10}} />
                        </div>
                    </div>

                    <div>
                        <h2>Languages:</h2>
                        {countryObj.languages?.length > 0
                            ? <ul style={{padding: 15}}>{countryObj.languages.map(language => <li key={Math.random()}><h3>{language}</h3>
                            </li>)}</ul>
                            : <h3>There is no language</h3>
                        }
                    </div>

                    <div>
                        <h2>Borders with:</h2>
                        {countryObj.borders?.length > 0
                            ? <ul style={{padding: 15}}>{countryObj.borders.map(border => <li key={Math.random()}><h3>{border}</h3>
                            </li>)}</ul>
                            : <h3>There is no Borders</h3>
                        }
                    </div>
                </div>
                : <h1 style={{paddingLeft: 20, margin: "auto"}}>Please choose country</h1>}
        </>
    );
};

export default CountryItem;