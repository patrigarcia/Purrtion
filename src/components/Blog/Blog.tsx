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

            <Card w="30vw" p="3%" boxShadow="0px 4px 8px rgba(0, 0, 0, 0.2)" zIndex={50} position="absolute" top="630" left="20">
                <Badge variant="subtle" colorScheme="orange" w="115px" p="3px" borderRadius="5" mb="2vh">
                    MICHI MISTERIOS
                </Badge>
                <Text as="b" fontSize={{ base: "1.1em", md: "1.2em", lg: "1.2em" }} mb="2vh">
                    Curiosidades
                </Text>
                <Text>Aquí encontrarás algunas de las curiosidades más locas de los gatos!</Text>
            </Card>

            <Image src={bg} w="100%" h="auto" />

            <Box className="blog-grid" mt={{ base: "60vh", md: "100vh", lg: "10vh" }} mb="5%">
                {postsData.map((_, index) => (
                    <Post key={index} index={index} />
                ))}
            </Box>
        </>
    );
};

export default Blog;
