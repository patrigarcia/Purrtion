import React from "react";
import Header from "../Header/Header";
import Post from "../Post/Post";
import postsData from "../../assets/data/posts.json";
import "../../../src/index.css";
import { Box, Text, Image, Card, Badge } from "@chakra-ui/react";
import bg from "../../assets/images/gato_bg.png";

const Blog: React.FC = () => {
    return (
        <>
            <Header />
            <Box position="relative" mt={{ base: "10vh", md: "4vh" }}>
                <Card
                    w={{ base: "90vw", md: "60vw", lg: "30vw" }}
                    p="3%"
                    boxShadow="0px 4px 8px rgba(0, 0, 0, 0.2)"
                    zIndex={50}
                    position="absolute"
                    top={{ base: "120%", md: "105%", lg: "95%" }}
                    left={{ base: "50%", md: "35%", lg: "20%" }}
                    transform="translate(-50%, -50%)"
                >
                    <Badge variant="subtle" colorScheme="orange" w="115px" p="3px" borderRadius="5" mb="2vh">
                        MICHI MISTERIOS
                    </Badge>
                    <Text as="b" fontSize={{ base: "1em", md: "1.1em", lg: "1.2em" }} mb="1vh">
                        Curiosidades
                    </Text>
                    <Text fontSize={{ base: "0.95em", md: "1em", lg: "1.1em" }}>Aquí encontrarás algunas de las curiosidades más locas de los gatos!</Text>
                </Card>

                <Image src={bg} w="100%" h="auto" mt={{ base: "10vh", md: "4vh" }} />
            </Box>

            <Box className="blog-grid" mt={{ base: "18vh", md: "12vh", lg: "8vh" }} mb="5%">
                {postsData.map((_, index) => (
                    <Post key={index} index={index} />
                ))}
            </Box>
        </>
    );
};

export default Blog;
