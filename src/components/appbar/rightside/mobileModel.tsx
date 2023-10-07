import React, { useState } from "react";
import { Box, Typography } from "@mui/material";
import Image from "next/image";
import CrossIcon from "src/assets/images/crossIcon.png";
import UserIcon from "src/assets/images/user.svg";
import FlagIcon from "src/assets/images/spain.svg";
import MobileModelContent from "./mobileModelContent";
import useWindowSize from "src/hooks/useWindowSize";



const ComponentState = {
  Account: 0,
  Flag: 1,
  Currency: 2,
};

const MobileModel = (props:any) => {
	const {setShowMobileModel} = props;
	const { width} = useWindowSize();
  const [componentState, setComponentState] = useState(ComponentState.Account);

  const handleStateChange = (newState : any) => {
    setComponentState(newState);
  };

  return (
    <Box id="MobileModel">
      <Box className={`modal ${width > 640 ? 'HideModal' : ''}`}>
        <Box className="modal-content">
          {componentState === ComponentState.Flag ||
          componentState === ComponentState.Currency ? (
            <Box
              onClick={() => handleStateChange(ComponentState.Account)}
              className="modal-content__crossIcon"
            >
              <Typography className="modal-content__BackText">Back</Typography>
            </Box>
          ) : (
            <Box className="modal-content__crossIcon">
              <Image
                onClick={() => setShowMobileModel(false)}
                src={CrossIcon}
                alt="CrossIcon"
              />
            </Box>
          )}

          <Box className="modal-content__Header">
            <Box onClick={() => handleStateChange(ComponentState.Account)} className="modal-content__Header__account">
              <Image src={UserIcon} alt="UserIcon" />
              <Typography marginLeft={"10px"}>Account</Typography>
            </Box>
            <Box className="modal-content__Header__currency">
              <Typography
                onClick={() => handleStateChange(ComponentState.Currency)}
                borderRight={"1px"}
              >
                €
              </Typography>
              <Image
                onClick={() => handleStateChange(ComponentState.Flag)}
                src={FlagIcon}
                alt="FlagIcon"
              />
            </Box>
          </Box>
          <MobileModelContent componentState={componentState} />
        </Box>
      </Box>
    </Box>
  );
};

export default MobileModel;
