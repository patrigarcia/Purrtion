import React from "react";
import { Image, Box } from "@chakra-ui/react";
import Calc from "../Calc/Calc";
import Header from "../Header/Header";
import purrtion from "../../assets/images/mobile_logo.svg";

const Home: React.FC = () => {
    return (
        <>
            <Header />
            <Box w="100%" display="flex" justifyContent="center" mt="12vh">
                <Image src={purrtion} w={{ base: "80%", md: "70%", lg: "40%" }} />
            </Box>
            <Box mb="5%">
                <Calc />
            </Box>
        </>
    );
};

export default Home;
