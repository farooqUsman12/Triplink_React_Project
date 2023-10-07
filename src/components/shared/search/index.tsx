import {useSelector} from "react-redux";
import {RootState, useAppDispatch} from "@/store/mainReducer";
import {useRouter} from "next/router";
import React, {useEffect, useState} from "react";
import {
    changeSearchParamToPackageSearchParam,
    changeSearchUrlToSearchParam, searchPackage,
    setSearchParam
} from "@/store/package/search.slice";
import {getPackageById} from "@/store/package/package.slice";
import {SearchParam} from "@/store/package/package.types";
import SearchInformation from "src/components/searchInformation/searchInformation";
import SearchForm from "src/components/shared/searchForm";

const SearchPackage = () => {
    const { searchParam } = useSelector((state: RootState) => state.search)
    const dispatch = useAppDispatch()
    const { query } = useRouter()
    const [showSearchFrom , setShowSearchFrom] = useState(false)

    // Listen for changes in the 'search' query parameter
    useEffect(() => {
        if (query?.search) {
            // Check if SearchParam has data, which means there was no page refresh and the user navigated using Next.js routing.
            // If SearchParam is empty, it indicates a page refresh, so we extract the search parameters from the URL.
            if (!searchParam.origins?.value?.id) {
                // Handle the case when the user navigated with a page refresh.
                const searchParamPromise = handleSearchFromUrl(query.search);
                searchParamPromise.then((res) => {
                    applySearch(res);
                    dispatch(setSearchParam(res));
                });
            } else {
                applySearch(searchParam);
            }
        }
    }, [query]);

    /**
     * Converts URL search parameters to a structured search parameter object.
     * Checks if the destination contains package data or only a name. If it contains a package ID,
     * it fetches the package data using the ID and updates the destination key in SearchParam
     * with the package data.
     *
     * @param search - The URL search parameters as an array.
     * @returns A promise that resolves to a structured SearchParam object.
     */
    const handleSearchFromUrl = async (search: string | string[]) => {
        const searchParam = changeSearchUrlToSearchParam(search);

        if (typeof searchParam.destinations.value !== 'string') {
            const resultAction = await dispatch(getPackageById(searchParam.destinations?.value?._id));

            if (getPackageById.fulfilled.match(resultAction) && resultAction?.payload) {
                // Update the destination key in SearchParam with the package data.
                searchParam.destinations.value = resultAction.payload;
                searchParam.destinations.label = resultAction.payload.name;
            }
        }

        return searchParam;
    };

    /**
     * Converts SearchParam to a valid package search parameter object and apply search
     *
     * @param searchParam - The SearchParam object.
     */
    const applySearch = (searchParam: SearchParam) => {
        // Convert the SearchParam to a package search parameter and dispatch the search.
        const packageSearchParam = changeSearchParamToPackageSearchParam(searchParam);
        dispatch(searchPackage(packageSearchParam));
    };

    const handelShowSearchForm = ()=>{
        setShowSearchFrom(true)
    }

    return (
        <>
            <SearchInformation onClick={handelShowSearchForm}/>
            {showSearchFrom && <SearchForm />}
        </>
    )
}

export default SearchPackage