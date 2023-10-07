import {Fragment, useEffect} from "react";
import Home from "src/components/home";
import {useAppDispatch} from "@/store/mainReducer";
import {resetSearchParam} from "@/store/package/search.slice";

export default function Page() {
    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(resetSearchParam(''))
    }, []);
    return (
        <Fragment>
            <Home />
        </Fragment>
    );
}