import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import axios from '../axios';
import {DestiniaObject, DestiniaState, SearchPayload} from "@/store/destinia/destinia.types";

export const destiniaSearch = createAsyncThunk<
    any,
    SearchPayload,
    { rejectValue: Error }
>(
    'destiniaSearch',
    async (search: SearchPayload, thunkApi) => {
        const { select, searchValue, type } = search;

        try {
            const response = await axios.get(
                `destinia_locations?select=${select}&search_value=${searchValue}`
            );

            return { type: type, data: response.data.items.map(
                    ([name, id, city, countryId, country]: [string, string, string, string, string]) => ({
                        id,
                        name,
                        type: city,
                        country,
                    })
                )};
        } catch (err: any) {
            if (!err.response) {
                return thunkApi.rejectWithValue(err);
            }
            return thunkApi.rejectWithValue(err.response);
        }
    }
);

export const destiniaSlice = createSlice({
    name: 'destinia',
    initialState: {
        origins: [],
        destinations: [],
        accommodations: [],
        type: 'origin',
        load: false,
    } as DestiniaState,
    reducers: {
        setType: (state: DestiniaState, action: PayloadAction<string>) => {
            state.type = action.payload;
        },
        setSearch: (state: DestiniaState, action: PayloadAction<{ type: string; data: DestiniaObject[] }>) => {
            const { type, data } = action.payload;
            //@ts-ignore
            const updatedState = Array.from(
                //@ts-ignore
                new Map([...data, ...state[type]].map(item => [parseInt(item.id.toString()), item])).values()
            );
            //@ts-ignore
            state[type] = updatedState;
        },
        resetDestiniaData: (state: DestiniaState) => {
            state.origins = [];
            state.destinations = [];
            state.accommodations = [];
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(destiniaSearch.pending, (state: DestiniaState) => {
                state.load = true;
            })
            .addCase(destiniaSearch.fulfilled, (state: DestiniaState, action) => {
                const { type, data } = action.payload;
                //@ts-ignore
                const updatedState = Array.from(
                    //@ts-ignore
                    new Map([...data, ...state[type]].map(item => [parseInt(item.id.toString()), item])).values()
                );
                //@ts-ignore
                state[type] = updatedState;
                state.load = false;
            })
            .addCase(destiniaSearch.rejected, (state: DestiniaState, action) => {
                console.log(action);
            });
    },
});

export const { setType, setSearch, resetDestiniaData } = destiniaSlice.actions;

export default destiniaSlice.reducer;