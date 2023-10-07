import React from "react";
import { Container, Box, Stack } from "@mui/material";
import { useState } from "react";
import Image from "next/image";
import FilterIcon from "src/assets/images/filterIcon.png";
import SelectFilterBtn from "./selectFilterBtn";
import useClickOutside from "src/hooks/useClickOutside";
import useWindowSize from "src/hooks/useWindowSize";
import { SearchFiltersDropdown } from ".";

const FILTERS = ["Theme", "Category", "Price", "Duration", "Other features"];

const SearchFilters = ({ setShowFilterModel, setFilter, filter }: any) => {

  const [showModal, setShowModal] = useState<boolean>(false);
  const ref = useClickOutside(() => setShowModal(false), showModal);
  const [rotate , setRotate] = useState('')
  const { width } = useWindowSize();

  const filterHandler = (filter: string) => {
    setFilter(filter);
    setRotate(filter)
   

    if (width < 640) {
      setShowFilterModel(true);
    } else {
      setShowModal((preState: boolean) => !preState);
    }
  };

  const filterIconClickHandler = () => {
    setShowFilterModel(true);
    setFilter('Filters')
  };

  return (
    <Box className="SearchResultNavBar">
      <Container className="SearchResultNavBar__Container">
        <Stack className="SearchResultNavBar__Container__Elements">
          <Box ref={ref} className="customDropdown ">
            {FILTERS.map((filter: string, index: number) => (
              <SelectFilterBtn
                handler={() => filterHandler(filter)}
                key={index}
                text={filter}
                buttonWidth={filter}
                showModal={showModal}
                rotate={rotate}
              />
            ))}
            {showModal ? SearchFiltersDropdown[filter] : null}
          </Box>
          
        </Stack>
      </Container>
      <Box className="FilterIcon">
        <Box className="FilterIcon__container">
          <Image
            onClick={filterIconClickHandler}
            src={FilterIcon}
            alt="FilterIcon"
          />
        </Box>
      </Box>
    </Box>
  );
};
export default SearchFilters;
