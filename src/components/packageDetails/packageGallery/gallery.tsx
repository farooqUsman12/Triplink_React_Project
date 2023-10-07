import React, { useState } from "react";
import { Box, Button } from "@mui/material";
import Carousel from "react-images";
import packageImg1 from '../../../../public/static/images/heroImage.jpg';
import packageImg2 from '../../../../public/static/images/Bitmap1.jpg';
import packageImg3 from '../../../../public/static/images/Bitmap2.jpg';
import useWindowSize from "src/hooks/useWindowSize";
import CarouselModel from "./carouselModel";
import Image from "src/components/shared/image";
import { photos } from "src/components/shared/customData/Packages";
import {useSelector} from "react-redux";
import {RootState} from "@/store/mainReducer";

const renderOneImage = (pkgImages: any, handler: any) => {

    return (
        <Box className="CustomImageList__listItem">
            <Box
                onClick={() => handler(0)}
                className="mainImage" sx={{ width: '100% !important' }}>
                <Image width={0} height={0} sizes="100vw" src={pkgImages[0]?.src || ''} alt="MainImage" fill={true} />
            </Box>
        </Box>
    );
}

const renderTwoImages = (pkgImages: any, handler: any) => {
    return (
        <Box className="CustomImageList__listItem">
            <Box
                onClick={() => handler(0)}
                className="mainImage">
                <Image width={0} height={0} sizes="100vw" src={pkgImages[0]?.src || ''} alt="MainImage" fill={true} />
            </Box>
            <Box
                onClick={() => handler(1)}
                className="mainImage">
                <Image width={0} height={0} sizes="100vw" src={pkgImages[1]?.src || ''} alt="MainImage" fill={true} />
            </Box>
        </Box>
    );
}

const renderThreeImages = (pkgImages: any, handler: any) => {
    return (
        <Box className="CustomImageList__listItem">
            <Box
                onClick={() => handler(0)}
                className="mainImage">
                <Image width={0} height={0} sizes="100vw" src={pkgImages[0]?.src || ''} alt="MainImage" fill={true} />
            </Box>
            <Box className="sideImages">
                <Box className="Bitmap1" onClick={() => handler(1)}>
                    <Image width={0} height={0} sizes="100vw" src={pkgImages[1]?.src || ''} alt="Bitmap1" />
                </Box>
                <Box className="ImageBitMap2" onClick={() => handler(2)}>
                    <Image width={0} height={0} sizes="100vw" className="" src={pkgImages[2]?.src || ''} alt="Bitmap2" />
                </Box>
            </Box>
        </Box>
    );
}

const renderMoreThenThreeImages = (pkgImages: any, handler: any) => {
    return (
        <Box className="CustomImageList__listItem">
            <Box
                onClick={() => handler(0)}
                className="mainImage">
                <Image width={0} height={0} sizes="100vw" src={pkgImages[0]?.src || ''} alt="MainImage" fill={true} />
            </Box>
            <Box className="sideImages">
                <Box className="Bitmap1" onClick={() => handler(1)}>
                    <Image width={0} height={0} sizes="100vw" src={pkgImages[1]?.src || ''} alt="Bitmap1" />
                </Box>
                <Box className="ImageBitMap2">
                    <Box className="seeAllPhotos Bitmap2">
                        <Button
                            onClick={() => handler(0)}
                            className="btn"
                        >
                            See {pkgImages.length} photos
                        </Button>
                    </Box>
                    <Image width={0} height={0} sizes="100vw" className="" src={pkgImages[2]?.src || ''} alt="Bitmap2" />
                </Box>
            </Box>
        </Box>
    );
}

const PackageGallery = () => {

    const [currentImage, setCurrentImage] = useState(0);
    const [viewerIsOpen, setViewerIsOpen] = useState(false);
    const { width } = useWindowSize();
    const isMobile = width <= 640;
    const { packageData } = useSelector((state: RootState) => state.package)

    const openLightbox = (index: number) => {
        setCurrentImage(index);
        setViewerIsOpen(true);
    }

    const closeLightbox = () => {
        setCurrentImage(0);
        setViewerIsOpen(false);
    }

    const openModalHandler = (index: number) => {
        openLightbox(index)
    }

    const renderImages = (pkgImages: any) => {
        const imagesLength = packageData.photos.length;
        const renderImagesMappper: any = {
            1: renderOneImage(packageData.photos, openModalHandler),
            2: renderTwoImages(packageData.photos, openModalHandler),
            3: renderThreeImages(packageData.photos, openModalHandler),
        }
        return renderImagesMappper[imagesLength] || renderMoreThenThreeImages(pkgImages, openModalHandler);
    }

    return (
        <div>

            {
                isMobile
                    ? <Carousel
                        currentIndex={currentImage}
                        views={packageData.photos.map((x: any) => {
                            return ({
                                ...x,
                            })
                        })}
                    />
                    : renderImages(packageData.photos)
            }


            {viewerIsOpen ? (
                <CarouselModel
                    pkgImages={packageData.photos}
                    closeHandler={closeLightbox}
                    currentImage={currentImage}
                    setCurrentImage={setCurrentImage}
                />
            ) : null}

        </div>
    );
}

export default PackageGallery;
