import React from "react";
import { useState } from "react";
import MobileFilterLayout from "./searchFiltersMobileLayout";
import SearchFilters from "./searchFilters";
import FiltersDropdown from "./filtersDropdown";
import PriceFilterDropdown from "./priceFilterDropdown";

export const SearchFiltersDropdown: any = {
  Theme: <FiltersDropdown nameClass="ThemeDropdown" />,
  Category: <FiltersDropdown nameClass="CategoryDropdown" />,
  Price: <PriceFilterDropdown nameClass="PriceDropdown" />,
  Duration: <FiltersDropdown nameClass="DurationDropdown" />,
  "Other features": <FiltersDropdown nameClass="OtherfeaturesDropdown" />,
};

const SearchResultNavBar = () => {
  const [showFilterModel, setShowFilterModel] = useState(false);
  const [filter, setFilter] = useState<any>("");

  return (
    <>
      {showFilterModel ? (
        <MobileFilterLayout
          onClick={() => setShowFilterModel(false)}
          filter={filter}
        />
      ) : (
        <SearchFilters
          setShowFilterModel={setShowFilterModel}
          setFilter={setFilter}
          filter={filter}
        />
      )}
    </>
  );
};

export default SearchResultNavBar;
