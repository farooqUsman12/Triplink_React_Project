import Support from "./support";
import Currency from "./currency";
import Country from "./country";
import Account from "./account";
import Divider from "src/components/shared/divider";
import { Box } from "@mui/material";

const AppbarRightSide = () => {

    return (
        <Box className='rightSideElement'>
            <Support />
            <Divider className='AppBarDivider'/>
            <Currency />
            <Divider className='AppBarDivider'/>
            <Country />
            <Divider className='AppBarDivider'/>
            <Account />
        </Box>
    );
}

export default AppbarRightSide;