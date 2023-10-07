import React from "react";
import {
    Accordion,
    AccordionDetails,
    AccordionSummary,
    Box,
    Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Image from "next/image";
import HotelImage from "src/assets/images/Reservations/Bitmap.png";
import StarIcon from "src/assets/images/Reservations/star-hotel-rating.svg";
import LocationIcon from "src/assets/images/Reservations/location.svg";

interface ICategoryHotels {
    hotels: any
}

interface IHotel {
    hotel: {
        place: any;
        condition: any;
        rating: any
    }
}

const Hotel = ({
    hotel: { place,
        condition,
        rating
    }
}: IHotel) => {
    return (
        <Box className="HotelsInfo">
            <Image src={HotelImage} alt="HotelImage" />
            <Box className="HotelsInfo__ratingsInfo">
                <Box>
                    <Image src={StarIcon} alt="StarIcon" />
                    <Image src={StarIcon} alt="StarIcon" />
                    <Image src={StarIcon} alt="StarIcon" />
                    <Image src={StarIcon} alt="StarIcon" />
                </Box>

                <Box className="locationInfo">
                    <Image src={LocationIcon} alt="LocationIcon" />
                    <Typography className="text">{place}</Typography>
                </Box>
                <Box className="ratings">
                    <Typography className="text">{rating}</Typography>
                    <Typography className="excellent">
                        {condition}
                    </Typography>
                </Box>
            </Box>
        </Box>
    );
}



const CategoryHotels = ({
    hotels
}: ICategoryHotels) => {

    return (
        <Accordion
            className="Category__container__Accordion"
        >
            <AccordionSummary expandIcon={<ExpandMoreIcon />} className="summary">
                <Typography className="text">See possible hotels</Typography>
            </AccordionSummary>
            <AccordionDetails className="AccordionDetails">
                {hotels?.map((hotel: any, index: number) => <Hotel key={index} hotel={hotel} />)}
            </AccordionDetails>
        </Accordion>
    );
}

export default CategoryHotels;