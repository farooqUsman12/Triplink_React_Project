import {Box} from "@mui/material";
import Appbar from "src/components/appbar";
import PackageGallery from "./packageGallery";
import DetailSections from "./detailsSections";
import Footer from "../footer";
import useWindowSize from "src/hooks/useWindowSize";
import BookNowMobileBottom from "./detailsSections/bookNow/bookNowMobileBottom";
import useScroll from "src/hooks/useScroll";
import React from "react";
import SearchPackage from "src/components/shared/search";
import {useSelector} from "react-redux";
import {RootState} from "@/store/mainReducer";


const PackageDetails = () => {
    const scrollEvent = useScroll();
    const {width} = useWindowSize();
    const {packageData} = useSelector((state: RootState) => state.package)

    return (
        <Box id="PackageDetails">
            <Box>
                <Appbar/>
                {!!packageData._id &&
                    <>
                        <SearchPackage/>
                        <PackageGallery/>
                        <DetailSections/>
                    </>
                }
                <Footer/>
                {width < 640 && scrollEvent > 920 ? <BookNowMobileBottom/> : <></>}
            </Box>
        </Box>
    );
};

export default PackageDetails;


export const ORIGINS = ["Madrid", "Barcelona", "Valencia", "Sevilla"];
