import Image from "next/image";
import {Fragment, useState} from "react";
import {
    Box,
    Typography,
    Accordion,
    AccordionSummary,
    AccordionDetails
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import LocalAirportIcon from "@mui/icons-material/LocalAirport";
import RestaurantIcon from "@mui/icons-material/Restaurant";
import {ITINERARY_SCHEDULES} from "src/components/shared/customData/Packages";
import Place from "src/assets/images/packageDatial/palce1.png";
import {useSelector} from "react-redux";
import {RootState} from "@/store/mainReducer";

const Itinerary = () => {
    const [expanded, setExpanded] = useState(0);
    const {packageData} = useSelector((state: RootState) => state.package)
    return (
        <Fragment>
            <Typography className="title">Itinerary</Typography>
            <Box className="Schedule__accordians">
                {packageData.itinerary?.map((data: any, index: number) => {
                    const {info, accommodation, image, includes} = data || {};
                    const isExpanded = expanded === index;
                    return (
                        <Accordion
                            className="pannel"
                            key={index}
                            expanded={isExpanded}
                            onChange={() => setExpanded(index)}
                        >
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon/>}
                                className="pannel__Summary"
                            >
                                {/*icon  */}
                                <Box className="div"></Box>
                                {/* title */}
                                <Typography className="text">{`Day ${index+1}`}</Typography>
                            </AccordionSummary>

                            <AccordionDetails className="pannel__Details">
                                <Image width={'718'} height={'350'} className="placeImage" src={image || ''} alt="Place1"/>
                                <Typography className="paragraph">{info?.content_main?.description || ''}</Typography>
                                <Typography className="AccomodationDetail">
                                    Accommodation: {accommodation.length} * Hotel
                                </Typography>
                                <Box className="info">
                                    {Object.keys(includes)?.filter(key => includes[key])?.map((data: any, key: number) => {
                                            return (
                                                <Box key={key} className="info__flight">
                                                    <LocalAirportIcon/>
                                                    <Typography className="text">{data}</Typography>
                                                </Box>
                                            )
                                        })
                                    }
                                </Box>
                            </AccordionDetails>
                        </Accordion>
                    );
                })}
            </Box>
        </Fragment>
    );
};

export default Itinerary;
