import {
  FormControl,
  MenuItem,
  Select,
  SelectChangeEvent,
  Box,
  List,
  ListItem,
  Typography,
  Button,
} from "@mui/material";
import Image from "next/image";
import { useState } from "react";
import UserIcon from "src/assets/images/user.svg";
import DropdownIcon from "src/assets/images/dropDownchevron.png";
import AccountIcon from "src/assets/images/AccoutIcon.svg";
import useClickOutside from "src/hooks/useClickOutside";


const Account = () => {
  const [account, setAccount] = useState("Account");

  const [showDropdown, setShowDropdown] = useState(false);

	const ref = useClickOutside(() => setShowDropdown(false), showDropdown);
  const handleChange = (event: SelectChangeEvent) => {
    setAccount("Account");
  };

  return (
    <Box ref={ref} className="AppBar__Account">
      <Box className={`AppBar__Account__AccountButton ${showDropdown ? 'activeButton' : ''}`} onClick={() => setShowDropdown((prev) =>  !prev)}>
        <Image className="userIcon" src={UserIcon} alt="UserIcon" />
        <Typography className="text">Account</Typography>
        <Image className="dropdownIcon" src={DropdownIcon} alt="DropdownIcon" />
      </Box>

      {showDropdown && (
        <FormControl variant="standard">
          {/* <Select
                    className="AppBar__Account__Select"
                    value={account}
                    onChange={handleChange}
                    label="Age"
                > */}
          <List className="ListItemsAccount">
            <ListItem className="Items" value={"Account"}>
              <Image
                height={18}
                width={18}
                src={AccountIcon}
                alt="AccountIcon"
              />
              <span className="text">Account</span>
            </ListItem>
            <ListItem className="Items" value={"Account"}>
              <Image
                height={18}
                width={18}
                src={AccountIcon}
                alt="AccountIcon"
              />
              <span className="text">My Bookings</span>
            </ListItem>
            <ListItem className="Items" value={"Account"}>
              <Image
                height={18}
                width={18}
                src={AccountIcon}
                alt="AccountIcon"
              />
              <span className="text">My Bank Card</span>
            </ListItem>
            <ListItem className="Items" value={"Account"}>
              <Image
                height={18}
                width={18}
                src={AccountIcon}
                alt="AccountIcon"
              />
              <span className="text">Settings</span>
            </ListItem>
            <ListItem className="Items" value={"Account"}>
              <Image
                height={18}
                width={18}
                src={AccountIcon}
                alt="AccountIcon"
              />
              <span className="text">My Profile</span>
            </ListItem>
            <ListItem className="FooterButton">
                <Button className="FooterButton__signUpBtn">Sign Up</Button>
                <Button className="FooterButton__signInBtn">Sign In</Button>
            </ListItem>
          </List>
          {/* </Select> */}
        </FormControl>
      )}
    </Box>
  );
};

export default Account;
