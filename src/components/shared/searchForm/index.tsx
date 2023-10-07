import TravelLocation from "./travelLocation";
import Duration from "./duration";
import Travelers from "./travelers";
import { Box, IconButton } from "@mui/material";
import { SearchOutlined } from "@mui/icons-material";
import MobileSreachButton from "./MobileSreachButton";
import Link from "next/link";
import useWindowSize from "src/hooks/useWindowSize";
import { useRouter } from "next/router";
import PackageMobileModel from "./packageDetailsMobileModel";
import { useState} from "react";
import Origin from "src/components/shared/searchForm/Origin";
import {useSelector} from "react-redux";
import {RootState} from "@/store/mainReducer";
import {
  changeSearchParamToUrl
} from "@/store/package/search.slice";
import { useSnackbar, SnackbarType } from "@/src/hooks/useSnackbar";
const SearchForm = () => {
  const [PackageModel , setPackageModel] = useState(false)
  const [isError, setIsError] = useState(false);
  const { push, pathname} = useRouter();
  const { width } = useWindowSize();
  const isPackageDetailsRoute = pathname.includes("/package-details");
  const { searchParam } = useSelector((state: RootState) => state.search)


  const handleSearch = (e: any) => {
    e.preventDefault()
    //no search without origin
    if(!searchParam.origins?.value?.id) {
      setIsError(true)
      return false
    }

    const searchUrl = changeSearchParamToUrl(searchParam)
    push(`/packages/${decodeURIComponent(searchUrl)}`)
  }

  return (
    <Box className="SearchForm">
      <Box className="SearchForm__Container">
        <Origin selectType={'single'} isError={isError} />
        {isPackageDetailsRoute && width < 640 ? null : (
          <>
            <TravelLocation setIsError={setIsError} />
            <Duration />
            <Travelers />
            <MobileSreachButton handleSearch={handleSearch}/>
          </>
        )}

        {width < 640 && PackageModel && <PackageMobileModel handleSearch={handleSearch} isError={isError} setIsErro={setIsError} setPackageModel={setPackageModel}/>}

        <IconButton onClick={(e) => !isPackageDetailsRoute ? handleSearch(e) : setPackageModel(true)} className="SearchForm__Container__SearchBtn">
          <Link onClick={(e) => !isPackageDetailsRoute ? handleSearch(e) : setPackageModel(true)} href={'#'} >
            <SearchOutlined />
          </Link>
        </IconButton>
      </Box>
    </Box>
  );
};

export default SearchForm;
