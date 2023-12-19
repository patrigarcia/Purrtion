import React from "react";
import Header from "../Header/Header";
import Post from "../Post/Post";
import postsData from "../../assets/data/posts.json";
import "../../../src/index.css";
import { Box, Text } from "@chakra-ui/react";

const Blog: React.FC = () => {
    return (
        <>
            <Header />
            <Box textAlign="center" mt="17vh">
                <Text as="b" fontSize={{ base: "1.1em", md: "1.2em", lg: "1.2em" }}>
                    Michimisterios
                </Text>
                <Text>Aquí encontrarás algunas de las curiosidades más locas de los gatos!</Text>
            </Box>
            <Box className="blog-grid" mb="5%">
                {postsData.map((_, index) => (
                    <Post key={index} index={index} />
                ))}
            </Box>
        </>
    );
};

export default Blog;
