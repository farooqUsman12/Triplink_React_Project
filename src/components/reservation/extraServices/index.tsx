import { Box, Typography } from "@mui/material";
import Service from "./service";

const SERVICES = [
    {
        title: "Additional service per booking",
        price: "0",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipis elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniq.",
    },
    {
        title: "Additional service per booking",
        price: "0",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipis elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniq.",
    },
    {
        title: "Additional service per booking",
        price: "0",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipis elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniq.",
    },
    {
        title: "Additional service per booking",
        price: "0",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipis elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniq.",
    },
];

const ExtraServices = () => {
    return (<Box className="AddToCart">
        <Typography className="AddToCart__text">
            Add some extras to your travel package to make your trip even more
            unforgettable.
        </Typography>

        {SERVICES.map((service: any, index: number) => (
            <Service key={index} service={service} />
        ))}
    </Box>
    );
}

export default ExtraServices;