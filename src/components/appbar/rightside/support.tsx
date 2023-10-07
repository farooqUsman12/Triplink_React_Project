import { Box, ListItem, Typography, List } from "@mui/material";
import Image from "next/image";
import SupportIcon from "src/assets/images/support.svg";
import DropdownIcon from "src/assets/images/dropDownchevron.png";
import PhoneIcon from "src/assets/images/phoneIcon.svg";
import QuestionIcon from "src/assets/images/questionMark.svg";
import { useState } from "react";
import useClickOutside from "src/hooks/useClickOutside";


const Support = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const ref = useClickOutside(() => setShowDropdown(false), showDropdown);
  return (
    <>
      <Box ref={ref} className="AppBar__Support">
        <Box
          onClick={() => setShowDropdown((prev) => !prev)}
          className={`AppBar__Support__button ${showDropdown ? 'dropdownActive' : ''}`}
        >
          <Image
            className="Icon"
            src={SupportIcon}
            alt="Get a support"
          />
          <Typography className="Text">Support</Typography>
          <Image className="dropdownIcon" src={DropdownIcon} alt="DropdownIcon" />
        </Box>
        {showDropdown && (
          <Box className="AppBar__Support__Dropdown">
            <List className="AppBar__Support__Dropdown__List">
              <ListItem className="items">
                <Image
                  height={18}
                  width={18}
                  src={QuestionIcon}
                  alt="QuestionIcon"
                />
                <Typography className="items__text">
                  Find answers at the{" "}
                </Typography>
              </ListItem>
              <ListItem className="items">
                <Image height={18} width={18} src={PhoneIcon} alt="PhoneIcon" />
                <Typography className="items__text">
                  International number
                </Typography>
              </ListItem>
            </List>
          </Box>
        )}
      </Box>
    </>
  );
};

export default Support;
