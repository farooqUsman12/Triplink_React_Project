import { useContext, useEffect, useState } from "react";
import { Box } from "@mui/material";
import useClickOutside from "src/hooks/useClickOutside";
import { SubOption } from "src/components/shared/searchForm/travelers";
import { PackageDetailsContxt } from "src/context/packageDetailsContxt";

const CartModal = (props:any) => {
    const {cartModal , setCartModal , onClickHandler , aditionalValue} = props;
    const { travelers, travelerHandler } = useContext(PackageDetailsContxt);
    const { adults, childrens } = travelers;
    const ref = useClickOutside(() => setCartModal(false), cartModal);

    useEffect(() => {
        // react-hooks/exhaustive-deps
        onClickHandler(adults, childrens)
    },[childrens , adults ])

    return (
        <Box>
            <Box ref={ref} className="dropdownBtn">
                <Box className="Travelers">
                    <SubOption
                        label="Adults"
                        count={adults}
                        addHandler={() => travelerHandler("adults", true)}
                        removeHandler={() => adults > 0 && travelerHandler("adults", false)}
                    />
                    <SubOption
                        label="Childrens"
                        count={childrens}
                        addHandler={() => travelerHandler("childrens", true)}
                        removeHandler={() =>
                            childrens > 0 && travelerHandler("childrens", false)
                        }
                    />
                </Box>

            </Box>
        </Box>
    );
}

export default CartModal;