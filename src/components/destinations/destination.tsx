import Image from "next/image";
import {Typography , Card, CardMedia, CardContent } from "@mui/material";

export type DestinationType = {
    heading: string;
    description: string;
    packages: number,
    placeImage: HTMLImageElement | any,
}

interface IProps {
    destination: DestinationType
}

const Destination = ({ destination }: IProps) => {
    const { heading, description, placeImage, packages } = destination || {};
    return (
        <Card className="DestinationContainer__CardContainer__card">
            <CardMedia className="DestinationContainer__CardContainer__card__media">
                <Image  className="image" src={placeImage} alt="place 1" />
            </CardMedia>
            <CardContent className="DestinationContainer__CardContainer__card__content">
                <Typography className="heading">{heading}</Typography>
                <Typography className="text">{description}</Typography>
                <Typography className="packages">{`${packages} packages available`}</Typography>
            </CardContent>
        </Card>
    );
}
export default Destination;