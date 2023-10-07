import { Box, List, ListItem, Typography, Button } from "@mui/material";
import { Fragment, useContext, useState } from "react";
import CheckIcon from '@mui/icons-material/Check';
import CloseIcon from '@mui/icons-material/Close';
import { PackageDetailsContxt } from "src/context/packageDetailsContxt";
import {useSelector} from "react-redux";
import {RootState} from "@/store/mainReducer";

interface ListItemProps {
  items: string[];
  icon: any;
  className?: any;

}
const ListItems = ({ items, icon, className }: ListItemProps) => {
  return (
    <List className={` ${className} Included__list`}>
      {items.map((item: string, index: number) => (
        <ListItem key={index} className="listItem">
          {icon}
          <Typography className="text">{item}</Typography>
        </ListItem>
      ))}
    </List>
  );
};

const Includes = () => {
  const { packageDetails } = useContext(PackageDetailsContxt)
  const [isMore, setIsMore] = useState(false);
  const {packageData} = useSelector((state: RootState) => state.package)

  const { includes = [], excludes = [] } = packageData || {};
  const updatedIncludes = isMore ? includes: includes.slice(0, 5)
  const updatedExcludes = isMore ? excludes: excludes.slice(0, 5)

  return (
    <Fragment>
      <Typography className="title">What’s included?</Typography>
      <Box className="whatsInclude">
        <Box className="Included">
          <ListItems className={`${isMore ? 'newList' : ''} `} items={updatedIncludes} icon={<CheckIcon sx={{ color: "#027C43" }} />} />
        </Box>
        <Box className="NotIncluded">
          <ListItems items={updatedExcludes} icon={<CloseIcon sx={{ color: "#f70404" }} />} />
        </Box>
      </Box>
      <Button onClick={() => setIsMore(!isMore)} className="seeMoreBtn">
        {isMore ? 'See Less' : 'See More'}
      </Button>
    </Fragment>
  );
};

export default Includes;
