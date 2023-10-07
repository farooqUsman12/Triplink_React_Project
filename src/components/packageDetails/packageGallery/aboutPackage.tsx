import { Box, Typography } from "@mui/material";
import { useContext } from "react";
import { PackageDetailsContxt } from "src/context/packageDetailsContxt";
import {useSelector} from "react-redux";
import {RootState} from "@/store/mainReducer";

const AboutPackage = () => {
    const { packageDetails } = useContext(PackageDetailsContxt);
    const { packageData } = useSelector((state: RootState) => state.package)

    return (

        <Box className="MainBanner__Container__header">
            <Typography className="title">{packageData.name || ''}</Typography>

            <Box className="infoContainer">
                <Box className="MainBanner__Container__header__info">
                    <Typography className="circutText">{packageData.price_model || ''}</Typography>
                    <Typography className="days">{packageData.duration?.days || 0}</Typography>
                    <Typography className="CancellationText">
                        Free cancellation
                    </Typography>
                </Box>
                <Box className="MainBanner__Container__header__price">
                    <Typography className="fromText">from</Typography>
                    <Typography className="number">{packageData.price_from?.original?.amount || 0}</Typography>
                    <Typography className="currency">{packageData.price_from?.original?.currency || 'EUR'}</Typography>
                </Box>
            </Box>
        </Box>

    );
}

export default AboutPackage;