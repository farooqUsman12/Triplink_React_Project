import { Box, Container, Typography } from "@mui/material";
import Place1 from 'src/assets/images/places/p1.jpg';
import Place2 from 'src/assets/images/places/p2.jpg';
import Place3 from 'src/assets/images/places/p3.jpg';
import Place4 from 'src/assets/images/places/p4.jpg';
import Destination, { DestinationType } from "./destination";

const DESTINATIONS: DestinationType[] = [
    {
        heading: 'Havana',
        description: 'Historical and cultural site. Great gastronomy. Nice weather.',
        packages: 10,
        placeImage: Place1
    },
    {
        heading: 'New York',
        description: 'Endless skyscrapers. Walks through Central Park. ',
        packages: 12,
        placeImage: Place2
    },
    {
        heading: 'Stockholm',
        description: 'Plenty of islands to visit. Viking culture. Breathtaking sunsets.',
        packages: 6,
        placeImage: Place3
    },
    {
        heading: 'Egypt',
        description: 'Historical civilization. Cruises on the Nile River. Guided tours.',
        packages: 16,
        placeImage: Place4
    },
]

const Destinations = () => {
    return (
        <Box id="DestinationId">
            <Container className="DestinationContainer">
                <Typography className="DestinationContainer__heading">
                    Discover the top destinations
                </Typography>
                <Typography className="DestinationContainer__subHeading">
                    Find the best travel destinations around the world
                </Typography>
                <Box className="DestinationContainer__CardContainer DestinationScroll">
                    {
                        [...DESTINATIONS, ...DESTINATIONS].map((destination: DestinationType, index: number) => <Destination key={index} destination={destination} />)
                    }
                </Box>
            </Container>
        </Box>
    );
}

export default Destinations;