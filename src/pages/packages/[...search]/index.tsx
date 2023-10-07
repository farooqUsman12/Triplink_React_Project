import { Box } from "@mui/material";
import React from "react";
import Appbar from "src/components/appbar";
import Footer from "src/components/footer";
import Packages from "src/components/packages";
import SearchResultNavBar from "src/components/searchFilters";
import SortFilters from "src/components/sortFilters";
import {useSelector} from "react-redux";
import {RootState} from "@/store/mainReducer";
import SearchPackage from "src/components/shared/search";

export default function SearchFilters() {
    const { packages, loading } = useSelector((state: RootState) => state.search)

    return (
        <Box id="SearchResult">
            <Appbar />
            <SearchPackage />
            <SearchResultNavBar />
            <SortFilters />
            <Packages packages={packages}/>
            <Footer />
        </Box>
    );
}