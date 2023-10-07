import {combineReducers, Reducer} from 'redux';
import searchSlice from '@/store/package/search.slice';
import {PackageState, SearchState} from "@/store/package/package.types";
import {DestiniaState} from "@/store/destinia/destinia.types";
import destiniaSlice from "@/store/destinia/destinia.slice";
import PackageSlice from "@/store/package/package.slice";
import thunk from "redux-thunk";
import {configureStore} from "@reduxjs/toolkit";
import {useDispatch} from "react-redux";

interface InitState {
    search: SearchState,
    destinia: DestiniaState,
    package: PackageState
}

const rootReducer: Reducer<InitState> = combineReducers({
    search: searchSlice,
    destinia: destiniaSlice,
    package: PackageSlice
});

export default rootReducer;

export const store = configureStore(
    {
        reducer: rootReducer,
        middleware: (getDefaultMiddleware) => getDefaultMiddleware().prepend(thunk),
    }
)


export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch
export const useAppDispatch: () => AppDispatch = useDispatch

