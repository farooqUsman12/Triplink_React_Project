import { Box, Button, IconButton, Modal, Typography } from "@mui/material";
import React, { useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import TravelLocation from "./travelLocation";
import { SearchOutlined } from "@mui/icons-material";
import TravelerRooms from "../travelerRooms";
import CheckIcon from '@mui/icons-material/Check';
import Origin from "./Origin";
import {durations} from "src/components/shared/searchForm/duration";
import {setSearchDuration, setSearchTravelers} from "@/store/package/search.slice";
import {useAppDispatch} from "@/store/mainReducer";

const PackageDetailsMobileModel = (props: any) => {
  const { setPackageModel, setIsError, isError, handleSearch } = props;
  const [rooms, setRooms] = useState<any>([
    {
      label: "ROOM 1",
      value: {
        roomId: 1,
        adults: 2,
        childrens: 0,
      },
    },
  ]);
  const [selectedOption, setSelectedOption] = useState(null);
  const dispatch = useAppDispatch()

  const addRoomHandler = () => {
    setRooms((preState: any) => [
      ...preState,
      {
        label: `ROOM ${rooms.length + 1}`,
        value: {
          roomId: rooms.length + 1,
          adults: 0,
          childrens: 0,
        },
      },
    ]);
  };

  const handler = (roomId: number, type: string, isAdd: boolean) => {
    const updatedRooms = rooms.map((room: any) => {
      const { value } = room || {};
      if (roomId === value.roomId) {
        // @td-ignore
        const calculatedValue = isAdd ? value[type] + 1 : value[type] - 1;
        return {
          ...room,
          value: {
            ...value,
            ...{ [type]: calculatedValue },
          },
        };
      }
      return room;
    });
    setRooms(updatedRooms);
    dispatch(setSearchTravelers(updatedRooms))
  };

  const handleOptionClick = (value : any) => {
    setSelectedOption(value);
    const findDuration = durations.find(duration => duration.value == value)
    dispatch(setSearchDuration(findDuration))
  };

  return (
    <Modal className="model" id="model" open={true}>
      <Box className="model__Content">
        <Box className="model__Content__header">
          <CloseIcon onClick={() => setPackageModel(false)}/>
          <Typography className="title">Modify search</Typography>
          <Box></Box>
        </Box>
        <Box className="model__Content__body">
          <Box className="model__Content__body__TravelLocation">
            <Typography className="title">Origin</Typography>
            <Origin selectType={'single'} isError={isError} />
          </Box>

          <Box className="model__Content__body__TravelLocation">
            <Typography className="title">Destination</Typography>
            <TravelLocation setIsError={setIsError} />
          </Box>

          <Typography className="title">Duration</Typography>
          <Box className="DurationOptions">
            <Box onClick={() => handleOptionClick('1-7')} className="DurationOptions__option">
              <Typography>Up to 7 days</Typography>
              {selectedOption === '1-7' && <CheckIcon />}
            </Box>
            <Box onClick={() => handleOptionClick('8-14')} className="DurationOptions__option">
              <Typography>8 -14 days</Typography>
              {selectedOption === '7-14' && <CheckIcon />}
            </Box>
            <Box onClick={() => handleOptionClick('15-1000')} className="DurationOptions__option last">
              <Typography>More than 14 days</Typography>
              {selectedOption === '15-1000' && <CheckIcon />}
            </Box>
          </Box>
          <Typography className="title">Travelers</Typography>

          <Box className="model__Content__body__TravelersInfo">
            <TravelerRooms
              rooms={rooms}
              addRoomHandler={addRoomHandler}
              handler={handler}
            />
          </Box>
        </Box>
        <Box onClick={(e) => handleSearch(e)} className="model__Content__footer">
          <Button className="searchBtn">Search</Button>
        </Box>
      </Box>
    </Modal>
  );
};

export default PackageDetailsMobileModel;
