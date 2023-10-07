import { Box } from "@mui/material";
import SearchForm from "../shared/searchForm";
import Image from "next/image";
import Background from 'src/assets/images/Banner1Bg.png'

const Banner = () => {

    return (
        <Box id='MainBanner'>
            <Image className="BannerImage" src={Background} alt="Background" />
            <SearchForm />
        </Box>
    );
}

export default Banner;