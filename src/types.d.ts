export interface CountryFromAPI {
    name: string,
    alpha3Code: string,
    independent: boolean
}

export interface CountryType {
    id: string
    name: string,
    alpha3Code: string,
}

export interface Language {
    name: string
}

export interface TargetCountry {
    id: string
    name: string,
    capital: string,
    population: number,
    borders: string[],
    languages: string[]
    flag: string
}

export interface TargetCountryObj {
    countryObj?: TargetCountry
}