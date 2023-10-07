import { Box, IconButton, Typography } from "@mui/material";
import {
	RemoveCircleOutlineOutlined,
	AddCircleOutlineOutlined,
} from "@mui/icons-material";

interface IRoomCategory {
	label: string;
	count: number;
	addHandler: () => void;
	removeHandler: () => void;
}

const RoomCategory = ({
	label,
	count,
	addHandler,
	removeHandler,
}: IRoomCategory) => {
	return (
		<Box className="Travelers__Options" sx={{}}>
			<Typography className="Travelers__Options__Label">{label}</Typography>
			<Box>
				<IconButton onClick={removeHandler}>
					<RemoveCircleOutlineOutlined />
				</IconButton>
				<span className="Travelers__Options__Count">{count}</span>
				<IconButton onClick={addHandler}>
					<AddCircleOutlineOutlined />
				</IconButton>
			</Box>
		</Box>
	);
};

export default RoomCategory;
