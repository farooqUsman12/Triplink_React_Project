import React, { useState } from "react";
import { Box, List, ListItem, Typography, Checkbox } from "@mui/material";

const DropdownList = [
  { id: "1", title: "Honeymoon", packages: "2" },
  { id: "2", title: "Circuit", packages: "2" },
  { id: "3", title: "Adventure", packages: "2" },
  { id: "4", title: "Historical", packages: "2" },
];

interface IProps {
  title?: string;
  nameClass?: string;
}

const FiltersDropdown = ({ title, nameClass }: IProps) => {
  const [isCheckedList, setIsCheckedList] = useState(
    DropdownList.map(() => false)
  );

  const handleListItemClick = (index: number) => {
    const updatedList = [...isCheckedList];
    updatedList[index] = !updatedList[index];
    setIsCheckedList(updatedList);
  };

  return (
    <>
      {title ? (
        <Typography className="MobileDropdownTitles">{title}</Typography>
      ) : null}
      <List className={` ${nameClass} customDropdown__List`}>
        {DropdownList.map((data, index) => (
          <ListItem
            key={index}
            onClick={() => handleListItemClick(index)}
            className="customDropdown__List__ListItem"
          >
            <Box className="customDropdown__List__ListItem__inputBox">
              <input
                type="checkbox"
                className="CheckboxIcon"
                checked={isCheckedList[index]}
              />
              <Typography className="text">{data.title}</Typography>
            </Box>
            <Typography className="customDropdown__List__ListItem__TotalPackegs">
              ({data.packages})
            </Typography>
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default FiltersDropdown;
