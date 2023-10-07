import { Container, Tab, Tabs , Box } from "@mui/material";

// navbar items
const NAVBAR_ITEMS: string[] = ['TRAVEL PACKAGES', 'ACOMMODATION', 'FLIGHTS', 'FLIGHT + ACOMMODATION', 'TRANSFERS']

const Navbar = () => {

    return (
        <Box id='NavBarID'>
        <Container className="NavBar" >
            <Tabs
                value={0}
                textColor="primary"
                indicatorColor="primary"
                sx={{height : '100%'}}
            >
                {
                    NAVBAR_ITEMS?.map((item: string, index: number) => {
                        return (
                            <Tab key={index} value={index} label={item} />
                        );
                    })
                }
            </Tabs>
        </Container>
        </Box>
    );
}

export default Navbar;