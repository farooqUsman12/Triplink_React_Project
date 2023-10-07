import { Box, Typography } from "@mui/material";

const AlertMessage = () => {
  return (
    <Box className="InfoBox">
      <Typography className="InfoBox__text">
        Importante notice: Lorem ipsum dolor sit amet, consectetur adipiscing
        elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
        ut aliquip ex ea commodo consequat. Duis aute irure dolor in
        reprehenderit in voluptate velit esse cillum dolore.
      </Typography>
    </Box>
  );
};

export default AlertMessage;
