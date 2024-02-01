import React from 'react';
import Country from "../../components/Country/Country";
import {CountryType} from "../../types";

interface Props {
    countryList: CountryType[],
    onClick: (country: CountryType) => void
    selectedCountryId: string | undefined
}

const CountryListContainer: React.FC<Props> = ({countryList,onClick, selectedCountryId}) => {
    const styles: React.CSSProperties = {
        border: '2px solid #FF8C00',
        width: 600,
        height: '93vh',
        overflowX: 'hidden',
        overflowY: 'auto',
        textAlign: 'center',
        padding: 20,
    };
    return (
        <div style={styles}>
            {countryList.map((country) => {
                return <Country
                    key={country.id}
                    countryName={country.name}
                    onClick={() => onClick(country)}
                    isSelected={selectedCountryId === country.id}
                />;
            })}
        </div>
    );
};

export default CountryListContainer;