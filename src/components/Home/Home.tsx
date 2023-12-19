import { Image, Box } from "@chakra-ui/react";
import Calc from "../Calc/Calc";
import Header from "../Header/Header";
import purrtion from "../../assets/images/mobile_logo.svg";

const Home = () => {
    return (
        <>
            <Header />
            <Box w="100%" display="flex" justifyContent="center" mt="15vh">
                {" "}
                <Image src={purrtion} w={{ base: "80%", md: "70%", lg: "40%" }} />
            </Box>
            <Calc />
        </>
    );
};

export default Home;
