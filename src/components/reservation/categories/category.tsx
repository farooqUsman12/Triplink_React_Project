import { Box, Button, Typography } from "@mui/material";
import CategoryHotels from "./categoryHotels";

interface ICategory {
    category: any;
    selectBtnHandler: any;
    selectedCategory: any
}

const Category = ({
    category: {
        _id,
        title,
        price,
        currency,
        description,
        hotels
    },
    selectBtnHandler,
    selectedCategory
}: ICategory) => {

    return (
        <Box key={_id} className="Category">
            <Box className="Category__container">
                <Box className="header">
                    <Typography className="header__title">{title}</Typography>
                    <Typography className="header__price">
                        +{price}{currency} <span className="perPerson">/person</span>
                    </Typography>
                </Box>
                <Typography className="Category__container__text">
                    {description}
                </Typography>
                {selectedCategory != _id && (
                    <Box
                        onClick={selectBtnHandler}
                        className="SelectBox"
                    >
                        <Button className="SelectBtn">Select</Button>
                    </Box>
                )}
                <CategoryHotels hotels={hotels} />
            </Box>
        </Box>
    );
}


export default Category;