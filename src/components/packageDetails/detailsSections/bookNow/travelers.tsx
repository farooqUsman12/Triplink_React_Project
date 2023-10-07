import { useContext, useState } from "react";
import { Box, Typography } from "@mui/material";
import useClickOutside from "src/hooks/useClickOutside";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { PackageDetailsContxt } from "src/context/packageDetailsContxt";
import RoomCategory from "src/components/shared/roomCategory";

const Travelers = () => {
	const { travelers, travelerHandler } = useContext(PackageDetailsContxt);
	const [showTravelersDropdown, setShowTravelersDropdown] = useState(false);
	const ref = useClickOutside(() => setShowTravelersDropdown(false), showTravelersDropdown);
	const { adults, childrens } = travelers;

	return (
		<Box ref={ref}>
			<Box className="dropdownBtn">
				<Box onClick={() => setShowTravelersDropdown(!showTravelersDropdown)}>
					<Typography className="dropdownBtn__title">TRAVELERS</Typography>
					<Box className="dropdownBtn__btn">
						<Typography className="text">{`Adults ${adults}, Childrens ${childrens}`}</Typography>
						{showTravelersDropdown ? (
							<KeyboardArrowUpIcon />
						) : (
							<KeyboardArrowDownIcon />
						)}
					</Box>
				</Box>
				{showTravelersDropdown ? (
					<Box className="Travelers">
						<RoomCategory
							label={"Adults"}
							count={adults}
							addHandler={() => travelerHandler("adults", true)}
							removeHandler={() => { adults > 0 && travelerHandler("adults", false) }}
						/>
						<RoomCategory
							label={"Childrens"}
							count={childrens}
							addHandler={() => travelerHandler("childrens", true)}
							removeHandler={() => { childrens > 0 && travelerHandler("childrens", false) }}
						/>
					</Box>
				) : null}
			</Box>
		</Box>
	);
};

export default Travelers;
