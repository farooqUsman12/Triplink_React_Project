import React, { useContext, useState } from "react";
import { Box, Typography } from "@mui/material";
import useClickOutside from "src/hooks/useClickOutside";
import DatePicker from "react-multi-date-picker";
import useWindowSize from "src/hooks/useWindowSize";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { PackageDetailsContxt } from "src/context/packageDetailsContxt";
import {RootState} from "@/store/mainReducer";
import {useSelector} from "react-redux";


const getFormattedDay = (day: number, price: number, currency: string) => {
	return ({
		children: (
			<Box className="calender-days">
				<Box className="day">{day}</Box>
				<Typography className="price">{price}{currency}</Typography>
			</Box>
		),
	})
}

const DepartureDate = () => {
	const { departureHandler, departureDate, packageDetails } = useContext(PackageDetailsContxt);
	const {packageData} = useSelector((state: RootState) => state.package)
	const { amount, currency } = packageData.price_from?.original || {};
	const [showDepartureDropdown, setShowDepartureDropdown] = useState(false);
	const ref = useClickOutside(
		() => setShowDepartureDropdown(false),
		showDepartureDropdown
	);
	const { width } = useWindowSize();

	return (
		<Box ref={ref} className="dropdownBtn">
			<Typography className="dropdownBtn__title">DEPARTURE DATE</Typography>
			<Box className="Calender">
				<DatePicker
					numberOfMonths={width > 768 ? 2 : 1}
					value={departureDate}
					calendarPosition={`${width > 768 ? "bottom-right" : "bottom-center"}`}
					onChange={(date) => {
						if (date) {
							departureHandler(date);
							setShowDepartureDropdown(false);
						}
					}}
					mapDays={({ date }) => getFormattedDay(date.day, amount, currency)}
					render={(value, openCalender) => {
						return (
							<Box
								onClick={() => {
									setShowDepartureDropdown(true);
									openCalender();
								}}
								className="dropdownBtn__btn"
							>
								<Typography className="text">{departureDate}</Typography>
								{showDepartureDropdown ? (
									<KeyboardArrowUpIcon />
								) : (
									<KeyboardArrowDownIcon />
								)}
							</Box>
						);
					}}
				/>
			</Box>
		</Box>
	);
};

export default DepartureDate;
