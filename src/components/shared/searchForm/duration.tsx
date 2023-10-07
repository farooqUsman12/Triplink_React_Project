import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import {Typography} from "@mui/material";
import {useContext, useEffect, useState} from "react";
import {PackageDetailsContxt} from "src/context/packageDetailsContxt";
import {useDispatch, useSelector} from "react-redux";
import {setSearchDuration} from "@/store/package/search.slice";
import {RootState} from "@/store/mainReducer";

export const durations = [
    {
        label: "Up to 7 days",
        value: "1-7",
    },
    {
        label: "8 -14 days",
        value: "8-14",
    },
    {
        label: "More than 14 days",
        value: "15-1000",
    },
];


const Duration = () => {
    const packageDetailsCtx = useContext(PackageDetailsContxt);
    const [duration, setDuration] = useState<any>();
    const pkgDuration = packageDetailsCtx?.packageDetails?.duration;
    const pkgDurationValue = pkgDuration ? {label: pkgDuration, value: pkgDuration} : ''
    const {searchParam} = useSelector((state: RootState) => state.search);
    const dispatch = useDispatch()


    useEffect(() => {
        if (searchParam?.duration) {
            const findDuration = durations.find(duration => duration.value == searchParam.duration?.value)
            setDuration(findDuration)
        }
    }, [searchParam]);

    return (
        <Autocomplete
            value={duration || pkgDurationValue}
            onChange={(event: any, newValue: string | null) => {
                setDuration(newValue);
                dispatch(setSearchDuration(newValue))
            }}
            className="DurationContainer"
            options={durations}
            PaperComponent={({children}) => (
                <div className="DurationContainerDropdown">{children}</div>
            )}
            renderOption={(props: any, option: any) => {
                const {label} = option || {};
                return (
                    <Box {...props}>
                        <Typography>{label}</Typography>
                    </Box>
                );
            }}
            renderInput={(params) => (
                <TextField
                    {...params}
                    variant="outlined"
                    placeholder="How long?"
                    inputProps={{
                        ...params.inputProps,
                        readOnly: true,
                    }}
                />
            )}
        />
    );
};

export default Duration;
