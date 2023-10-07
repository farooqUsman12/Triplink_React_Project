import { Fragment } from "react";
import { Box, Button, Stack, Typography } from "@mui/material";
import Image from "next/image";
import React, { useState } from "react";
import CartImage from "src/assets/images/Reservations/AddToCart.png";
import CartImageMobile from "src/assets/images/packageDatial/palce1.png";
import CartModal from "./cartModal";

interface IService {
  service: any;
}

const Service = ({ service: { title, price, description } }: IService) => {
  const [cartModal, setCartModal] = useState<boolean>(false);
  const [aditionalValue, setAdditionalValue] = useState({
    adults: "",
    children: "",
  });

  const onClickHandler = (adults: any, children: any) => {
    setAdditionalValue({ adults: adults  , children: children });
  };
  
  const total = +aditionalValue.children * 20 + +aditionalValue.adults * 30;
  return (
    <Fragment>
      <Box className="AddToCart__Cart">
        <Box>
          <Image src={CartImage} alt="CartImage" />
        </Box>
        <Box className="AddToCart__Cart__Info">
          <Box className="header">
            <Box>
              <Typography className="title">{title}</Typography>
              <Typography className="moreInfo">More info</Typography>
            </Box>
            <Box>
              <Typography className="price">{total}€</Typography>
              <Typography className="totalText">Total</Typography>
            </Box>
          </Box>
          <Box className="footer">
            <Typography className="footer__text">{description}</Typography>
            <Box className="footer__CartSection">
              <Button
                onClick={() => setCartModal(!cartModal)}
                className="footer__CartSection__CartBtn"
              >
                Add to cart
              </Button>
              {cartModal ? (
                <CartModal
                  aditionalValue={setAdditionalValue}
                  onClickHandler={onClickHandler}
                  setCartModal={setCartModal}
                  cartModal={cartModal}
                />
              ) : null}
            </Box>
          </Box>
        </Box>
      </Box>
      <Box className="AddToCart__MobileView">
                <Image
                    src={CartImageMobile}
                    alt="CartImage"
                    className="AddToCart__MobileView__Image"
                    height={160}
                />
                <Box className="AddToCart__MobileView__content">
                    <Typography className="title">
                        {title}
                    </Typography>
                    <Typography className="moreInfo ">More info</Typography>
                    <Typography className="text">
                        {description}
                    </Typography>
                    <Box className="bottomContainer">
                        <Box>
                            <Typography>{price}€</Typography>
                            <Typography className="total">Total</Typography>
                        </Box>
                        <Button className="bottomContainer__btn">Add to cart</Button>
                    </Box>
                </Box>
            </Box>
    </Fragment>
  );
};

export default Service;
