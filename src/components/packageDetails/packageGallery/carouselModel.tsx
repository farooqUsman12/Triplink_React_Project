import Image from "next/image";
import Carousel, { Modal, ModalGateway } from "react-images";
import packageImg1 from '../../../../public/static/images/heroImage.jpg';
import { Box } from "@mui/material";
interface IProps {
    currentImage: number;
    closeHandler: () => void;
    pkgImages: any
    setCurrentImage: any
}
const CarouselModel = ({
    currentImage,
    closeHandler,
    pkgImages,
    setCurrentImage
}: IProps) => {


    return (
        <ModalGateway>
            {currentImage >= 0 ? (
            <Modal onClose={closeHandler}>
                <>
                    <Carousel
                        currentIndex={currentImage}
                        views={pkgImages.map((x: any) => {
                            return ({
                                ...x,
                            })
                        })}
                    />
                    <Box sx={{
                        m: '0 auto',
                        overflow: 'auto',
                        scrollBehavior: 'smooth',
                        width: '100%',
                        maxWidth: '1280px',
                        padding: '0px 50px',
                        margin: '0px auto',
                        display: 'flex'
                    }}>
                        {pkgImages.map((photo: any, index: number) => (
                            <Image key={index} onClick={() => setCurrentImage(index)} src={photo.src} alt="zxzx" height={120} width={120} />
                        ))}
                    </Box>
                </>
            </Modal>
            ) : null}
        </ModalGateway>
    );
}

export default CarouselModel;