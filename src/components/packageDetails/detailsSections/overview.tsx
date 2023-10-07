import { Typography } from "@mui/material";
import { Fragment, useContext } from "react";
import { PackageDetailsContxt } from "src/context/packageDetailsContxt";
import {useSelector} from "react-redux";
import {RootState} from "@/store/mainReducer";

const Overview = () => {
    const { packageDetails } = useContext(PackageDetailsContxt)
    const {packageData} = useSelector((state: RootState) => state.package)

    return (
        <Fragment>
            <Typography className="title">Overview</Typography>
            <Typography className="text">
                {packageData.description}
            </Typography>
        </Fragment>
    );
}

export default Overview;