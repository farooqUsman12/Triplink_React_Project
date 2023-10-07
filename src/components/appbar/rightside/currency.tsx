import { Box, FormControl, List, ListItem, Typography } from "@mui/material";
import Image from "next/image";
import { useState } from "react";
import DropDownSvg from "src/assets/images/dropDownchevron.png";
import useClickOutside from "src/hooks/useClickOutside";

interface Currency {
  name: string;
  sign: string;
}

const CURRENCIES: Currency[] = [
  { name: "Euro", sign: "€" },
  { name: "United States Dollar", sign: "$" },
  { name: "British Pound", sign: "£" },
  { name: "Turkish Lira", sign: "₺" },
  { name: "Saudi Riyal", sign: "﷼" },
  { name: "Russian Ruble", sign: "₽" },
];
const Currency = () => {
  const [currency, setCurrency] = useState("€");
  const [showDropDown, setShowDropDown] = useState(false);
  const ref = useClickOutside(() => setShowDropDown(false), showDropDown);

  return (
    <Box
      onClick={() => setShowDropDown((prev) => !prev)}
      className={`AppBar__Currency ${showDropDown && "CurrencyActiveDropdown"}`}
      ref={ref}
    >
      <FormControl variant="standard">
        <Box className="AppBar__Currency__Button">
          <Typography marginRight={"6px"} className="currency">
            {currency}
          </Typography>
          <Image className="dropDownIcon" src={DropDownSvg} alt="DropDownSvg" />
        </Box>
        {showDropDown ? (
          <Box className="AppBar__Currency__Dropdown">
            <List className="AppBar__Currency__Dropdown__List">
              {CURRENCIES.map((currency: Currency, index: number) => {
                return (
                  <ListItem
                    onClick={() => setCurrency(currency.sign)}
                    key={index}
                    className="AppBar__Currency__Dropdown__List__ListItem"
                  >
                    <Typography className="currency">
                      {currency.sign}
                    </Typography>
                    <Typography className="text"> {currency.name} </Typography>
                  </ListItem>
                );
              })}
              <Box className="AppBar__Currency__Dropdown__List__AllCurrencies">
                <Typography className="text">
                  View the 74 available currencies
                </Typography>
              </Box>
            </List>
          </Box>
        ) : null}
      </FormControl>
    </Box>
  );
};

export default Currency;
