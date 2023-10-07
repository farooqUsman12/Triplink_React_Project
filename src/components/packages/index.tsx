import { IPackage } from "@/store/package/package.types";
import { Box, Container, Typography } from "@mui/material";
import { useRouter } from "next/router";
import { useState } from "react";
import Package from "./package";
import PackageLoading from "src/components/packages/Loading";
import {useSelector} from "react-redux";
import {RootState} from "@/store/mainReducer";

interface PackagesProps {
	packages: IPackage[]; // Specify the correct type for your packages prop
}

const Packages: React.FC<PackagesProps> = ({ packages }) =>  {
	const [view, setView] = useState("");
	const router = useRouter();
	const {loading} = useSelector((state: RootState) => state.search)

	const viewHandler = (id: any) => {
		setView(id);
		router.push(`/package-details/${id}`);
	};
	return (
		<Box id="Packages">
			<Container className="Container">
				<Typography className="Container__heading">
					Featured packages
				</Typography>
				<Typography className="Container__SubHeading">
					Get to know and be inspired by our featured options
				</Typography>
				<Box className="Container__CardContainer">
					{loading && <PackageLoading />}
					{packages.map((packageData: IPackage, index: number) => (
						<Package onClick={() => viewHandler(packageData._id)} view={view}  key={index} packageData={packageData} />
					))}
				</Box>	
			</Container>
		</Box>
	);
};

export default Packages;
