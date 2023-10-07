import {DestiniaObject} from "@/store/destinia/destinia.types";

interface Duration {
    days: number,
    nights: number
}

export interface SearchTravelers {
    label: string;
    value: {
        roomId: number;
        adults: number;
        childrens: number;
    };
}

export interface PackageSearchParam {
    destinations?: { name: string } | string[],
    origins?: string[]
    duration?: {from_days: number, to_days: number}
    name?: string
}

export interface SearchParam {
    origins?: {label: string, value: DestiniaObject}
    destinations?: {label: string, value: IPackage | string }
    duration?: {label: string, value: string},
    travelers?: SearchTravelers[]
}

export interface AutoCompletePackageSearchResults {
    label: string;
    value: IPackage
}

export interface SearchState {
    searchParam: SearchParam,
    autoCompletePackageResults: IPackage[],
    packages: IPackage[],
    loading: boolean,
    load: boolean,
    message: string
}

export interface PackageState {
    packageData: IPackage,
    loading: boolean,
    message: string
}

interface Photos {
    src: string,
    main: boolean
}

interface Price {
    amount: number,
    currency: string
}

export interface IPackage {
    _id: string,
    name: string,
    description: string,
    duration: Duration,
    release: number,
    remarks: string,
    photos: Photos[],
    placeImage: string,
    price_model: string,
    price_from: { original: Price, discount: Price },
    includes: string[],
    excludes: string[],
    itinerary: any,
    customer_remarks: string
}
