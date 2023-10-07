import { Box, Typography } from "@mui/material";
import React, { FC, useState } from "react";
import Slider from "@mui/material/Slider";

interface IProps {
  filterModal?: string | null;
  setFilterModal?: (modal: string | null) => void;
  nameClass?: string;
}

const PriceFilterDropdown: FC<IProps> = ({nameClass}) => {

  const [value, setValue] = useState<number[]>([999, 2899]);
  const handleChange = (event: Event, newValue: number | number[]) => {
    setValue(newValue as number[]);
  };

  return (
    <Box className={` ${nameClass} PriceDropdown`}>
      <Typography className="MobileDropdownTitles">Price</Typography>
      <Box className="PriceDropdown__dropDown">
        <Typography className="PriceDropdown__dropDown__text">
          {`${value[0]} € - ${value[1]} €`}
        </Typography>
        <Slider
          getAriaLabel={() => "Temperature range"}
          value={value}
          min={99}
          max={4999}
          onChange={handleChange}
          valueLabelDisplay="auto"
          className="PriceDropdown__dropDown__slider"
        />
      </Box>
    </Box>
  );
};
export default PriceFilterDropdown;