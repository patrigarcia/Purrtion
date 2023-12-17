import { Box, Flex, Image, HStack } from "@chakra-ui/react";
import logo from "../../assets/images/1.svg";
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <Flex as="nav" align="center" justify="space-between" wrap="wrap" padding="1rem" bgGradient="linear(to-r,#ffc700, #ffde59)">
            <Flex align="center" mr={5}>
                <Link to="/">
                    <Image src={logo} w="70px" />
                </Link>
            </Flex>

            <Box display={{ base: "block", md: "block" }} flexBasis={{ base: "30%", md: "auto" }}>
                <Flex align="center" justify={["center", "space-between", "flex-end", "flex-end"]} direction={["column", "row", "row", "row"]} pt={[4, 4, 0, 0]}>
                    <HStack>
                        <Link to="/">Inicio</Link>
                        <Link to="/blog">Blog</Link>
                    </HStack>
                </Flex>
            </Box>
        </Flex>
    );
};

export default Header;
