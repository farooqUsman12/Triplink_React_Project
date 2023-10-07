import PackagesLodingLG from "src/components/placeholderLoding/packagesLoding/packagesLodingLG";
import PackagesLodingSM from "src/components/placeholderLoding/packagesLoding/packagesLodingSM";
import useWindowSize from "src/hooks/useWindowSize";
import {Card} from "@mui/material";

const PackageLoading = () => {
    const {width} = useWindowSize();

    return (
        <>
            <Card className="Container__CardContainer__Card">
                {width > 640 ? <PackagesLodingLG/> : <PackagesLodingSM/>}
            </Card>
            <Card className="Container__CardContainer__Card">
                {width > 640 ? <PackagesLodingLG/> : <PackagesLodingSM/>}
            </Card>
        </>
    )
}

export default PackageLoading