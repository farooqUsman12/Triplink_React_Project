import {Box, Button, Typography} from "@mui/material";
import Link from "next/link";
import React from "react";

const MobileSreachButton = (props: any) => {
    const {handleSearch} = props
    return (
        <Link onClick={(e) => handleSearch(e)} href={'#'}>
            <Box className="SearchForm__Container__MobileSearchBtn">
                <Button className="searchBtn">
                    <Typography className="text">Search</Typography>
                </Button>
            </Box>
        </Link>
    );
};
export default MobileSreachButton;
