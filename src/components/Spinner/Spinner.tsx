import React from "react";
import { quantum } from "ldrs";
import { Flex, Box, Text } from "@chakra-ui/react";
import { keyframes } from "@emotion/react";
import styled from "@emotion/styled";
import Header from "../Header/Header";

const pulse = keyframes`
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.1); }
`;

const PulsatingText = styled(Text)`
    animation: ${pulse} 1.5s ease-in-out infinite;
`;

const Spinner: React.FC = () => {
    quantum.register();

    return (
        <>
            <Header />
            <Flex direction="column" align="center" justify="center" height="80vh">
                <PulsatingText as="b" fontSize="xl">
                    Calculando...
                </PulsatingText>
                <Box mt="4">
                    <l-quantum size="80" speed="1.75" color="orange"></l-quantum>
                </Box>
            </Flex>
        </>
    );
};

export default Spinner;
