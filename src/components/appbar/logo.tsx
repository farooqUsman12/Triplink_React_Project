import { Box } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import LogoImg from 'src/assets/images/tripklik_logo.svg'

const Logo = () => {

    return (
        <Box className='AppBar__logo'>
            <Link href={'/'}>
                <Image src={LogoImg} alt="Logo" />
            </Link>
        </Box>
    );
}

export default Logo;