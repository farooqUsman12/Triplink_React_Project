import React, {useEffect, useState} from "react";
import Autocomplete from "@mui/material/Autocomplete";
import {Box, Modal, Stack, TextField, Typography} from "@mui/material";
import {useDispatch, useSelector} from "react-redux";
import {RootState, useAppDispatch} from "@/store/mainReducer";
import {destiniaSearch} from "@/store/destinia/destinia.slice";
import {setSearchOrigin} from "@/store/package/search.slice";
import useWindowSize from "src/hooks/useWindowSize";
import Image from "next/image";
import CrossIcon from "src/assets/images/crossIcon.png";

interface OriginProps {
    selectType: string,
    isError: any
}

const Origin = ({selectType, isError}: OriginProps) => {
    const {origins} = useSelector((state: RootState) => state.destinia);
    const {searchParam} = useSelector((state: RootState) => state.search);
    const originValue = "";
    const [origin, setOrigin] = useState<any>();
    const dispatch = useAppDispatch();
    const {width} = useWindowSize();
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    useEffect(() => {
        if (searchParam?.origins?.label) {
            setOrigin(searchParam?.origins)
        }
        if (width > 640){
            setOpen(false)
        } 

    }, [width,searchParam]);


    const handleSearch = (value: string) => {
        dispatch(destiniaSearch({select: ['CITY'], searchValue: value, type: 'origins'}));
    }

    return (
        <>
            <Box className="SearchForm__Container__TravelLocation origin" onClick={handleOpen}>
                <Autocomplete
                    multiple={selectType === 'multiple'}
                    value={origin || originValue}
                    id="origins"
                    options={origins.map((origin) => ({
                        label: origin.name,
                        value: origin
                    }))}
                    className="SearchForm__Container__TravelLocation__AutoComplete"
                    renderOption={(props: any, option: any) => {
                        const {value} = option || {};
                        return (
                            <Box {...props}>
                                <Box className="Location">
                                    <Typography className="Location__Label">{value.name}</Typography>
                                </Box>
                            </Box>
                        );
                    }}
                    onChange={(_, newValue) => {
                        dispatch(setSearchOrigin(newValue));
                        setOrigin(newValue);
                    }}
                    PaperComponent={({children}) => (
                        <div className="TravelLocationDropdown">{children}</div>
                    )}
                    onInputChange={(_, newInputValue) => {
                        handleSearch(newInputValue)
                    }}
                    renderInput={(params) => (
                        <TextField
                            {...params}
                            variant="outlined"
                            placeholder={isError ? 'Please Choice City' : "What's your City?"}
                            inputProps={{
                                ...params.inputProps,
                                autoComplete: "off",
                            }}
                            error={isError}
                            autoComplete="off"
                        />
                    )}
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
                                    origin
                            </Typography>
                        </Stack>
                        <Autocomplete
                            multiple={selectType === 'multiple'}
                            value={origin || originValue}
                            id="origins"
                            options={origins.map((origin) => ({
                                label: origin.name,
                                value: origin
                            }))}
                            className="SearchForm__Container__TravelLocation__AutoComplete"
                            renderOption={(props: any, option: any) => {
                                const {value} = option || {};
                                return (
                                    <Box {...props}>
                                        <Box className="Location">
                                            <Typography className="Location__Label">{value.name}</Typography>
                                        </Box>
                                    </Box>
                                );
                            }}
                            onChange={(_, newValue) => {
                                dispatch(setSearchOrigin(newValue));
                                setOrigin(newValue);
                                setOpen(false)
                            }}
                            PaperComponent={({children}) => (
                                <div className="TravelLocationDropdown">{children}</div>
                            )}
                            onInputChange={(_, newInputValue) => {
                                handleSearch(newInputValue)
                            }}
                            renderInput={(params) => (
                                <TextField
                                    {...params}
                                    variant="outlined"
                                    placeholder={isError ? 'Please Choice City' : "What's your City?"}
                                    inputProps={{
                                        ...params.inputProps,
                                        autoComplete: "off",
                                    }}
                                    error={isError}
                                    autoComplete="off"
                                />
                            )}
                        />
                    </Box>
                </Modal>
            }
        </>
    );
};

export default Origin;
