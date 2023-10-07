import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import {Stack, Typography} from "@mui/material";
import {useContext, useEffect, useState} from "react";
import {PackageDetailsContxt} from "src/context/packageDetailsContxt";
import {useSelector} from "react-redux";
import {RootState, useAppDispatch} from "@/store/mainReducer";
import {autoCompletePackage, setSearchDestinations} from "@/store/package/search.slice";
import {AutoCompletePackageSearchResults, IPackage} from "@/store/package/package.types";
import useWindowSize from "src/hooks/useWindowSize";
import Modal from '@mui/material/Modal';
import Image from "next/image";
import CrossIcon from "src/assets/images/crossIcon.png";

const LocationItem = ({
                          label,
                          value,
                      }: AutoCompletePackageSearchResults) => {
    return (
        <Box className="Location">
            <Typography className="Location__Label">{label}</Typography>
            <Typography>
                <span className="Location__Text">from</span>
                <span className="Location__Price">{value.price_from.original.amount}</span>
                <span className="Location__Currency">{value.price_from.original.currency}</span>
            </Typography>
        </Box>
    );
};

const TravelLocation = ({setIsError}: { setIsError: any | null }) => {
    const [showModule, setShowModule] = useState(false);
    const packageDetailsCtx = useContext(PackageDetailsContxt);
    const {autoCompletePackageResults, searchParam} = useSelector((state: RootState) => state.search)
    const dispatch = useAppDispatch()
    const heading = packageDetailsCtx?.packageDetails?.heading;
    const travelerValue = heading ? {label: heading, value: heading} : "";
    const [travelLocation, setTravelLocation] = useState<any>();
    const {width} = useWindowSize();
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    useEffect(() => {
        if (searchParam?.destinations?.label) {
            setTravelLocation(searchParam.destinations)
        }
        if (width > 640) {
            setOpen(false)
        }
    }, [width, searchParam]);


    return (
        <>
            <Box className="SearchForm__Container__TravelLocation" onClick={handleOpen}>
                <Autocomplete
                    value={travelLocation || travelerValue}
                    onChange={(event: any, newValue: string | null) => {
                        setTravelLocation(newValue)
                        dispatch(setSearchDestinations(newValue))
                    }}
                    onInputChange={(event, newInputValue) => {
                        if (!searchParam.origins?.value?.id) {
                            setIsError(true);
                            return
                        }

                        dispatch(setSearchDestinations({label: newInputValue, value: newInputValue}))
                        dispatch(autoCompletePackage({
                            destinations: {name: newInputValue},
                            origins: [searchParam.origins?.value?.id?.toString() || ""]
                        }))
                    }}
                    className="SearchForm__Container__TravelLocation__AutoComplete"
                    options={autoCompletePackageResults.map((result: IPackage) => ({
                        label: result.name,
                        value: result
                    }))}
                    PaperComponent={({children}) => (
                        <div className="TravelLocationDropdown">{children}</div>
                    )}
                    ListboxComponent={(props) => {
                        const {children} = props;
                        return (
                            <Box {...props}>
                                <Typography className="TravelLocationDropdown__Heading">
                                    TRAVEL PACKAGES
                                </Typography>
                                {children}
                            </Box>
                        );
                    }}
                    renderOption={(props: any, option: any) => {
                        const {label, value} = option || {};
                        return (
                            <Box {...props}>
                                <LocationItem label={label} value={value}/>
                            </Box>
                        );
                    }}
                    renderInput={(params) => (
                        <TextField
                            {...params}
                            variant="outlined"
                            placeholder="Where would you like to travel?"
                            inputProps={{
                                ...params.inputProps,
                                autoComplete: "new-password",
                            }}
                            autoComplete="off"
                        />
                    )}
                    freeSolo
                />
            </Box>
            {width < 640 &&
                <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                    className="modal-input"
                >
                    <Box className="box-container">
                        <Stack className="MobileFilterModelInputs__header">
                            <button className="div-close" onClick={handleClose}>
                                <Image
                                    className="MobileFilterModelInputs__header__CrossIcon"
                                    src={CrossIcon}
                                    alt="crossIcon"
                                />
                            </button>
                            <Typography className="MobileFilterModelInputs__header__text">
                                destination
                            </Typography>
                        </Stack>
                        <Autocomplete
                            value={travelLocation || travelerValue}
                            onChange={(event: any, newValue: string | null) => {
                                setTravelLocation(newValue)
                                dispatch(setSearchDestinations(newValue))
                                setOpen(false)
                            }}
                            onInputChange={(event, newInputValue) => {
                                if (!searchParam.origins?.value?.id) {
                                    setIsError(true);
                                    return
                                }

                                dispatch(setSearchDestinations({label: newInputValue, value: newInputValue}))
                                if (searchParam.origins?.value?.id) {
                                    dispatch(autoCompletePackage({
                                        destinations: {name: newInputValue},
                                        origins: [searchParam.origins?.value?.id?.toString() || ""]
                                    }))
                                }
                            }}
                            className="SearchForm__Container__TravelLocation__AutoComplete"
                            options={autoCompletePackageResults.map((result: IPackage) => ({
                                label: result.name,
                                value: result
                            }))}
                            PaperComponent={({children}) => (
                                <div className="TravelLocationDropdown">{children}</div>
                            )}
                            ListboxComponent={(props) => {
                                const {children} = props;
                                return (
                                    <Box {...props}>
                                        <Typography className="TravelLocationDropdown__Heading">
                                            TRAVEL PACKAGES
                                        </Typography>
                                        {children}
                                    </Box>
                                );
                            }}
                            renderOption={(props: any, option: any) => {
                                const {label, value} = option || {};
                                return (
                                    <Box {...props}>
                                        <LocationItem label={label} value={value}/>
                                    </Box>
                                );
                            }}
                            renderInput={(params) => (
                                <TextField
                                    {...params}
                                    variant="outlined"
                                    placeholder="Where would you like to travel?"
                                    inputProps={{
                                        ...params.inputProps,
                                        autoComplete: "new-password",
                                    }}
                                    autoComplete="off"
                                />
                            )}
                            freeSolo
                        />
                    </Box>
                </Modal>
            }

        </>

    );
};

export default TravelLocation;
