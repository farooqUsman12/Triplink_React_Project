import {createContext, useState} from "react";
import {useSelector} from "react-redux";
import {RootState, useAppDispatch} from "@/store/mainReducer";
import {IPackage} from "@/store/package/package.types";
import {getPackageById} from "@/store/package/package.slice";

export const PackageDetailsContxt = createContext<any>(null);

interface Travelers {
    adults: number;
    childrens: number;
}

interface Step {
    label: string;
    value: string;
}

const getFormattedDate = (date: any) => {
    return new Intl.DateTimeFormat("en-US", {
        day: "numeric",
        month: "long",
        year: "numeric",
    }).format(date);
}

const PackageDetailsContxtProvider = (props: any) => {
    const [packageDetails, setPackageDetails] = useState();
    const [origin, setOrigin] = useState<string>("Madrid");
    const [departureDate, setDepartureDate] = useState(getFormattedDate(new Date()));
    const [returnDate, setReturnDate] = useState<string>();
    const [step, setStep] = useState<Step>({
        label: "",
        value: "",
    });
    const [travelers, setTravelers] = useState<Travelers>({
        adults: 1,
        childrens: 1,
    });
    const [categoryPrice, setCategoryPrice] = useState();
    const {packages} = useSelector((state: RootState) => state.search)
    const dispatch = useAppDispatch()

    const categoryPriceHandler = (price: any) => {
        setCategoryPrice(price);
    };

    const getPackageDetailsHandler = (id: string) => {
        let found = false
        dispatch(getPackageById(id)).then((resultAction) => {
            console.log(resultAction.payload)
            if(resultAction?.payload?._id) {
                setPackageDetails(resultAction.payload);
                found = true
            }
        })

        return found;
    };

    const originHandler = (origin: string) => {
        setOrigin(origin);
    };

    const departureHandler = (newDate: any) => {
        setDepartureDate(`${newDate?.month?.name} ${newDate?.day}, ${newDate?.year}`);
        const returnedDate = (new Date(newDate.year, newDate.month.number - 1, newDate.day))
        setReturnDate(getFormattedDate(returnedDate.setDate(returnedDate.getDate() + 8)));
    };

    const travelerHandler = (type: string, isAdd: boolean) => {
        setTravelers((preState: Travelers) => {
            const {adults, childrens} = preState;
            const currentValue = type === "adults" ? adults : childrens;
            return {
                ...preState,
                [type]: isAdd ? currentValue + 1 : currentValue - 1,
            };
        });
    };

    const changeViewHandler = (step: Step) => {
        setStep(step);
    };

    return (
        <PackageDetailsContxt.Provider
            value={{
                packageDetails,
                getPackageDetailsHandler,
                originHandler,
                departureHandler,
                travelerHandler,
                origin,
                departureDate,
                travelers,
                returnDate,
                step,
                changeViewHandler,
                categoryPriceHandler,
                categoryPrice,
            }}
        >
            {props.children}
        </PackageDetailsContxt.Provider>
    );
};

export default PackageDetailsContxtProvider;
