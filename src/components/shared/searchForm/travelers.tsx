import {Fragment, useEffect, useState} from "react";
import { Box, Button, IconButton, List, Typography } from "@mui/material";
import {
  RemoveCircleOutlineOutlined,
  AddCircleOutlineOutlined,
} from "@mui/icons-material";
import useClickOutside from "src/hooks/useClickOutside";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import {useSelector} from "react-redux";
import {setSearchTravelers} from "@/store/package/search.slice";
import {SearchTravelers} from "@/store/package/package.types";
import TravelerRooms from "../travelerRooms";
import {RootState, useAppDispatch} from "@/store/mainReducer";


interface ISubOption {
  label: string;
  count: number;
  addHandler: () => void;
  removeHandler: () => void;
}
export const SubOption = ({ label, count, addHandler, removeHandler }: ISubOption) => {
  return (
    <Box className="Travelers__Options" sx={{}}>
      <Typography className="Travelers__Options__Label">{label}</Typography>
      <Box>
        <IconButton onClick={removeHandler}>
          <RemoveCircleOutlineOutlined />
        </IconButton>
        <span className="Travelers__Options__Count">{count}</span>
        <IconButton onClick={addHandler}>
          <AddCircleOutlineOutlined />
        </IconButton>
      </Box>
    </Box>
  );
};

const Travelers = () => {
  const [open, setOpen] = useState<boolean>(false);
  const { searchParam } = useSelector((state: RootState) => state.search);
  const [rooms, setRooms] = useState<SearchTravelers[]>([
    {
      label: "ROOM 1",
      value: {
        roomId: 1,
        adults: 2,
        childrens: 0,
      },
    },
  ]);
  const ref = useClickOutside(() => setOpen(false), open);
  const dispatch = useAppDispatch()
  const addRoomHandler = () => {
    setRooms((preState: SearchTravelers[]) => [
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
    const updatedRooms = rooms.map((room: SearchTravelers) => {
      const { value } = room || {};
      if (roomId === value.roomId) {
        // @ts-ignore
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

  const adultsCount = rooms?.reduce((total: number, { value }: any) => {
    return total + value?.adults;
  }, 0);
  const childrenCount = rooms?.reduce((total: number, { value }: any) => {
    return total + value?.childrens;
  }, 0);
  const travelers = (() => {
    let travelers = "";
    if (adultsCount > 0 && childrenCount > 0) {
      travelers = `Adults ${adultsCount} Childrens ${childrenCount}`;
    } else if (adultsCount > 0 && childrenCount <= 0) {
      travelers = `Adults ${adultsCount}`;
    } else if (adultsCount <= 0 && childrenCount > 0) {
      travelers = `Childrens ${childrenCount}`;
    } else {
      travelers = "";
    }
    return travelers;
  })();



  useEffect(() => {
    if(searchParam.travelers?.length) {
      setRooms(searchParam.travelers)
    }
  }, [searchParam]);

  return (
    <Fragment>
      <Box ref={ref} className="TravelersContainer">
        <Box
          className={`TravelInputField ${open ? "TravelrsFocused" : ""}`}
          onClick={() => setOpen(!open)}
        >
          <Typography className={travelers ? "" : "Placeholder"}>
            {travelers ? travelers : "Add travelers"}
          </Typography>
          <Box className={"iconMargin"}>
            {open ? <ArrowDropUpIcon /> : <ArrowDropDownIcon />}
          </Box>
        </Box>
        {open ?
          (
            <TravelerRooms
              rooms={rooms}
              addRoomHandler={addRoomHandler}
              handler={handler}
            />
          ) : null}
      </Box>
    </Fragment>
  );
};

export default Travelers;
