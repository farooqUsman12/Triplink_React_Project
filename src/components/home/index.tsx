import { Fragment } from "react"
import Appbar from "../appbar"
import Navbar from "../navbar";
import Banner from "../banner";
import Destinations from "../destinations";
import Packages from "../packages";
import Footer from "../footer";
import PackagesData from "src/components/shared/customData/Packages";

const Home = () => {
    return (
        <Fragment>
            <Appbar />
            <Navbar />
            <Banner />
            <Destinations />
            <Packages packages={PackagesData}/>
            <Footer/>
        </Fragment>
    )
}

export default Home;