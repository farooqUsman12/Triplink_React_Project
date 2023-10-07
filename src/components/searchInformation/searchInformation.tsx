import {Typography} from '@mui/material'
import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import {useSelector} from "react-redux";
import {RootState} from "@/store/mainReducer";
import {durations} from "src/components/shared/searchForm/duration";
import useWindowSize from 'src/hooks/useWindowSize';
import DurationLodingLSM from '../placeholderLoding/search/duration/durationLodingLSM';
import DurationLodingLG from '../placeholderLoding/search/duration/durationLodingLG';
import KeyWordLodingLg from '../placeholderLoding/search/keyword/keyWordLodingLg';
import KeyWordLodingSM from '../placeholderLoding/search/keyword/keyWordLodingSM';
import PassengersLoding from '../placeholderLoding/search/passengers/passengersLoding';
import RoomsLoding from '../placeholderLoding/search/rooms/roomsLoding';

const SearchInformation = ({onClick}: { onClick: any | null }) => {
    const {searchParam} = useSelector((state: RootState) => state.search)
    const {loading} = useSelector((state: RootState) => state.package)
    const {width} = useWindowSize();

    return (
        <div className='searchInfo'>
            <div className='searchInfo__container'>
                <div className='information'>
                    <div className='information__kayword border-left'>

                        {
                            loading ? (width > 640 ? <KeyWordLodingLg/> : <KeyWordLodingSM/>)
                                  // @ts-ignore
                                : <Typography className="text">{searchParam.destinations?.value?.name || ''}</Typography>
                        }
                    </div>
                    <div className='information__duration border-left'>
                        <Typography className="heading">Duration</Typography>
                        {
                            loading ? (width > 640 ? <DurationLodingLG/> : <DurationLodingLSM/>)
                                : <Typography className="text-info text-sm">{durations.find(duration => duration.value == searchParam.duration?.value)?.label}</Typography>
                        }

                    </div>
                    <div className='information__rooms border-left'>
                        <Typography className="heading">Rooms</Typography>
                        {
                            loading ? <RoomsLoding/>
                                : <Typography className="text">{searchParam.travelers?.length || 0} <span className='text-info'>Rooms</span></Typography>
                        }
                    </div>
                    <div className='information__adults border-left'>
                        <Typography className="heading">passengers</Typography>
                        <div className='passenger-info'>
                            {
                                loading ? <PassengersLoding/>
                                    : <>
                                        <Typography
                                            className="text">{searchParam.travelers?.reduce((total: number, {value}: any) => {
                                            return total + value?.adults
                                        }, 0)}<span className='text-info'>Adults</span> </Typography>
                                        <Typography
                                            className="text">{searchParam.travelers?.reduce((total: number, {value}: any) => {
                                            return total + value?.childrens
                                        }, 0)} <span className='text-info'>Children</span></Typography>
                                    </>
                            }
                        </div>
                    </div>
                </div>
                <button className='btn-search' onClick={onClick}><SearchIcon/> <span>Edit</span></button>
            </div>

        </div>
    )
}

export default SearchInformation