import {
  Box,
  FormControl,
  List,
  ListItem,
  Typography,
} from "@mui/material";
import Image from "next/image";
import { useState } from "react";
import DropDownSvg from "src/assets/images/dropDownchevron.png";
import useClickOutside from "src/hooks/useClickOutside";

const FLAG_BASE_URL = 'https://purecatamphetamine.github.io/country-flag-icons/3x2/'

interface Flag {
  code: string;
  name: string;
}
const FLAGS: Flag[] = [
  { code: 'US', name: "United States" },
  { code: 'PK', name: "Pakistan" },
  { code: 'IN', name: "India" },
  { code: 'DE', name: "Germany" },
  { code: 'FI', name: "Finland" },
  { code: 'CA', name: "Canada" }
]

const Country = () => {
  const [countryCode, setCountryCode] = useState("PK");
  const [showDropDown, setShowDropDown] = useState(false);
  const ref = useClickOutside(() => setShowDropDown(false), showDropDown);

  return (
    <Box onClick={() => setShowDropDown((prev) => !prev)} className="AppBar__Country" ref={ref}>
      <FormControl className={`AppBar__Country__FormControl ${showDropDown ? 'countryDropdownActive' : ''}`} variant="standard">
        <Box  className="Button">
          <Image
            src={`${FLAG_BASE_URL}${countryCode}.svg`}
            alt={countryCode}
            width={19}
            height={12} 
            className="flagIcon"/>
          <Image src={DropDownSvg} alt="DropDownSvg" className="dropDownIcon" />
        </Box>
        {showDropDown ? (
          <Box className="AppBar__Country__Dropdown">
            <List className="AppBar__Country__Dropdown__List">
              {
                FLAGS.map((flag: Flag, index: number) => {
                  return (
                    <ListItem
                      key={index}
                      onClick={() => setCountryCode(flag.code)}
                      className="AppBar__Country__Dropdown__List__ListItem">
                      <Image
                        alt="United States"
                        width={19}
                        height={12}
                        src={`${FLAG_BASE_URL}${flag.code}.svg`}
                      />
                      <Typography className="text"> {flag.name} </Typography>
                    </ListItem>
                  );
                })
              }
              <Box className="AppBar__Country__Dropdown__List__AllCurrencies">
                <Typography className="text">
                  View the 74 available currencies
                </Typography>
              </Box>
            </List>
          </Box>
        )
          : null}
      </FormControl>
    </Box>
  );
};

export default Country;