// YApi QuickType插件生成，具体参考文档:https://plugins.jetbrains.com/plugin/18847-yapi-quicktype/documentation

export interface Country {
    capital:      string[];
    flag:         string;
    independent:  boolean;
    landlocked:   boolean;
    postalCode:   PostalCode;
    flags:        Flags;
    capitalInfo:  CapitalInfo;
    ccn3:         string;
    coatOfArms:   CoatOfArms;
    demonyms:     Demonyms;
    fifa:         string;
    cioc:         string;
    car:          Car;
    translations: { [key: string]: Translation };
    altSpellings: string[];
    area:         number;
    languages:    Languages;
    maps:         Maps;
    subregion:    string;
    idd:          Idd;
    tld:          string[];
    unMember:     boolean;
    continents:   string[];
    population:   number;
    startOfWeek:  string;
    timezones:    string[];
    name:         Name;
    cca3:         string;
    region:       string;
    latlng:       number[];
    cca2:         string;
    status:       string;
    currencies:   Currencies;
}

export interface CapitalInfo {
    latlng: number[];
}

export interface Car {
    side:  string;
    signs: string[];
}

export interface CoatOfArms {
}

export interface Currencies {
    USD: Usd;
}

export interface Usd {
    symbol: string;
    name:   string;
}

export interface Demonyms {
    fra: Eng;
    eng: Eng;
}

export interface Eng {
    f: string;
    m: string;
}

export interface Flags {
    svg: string;
    png: string;
}

export interface Idd {
    suffixes: string[];
    root:     string;
}

export interface Languages {
    spa: string;
    eng: string;
}

export interface Maps {
    openStreetMaps: string;
    googleMaps:     string;
}

export interface Name {
    nativeName: NativeName;
    common:     string;
    official:   string;
}

export interface NativeName {
    spa: Translation;
    eng: Translation;
}

export interface Translation {
    common:   string;
    official: string;
}

export interface PostalCode {
    regex:  string;
    format: string;
}
