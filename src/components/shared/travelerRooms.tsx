import { Box, Button, List, Typography } from "@mui/material";
import RoomCategory from "./roomCategory";

interface ITravelerRooms {
  rooms: any;
  handler: any;
  addRoomHandler: any;
}

const TravelerRooms = ({ rooms, handler, addRoomHandler }: ITravelerRooms) => {
  return (
    <List className={`Travelers ${rooms.length > 2 ? "AddScroll" : ""}`}>
      {rooms.map((room: any, index: number) => {
        const {
          label,
          value: { adults, childrens, roomId },
        } = room || {};
        return (
          <Box key={index}>
            <Box>
              <Typography className="Travelers__RoomLabel">{label}</Typography>

              <RoomCategory
                label={"Adults"}
                count={adults}
                addHandler={() => handler(roomId, "adults", true)}
                removeHandler={() => {
                  adults > 0 && handler(roomId, "adults", false);
                }}
              />

              <RoomCategory
                label={"Childrens"}
                count={childrens}
                addHandler={() => handler(roomId, "childrens", true)}
                removeHandler={() => {
                  childrens > 0 && handler(roomId, "childrens", false);
                }}
              />
            </Box>
            {index === rooms?.length - 1 ? (
              <Button className="Travelers__AddBtn" onClick={addRoomHandler}>
                Add another room
              </Button>
            ) : (
              <></>
            )}
          </Box>
        );
      })}
    </List>
  );
};

export default TravelerRooms;
