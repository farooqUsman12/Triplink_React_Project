import {createAsyncThunk, createSlice, PayloadAction} from '@reduxjs/toolkit';
import axios from '../axios'
import {IPackage, PackageState} from "@/store/package/package.types";


const findPackageDataById = async (packageId: string, thunkApi: any) => {
    const state = thunkApi.getState()
    const packages = state.search.packages
    const packageData = state.package.packageData
    if (packageData?._id == packageId) {
        return packageData
    }

    return packages.find((pkg: IPackage) => pkg._id === packageId)
}

export const getPackageById = createAsyncThunk<
    any,
    string,
    { rejectValue: Error }
>(
    'getPackageById',
    async (value, thunkApi) => {
        try {
            const matchingPackageData = await findPackageDataById(
                value,
                thunkApi
            )

            if (matchingPackageData?._id == value) {
                return matchingPackageData
            }

            const response = await axios.get(`/package/${value}`)
            return response.data
        } catch (err: any) {
            return thunkApi.rejectWithValue(err)
        }
    }
);

export const packageSlice = createSlice({
    name: 'package',
    initialState: {
        packageData: {},
        loading: false,
        message: '',
    } as PackageState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getPackageById.pending, (state: PackageState) => {
                state.loading = true;
            })
            .addCase(getPackageById.fulfilled, (state: PackageState, action: PayloadAction<any>) => {
                state.packageData = action.payload
                state.loading = false;
            })
            .addCase(getPackageById.rejected, (state: PackageState) => {
                state.loading = false;
            })
    },
});

export default packageSlice.reducer;