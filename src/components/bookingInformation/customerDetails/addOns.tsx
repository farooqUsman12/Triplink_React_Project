import { Box, Typography, Button } from "@mui/material";
import React, { useState } from "react";
import { TextareaAutosize } from "@mui/base";
import AddIcon from "@mui/icons-material/Add";
import CheckIcon from "@mui/icons-material/Check";

const ADD_ONS_DATA = [
  { label: "Rooms with view", key: "roomsView" },
  { label: "Double bed", key: "doubleBed" },
  { label: "High floor", key: "highFloor" },
  { label: "Single beds", key: "singleBed" },
];

const AddOns = () => {
  const [activeButton, setActiveButton] = useState<{
    [key: string]: boolean;
  }>({
    roomsView: false,
    doubleBed: false,
    highFloor: false,
    singleBed: false,
  });

  const onClickHandler = (data: string) => {
    const updatedData = { ...activeButton };
    updatedData[data] = !updatedData[data];
    setActiveButton(updatedData);
  };

  return (
    <Box className="CustomAddOn">
      <Typography className="CustomAddOn__title">
        We will do our best to fulfill your requests, but they cannot be
        guaranteed.
      </Typography>
      <Box className="AddOnButtons">
        {ADD_ONS_DATA.map((data) => {
          const {key, label} = data;
          return (
            <Button
              key={data.key}
              onClick={() => onClickHandler(key)}
              className={`AddOnButtons__Btn ${
                activeButton[key] ? "AddOnButtons__active" : ""
              }`}
            >
              {activeButton[key] ? (
                <CheckIcon sx={{ color: "#027A02" }} />
              ) : (
                <AddIcon />
              )}
              <Typography className={`AddOnButtons__Btn__text`}>
                {" "}
                {label}
              </Typography>
            </Button>
          );
        })}
      </Box>
      <TextareaAutosize
        className="CustomAddOn__textArea"
        placeholder="Explain your requests briefly"
      />
    </Box>
  );
};

export default AddOns;
