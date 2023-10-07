import React, { useState } from "react";
import {
    Box,
    List,
    ListItem,
    Typography,
    IconButton,
} from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import useClickOutside from "src/hooks/useClickOutside";


interface IRoom {
    roomAttributes: any
    roomNo: number
}

const Room = ({
    roomAttributes,
    roomNo
}: IRoom) => {
    const [roomAttribute, setRoomAttribute] = useState("Double room");
    const [toggleDropdown, setToggleDropdown] = useState<boolean>(false);

	const ref = useClickOutside(() => setToggleDropdown(false), toggleDropdown);


    const attributeHandler = (attribute: string) => {
        setRoomAttribute(attribute);
        setToggleDropdown(false);
    }

    return (
        <Box ref={ref} className="DropdownBtn">
            <Typography className="roomText">ROOM {roomNo + 1}</Typography>
            <Box onClick={() => setToggleDropdown(true)} className="DropdownBtn__container">
                <Typography className="text">{roomAttribute}</Typography>
                <IconButton
                    color={toggleDropdown ? "primary" : "default"}
                    className="DropdownBtn__container__dropdownIconBtn"
                >
                    <KeyboardArrowDownIcon />
                </IconButton>
            </Box>
            {toggleDropdown
                ? (
                    <Box className="Dropdown">
                        <List className="Dropdown__List">
                            {roomAttributes.map((attribute: any, index: number) => (
                                <ListItem
                                    key={index}
                                    className="Dropdown__List__Items"
                                    onClick={() => attributeHandler(attribute)}
                                >
                                    {attribute}
                                </ListItem>
                            ))}
                        </List>
                    </Box>
                )
                : null
            }
        </Box>
    );
}

export default Room;