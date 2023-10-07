import { Box, Typography, } from "@mui/material";
import Room from "./room";

const ROOMS = [
    ["Single room 1", "Double room 1", "Triple room 1"],
    ["Single room 2", "Double room 2", "Triple room 2"],
];

const RoomsPreference = () => {

    return (
        <Box className="RoomSelection">
            <Typography className="RoomSelection__text">
                Select which room you prefer for your trip, and we will do our best to
                get it for you.
            </Typography>
            <Box className="RoomSelection__Dropdowns">
                {ROOMS.map((roomAttributes: any, index: number) => (
                    <Room key={index} roomAttributes={roomAttributes} roomNo={index}/>
                ))}
            </Box>
        </Box>
    );
}

export default RoomsPreference;