import { Box, Container, Typography } from "@mui/material";
import AboutPackage from "./aboutPackage";
import Gallery from "./gallery";


const PackageGallery = () => {

    return (
        <Box className="MainBanner">
            <Container className="MainBanner__Container">
                <AboutPackage />
                <Gallery />
            </Container>
        </Box>
    );
}
export default PackageGallery;