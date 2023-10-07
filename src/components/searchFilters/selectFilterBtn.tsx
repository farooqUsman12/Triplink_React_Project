import { Box, Typography } from "@mui/material";
import React, { FC } from "react";
import Image from "next/image";
import DropDownIcon from "src/assets/images/dark-chevron-down.png";

interface IProps {
  text: string;
  handler?: () => void;
  buttonWidth?: string;
  showModal:boolean;
  rotate : string;
}

const SelectFilterBtn: FC<IProps> = ({ text, handler, buttonWidth ,rotate ,showModal }) => {
  const isRotated = buttonWidth === rotate;

  return (
    <Box onClick={handler} className={`${buttonWidth} dropdownButton`}>
      <Typography className="dropdownButton__text">{text}</Typography>
      <Image className={`${showModal && isRotated ? 'rotate' : 'dropdownIcon'}`} height={14} width={14} src={DropDownIcon} alt="DropDownIcon" />
    </Box>
  );
};
export default SelectFilterBtn;
