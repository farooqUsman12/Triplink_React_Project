import { Box, Typography, Card, CardMedia, CardContent } from "@mui/material";
import Link from "next/link";
import {IPackage} from "@/store/package/package.types";
import Image from "@/src/components/shared/image";

interface IProps {
  packageData: IPackage;
  onClick: () => void;
  view: any;
}

const Package = ({ packageData, onClick, view }: IProps) => {
  const { name, description, placeImage, release, price_model, price_from , _id, duration } =
    packageData || {};

  return (
    <Card className="Container__CardContainer__Card">
      <CardMedia className="Container__CardContainer__Card__Image">
        <Image width={0} height={0} sizes="100vw" src={placeImage} alt="place 1" />
      </CardMedia>
      <CardContent className="Container__CardContainer__Card__Content">
        <Typography className="Container__CardContainer__Card__Content__Heading">
          <Link onClick={onClick} href={`/package-details/${_id}`} >
            {name}
          </Link>
        </Typography>
        <Typography className="Container__CardContainer__Card__Content__Type">
          {price_model}
        </Typography>

        <Box className="SearchResultTypeDuration">
          <Typography className="Type">{price_model}</Typography>
          <Typography className="release">{`${duration.days} days - ${duration.nights} Nights`}</Typography>
          <Typography className="freeCancellation">
            Free Cancellation
          </Typography>
        </Box>

        <Typography className="Container__CardContainer__Card__Content__Destination">
          {description}
        </Typography>
        <Typography className="Container__CardContainer__Card__Content__Duration">
          {`${duration.days} days - ${duration.nights} Nights`}
        </Typography>
        <Typography className="fromText">from</Typography>
        <Typography className="Container__CardContainer__Card__Content__Price">
          {`${price_from.original.amount}`}
          <span className="currency">{price_from.original.currency}</span>
        </Typography>
      </CardContent>

    </Card>
  );
};
export default Package;
function useParams(): { id: any } {
  throw new Error("Function not implemented.");
}
