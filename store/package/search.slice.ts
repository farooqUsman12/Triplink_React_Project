import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import axios from '../axios';
import {
    IPackage,
    PackageSearchParam,
    SearchParam,
    SearchState, SearchTravelers
} from "@/store/package/package.types";


export const autoCompletePackage = createAsyncThunk<
    any,
    PackageSearchParam,
    { rejectValue: Error }
>(
    'autoCompletePackage',
    async (value, thunkApi) => {
        try {
            const response = await axios.post(`/package/search`, value)

            return response.data
        } catch (err: any) {
            return thunkApi.rejectWithValue(err)
        }
    }
);

export const searchPackage = createAsyncThunk<
    any,
    PackageSearchParam,
    { rejectValue: Error }
>(
    'searchPackage',
    async (value, thunkApi) => {
        try {
            const response = await axios.post(`/package/search`, value)

            return response.data
        } catch (err: any) {
            return thunkApi.rejectWithValue(err)
        }
    }
);


export const searchSlice = createSlice({
    name: 'search',
    // @ts-ignore
    initialState: {
        searchParam: {
            origins: {},
            destinations: {},
            duration: '',
            travelers:[{
                label: "ROOM 1",
                value: {roomId: 1, adults: 2, childrens: 0}
            }]
        },
        autoCompletePackageResults: [],
        packages: [],
        loading: false,
        load: false,
        message: '',
    } as SearchState, // Use the defined SearchState type

    reducers: {
        setSearchDestinations: (state: SearchState, action: PayloadAction<any>) => {
            state.searchParam.destinations = action.payload
        },
        setSearchDuration: (state: SearchState, action: PayloadAction<any>) => {
            state.searchParam.duration = action.payload
        },
        setSearchTravelers: (state: SearchState, action: PayloadAction<any>) => {
            state.searchParam.travelers = action.payload
        },
        setSearchOrigin: (state: SearchState, action: PayloadAction<any>) => {
            state.searchParam.origins = action.payload
        },
        setSearchParam: (state: SearchState, action: PayloadAction<any>) => {
            state.searchParam = action.payload
        },
        resetSearchParam: (state: SearchState, action: PayloadAction<any>) => {
            // @ts-ignore
            state.searchParam = { origins: {}, destinations: {}, duration: '', travelers:[{
                    label: "ROOM 1",
                    value: {roomId: 1, adults: 2, childrens: 0}
            }] }
        },
    },

    extraReducers: (builder) => {
        builder
            .addCase(autoCompletePackage.pending, (state: SearchState) => {
                state.load = true;
            })
            .addCase(autoCompletePackage.fulfilled, (state: SearchState, action: PayloadAction<any>) => {
                state.autoCompletePackageResults = action.payload.items
                state.load = false;
            })
            .addCase(autoCompletePackage.rejected, (state: SearchState) => {
                state.load = false;
            })
            .addCase(searchPackage.pending, (state: SearchState) => {
                state.loading = true;
            })
            .addCase(searchPackage.fulfilled, (state: SearchState, action: PayloadAction<any>) => {
                state.packages = action.payload.items?.map((item: IPackage) => {
                    return {
                        ...item,
                        placeImage: item.photos.find(image => image.main)?.src
                    }
                });
                state.loading = false;
            })
            .addCase(searchPackage.rejected, (state: SearchState) => {
                state.loading = false;
            });
    },
});

export const { resetSearchParam, setSearchParam, setSearchDestinations, setSearchDuration, setSearchTravelers, setSearchOrigin  } = searchSlice.actions;

const originsToSegment = (origins: any) => {
    const { value } = origins;
    return `from-${value.id}-${encodeURIComponent(value.name)}`;
};

const destinationsToSegment = (destinations: any) => {
    const { value } = destinations;
    return `to-${value._id ? 'id-'+encodeURIComponent(value._id) : 'destination-'+encodeURIComponent(value)}`;
};

const durationToSegment = (duration: any) => {
    const { value } = duration;
    return `Duration-${encodeURIComponent(value)}`;
};

const travelersToSegment = (travelers: any) => {
    return 'rooms-' + travelers.map((traveler: any) => {
        const { label, value } = traveler;
        const { roomId, adults, childrens } = value;
        return `${adults}ADT-${childrens}CHI`;
    }).join('|');
};

export function changeSearchParamToUrl(searchParam: SearchParam): string
{
    const { origins, destinations, duration, travelers } = searchParam;
    const urlSegments = [
        originsToSegment(origins),
        destinations?.value ? destinationsToSegment(destinations): '',
        duration? durationToSegment(duration): '',
        travelers ? travelersToSegment(travelers) : ''
    ];

    return urlSegments.filter(segment => segment != '').join('/')
}

export function changeSearchUrlToSearchParam(searchUrlParam: string | string[]): any {
    const segments = searchUrlParam;
    // @ts-ignore
    const searchParam = {
        origins: { label: '', value: { id: '', name: '' } },
        destinations: { label: '', value: { _id: '', name: '' } },
        duration: { label: '', value: '' },
        travelers: []
    };

    for (const segment of segments) {
        const [key, ...values] = segment.split('-');
        const value = values.join('-');

        switch (key) {
            case 'from':
                const [id, name] = value.split('-');
                searchParam.origins = { label: name, value: { id, name } };
                break;
            case 'to':
                if (value.startsWith('id-')) {
                    const _id = value.substring(3);
                    searchParam.destinations = { label: '', value: { _id, name: '' } };
                } else {
                    const [label, name] = value.split('-')
                    searchParam.destinations = { label: value, value: { _id: '', name: name } };
                }
                break;
            case 'Duration':
                searchParam.duration = { label: '', value };
                break;
            default:
                // @ts-ignore
                searchParam.travelers = value.split("|")
                    .map((segment, index) => {
                    const [adult, children] = segment.split("-");
                    const adults = adult.match(/\d+/g) || ["0"]; // Provide a default value "0" if null
                    const childrens = children.match(/\d+/g) || ["0"]

                    // @ts-ignore
                    return {
                        label: `ROOM ${index+1}`,
                        value: {
                            roomId: index+1 || 0,
                            adults: parseInt(adults[0]) || 0,
                            childrens: parseInt(childrens[0]) || 0,
                        },
                    }
                }) as SearchTravelers[]
                break;
        }
    }

    return searchParam;
}

export function changeSearchParamToPackageSearchParam(searchParam: SearchParam): PackageSearchParam
{
    const { origins, destinations, duration, travelers } = searchParam;

    return  {
        origins: origins?.value ? [origins.value.id.toString()] : [],
        // @ts-ignore
        destinations: destinations?.value?._id ? destinations.value.destinations.map(destination => destination.id): { name: destinations?.value || '' } ,
        duration: duration?.value ? {
            from_days: parseInt(duration.value.split('-')[0]),
            to_days: parseInt(duration.value.split('-')[1]),
        } : undefined,
        name: '', // You can set this property based on your needs
    };
}

export default searchSlice.reducer;