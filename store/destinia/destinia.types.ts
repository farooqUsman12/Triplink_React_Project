export interface DestiniaObject {
    id: number;
    name: string;
    type: string;
    country: string;
}

export interface DestiniaState {
    origins: DestiniaObject[];
    destinations: DestiniaObject[];
    accommodations: DestiniaObject[];
    type: string;
    load: boolean;
}

export interface SearchPayload {
    select: string[];
    searchValue: string;
    type: string;
}