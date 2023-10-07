import { Fragment, useContext, useState } from "react";
import HotelImage from "src/assets/images/Reservations/Bitmap.png";
import { Box, Button, Typography } from "@mui/material";
import CheckIcon from "@mui/icons-material/Check";
import Category from "./category";
import { PackageDetailsContxt } from "src/context/packageDetailsContxt";


const CATEGORIES = [
  {
    _id: "1",
    title: "Category A",
    price: "44",
    currency: '€',
    description:
      "Lorem ipsum dolor sit amet, consectetur adipis elit, sed do eiusmod ",
    hotels: [
      {
        Image: { HotelImage },
        place: "Giza, Cairo",
        rating: "4,3/5",
        condition: "Excellent",
      },
      {
        Image: { HotelImage },
        place: "Giza, Cairo 2",
        rating: "2,2/5",
        condition: "Bad",
      },
    ],
  },
  {
    _id: "2",
    title: "Category B",
    price: "64",
    currency: '€',
    description:
      "Lorem ipsum dolor sit amet, consectetur adipis elit, sed do eiusmod",
    hotels: [
      {
        Image: { HotelImage },
        place: "Giza, Cairo",
        rating: "4,3/5",
        condition: "Excellent",
      },
      {
        Image: { HotelImage },
        place: "Giza, Cairo 2",
        rating: "2,2/5",
        condition: "Bad",
      },
    ],
  },
  {
    _id: "3",
    title: "Category C",
    price: "54",
    currency: '€',
    description:
      "Lorem ipsum dolor sit amet, consectetur adipis elit, sed do eiusmod",
    hotels: [
      {
        Image: { HotelImage },
        place: "Giza, Cairo",
        rating: "4,3/5",
        condition: "Excellent",
      },
      {
        Image: { HotelImage },
        place: "Giza, Cairo 2",
        rating: "2,2/5",
        condition: "Bad",
      },
    ],
  },
  {
    _id: "4",
    title: "Category D",
    price: "34",
    currency: '€',
    description:
      "Lorem ipsum dolor sit amet, consectetur adipis elit, sed do eiusmod",
    hotels: [
      {
        Image: { HotelImage },
        place: "Giza, Cairo",
        rating: "4,3/5",
        condition: "Excellent",
      },
      {
        Image: { HotelImage },
        place: "Giza, Cairo 2",
        rating: "2,2/5",
        condition: "Bad",
      },
    ],
  },
];

const Categories = () => {
  const { categoryPriceHandler } = useContext(PackageDetailsContxt);
  const [selectedCategory, setSelectedCategory] = useState();
  const onClickHandler = (id:any , price:any) => {
    setSelectedCategory(id)
    categoryPriceHandler(price)
  }

  return (
    <Fragment>
      {CATEGORIES.map((category: any, index: number) => {
          const { _id , price} = category;
          return (
            <Box key={index}>
              {selectedCategory === _id && (
                <Box className="SelectedHotel">
                  <Box className="SelectedHotel__tag">
                    <CheckIcon />
                    <Typography>Selected</Typography>
                  </Box>
                </Box>
              )}
              <Category
                category={category}
                selectBtnHandler={() => onClickHandler(_id , price)}
                selectedCategory={selectedCategory}
              />
            </Box>
          );
        })
      }
    </Fragment>
  );
}

export default Categories;