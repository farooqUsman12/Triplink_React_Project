import { AppBar, Box, Container, Toolbar, Stack } from "@mui/material";
import Logo from "./logo";
import AppbarRightSide from "./rightside";
import BurgerIcon from "src/assets/images/burgerIcon.png";
import SupportIcon from "src/assets/images/support.svg";
import Image from "next/image";
import { useState } from "react";
import MobileModel from "./rightside/mobileModel";

const Appbar = () => {
  	const [showMobileModel, setShowMobileModel] = useState(false);

  	return (
		<Box id="AppBarID">
			<AppBar className="AppBar">
				<Container className="AppBar__Container">
					<Stack className="AppBar__Container__Stack">
						<Image
							onClick={() => setShowMobileModel(true)}
							className="AppBar__BurgerIcon"
							src={BurgerIcon}
							alt="Image"
						/>
						<Logo />
						<AppbarRightSide />
						<Image
							className="AppBar__SupportIcon"
							src={SupportIcon}
							alt="SsupportIcon"
						/>
					</Stack>
				</Container>
			</AppBar>
			{showMobileModel && <MobileModel showMobileModel={showMobileModel} setShowMobileModel={setShowMobileModel} />}
		</Box>
  	);
}; 

export default Appbar;
