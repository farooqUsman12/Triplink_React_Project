import {
  Box,
  Container,
  List,
  ListItem,
  Stack,
  Typography,
} from "@mui/material";
import Image from "next/image";
import React, { useState } from "react";
import ArrowDropDown from "src/assets/images/sortBy.png";
import useClickOutside from "src/hooks/useClickOutside";
import {useSelector} from "react-redux";
import {RootState} from "@/store/mainReducer";

const SORT_FILTERS = [
  "Most popular",
  "Lowest price",
  "Best-selling",
  "Distance",
];

const SortFilters = () => {
  const { packages } = useSelector((state: RootState) => state.search)
  const [showDropdown, setShowDropdown] = useState(false);
  const [sortFilter, setSortFilter] = useState<string>('Most popular')
  const ref = useClickOutside(() => setShowDropdown(false), showDropdown);

  const sortHandler = (filter: string) => {
    setSortFilter(filter);
    setShowDropdown(false);
  }
  return (
    <Box className="SearchResultMedia">
      <Container className="SearchResultMedia__Container">
        <Box className="SearchResultMedia__Container__Element">
          <Typography className="text">
            <span className="text__number">{packages.length}</span> packages available
          </Typography>

          <Stack ref={ref} className="filter" direction={"row"}>
            <Typography className="filter__text">Sort by:</Typography>
            <Stack
              direction={"row"}
              alignItems={"center"}
              onClick={() => setShowDropdown((prev) => !prev)}
            >
              <Typography className="filter__option">{sortFilter}</Typography>
              <Image
                className={`filter__dropdownIcon ${showDropdown  ? 'activeDropdown' : ''}`}
                src={ArrowDropDown}
                alt="ArrowDropDown"
              />
            </Stack>

            {showDropdown ? (
              <Stack className="filter__dropdown">
                <List className="filter__dropdown__List">
                  {
                    SORT_FILTERS.map((sort: string, index : number) => <ListItem 
                    key={index} 
                    className="ListItem"
                    onClick={() => sortHandler(sort)}
                    >{sort}</ListItem>)
                  }
                </List>
              </Stack>
            ) : null}
          </Stack>
        </Box>
      </Container>
    </Box>
  );
};

export default SortFilters;
