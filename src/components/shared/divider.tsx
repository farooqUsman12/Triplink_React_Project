import { Divider as BaseDivider } from "@mui/material";
import { Fragment } from "react";

interface IProps {
    dividerOrientation?: "vertical" | "horizontal" | undefined
    className?: string;
}

const Divider = ({
    dividerOrientation = "vertical",
    className
}: IProps) => {

    return (
        <Fragment>
            <BaseDivider className={className} orientation={dividerOrientation} />
        </Fragment>
    );
}

export default Divider;

