import React, { useEffect, useState } from "react";
import { Box, Text, Image, Collapse, Button, Card, Flex } from "@chakra-ui/react";
import axios from "axios";
import postsData from "../../assets/data/posts.json";
import { PostData } from "../../types";

interface PostProps {
    index?: number;
}

const Post: React.FC<PostProps> = ({ index = 0 }) => {
    const [catImage, setCatImage] = useState<string>("");

    useEffect(() => {
        const fetchCatImage = async () => {
            try {
                const response = await axios.get<string[]>("http://shibe.online/api/cats?count=1");
                setCatImage(response.data[0]);
            } catch (error) {
                console.error("Error:", error);
            }
        };

        fetchCatImage();
    }, []);

    const [show, setShow] = useState(false);
    const handleToggle = () => setShow(!show);

    const validIndex = index >= 0 && index < postsData.length ? index : 0;
    const post: PostData = postsData[validIndex];

    return (
        <Card w={{ base: "100%", md: "100%", lg: "90%" }} mt="2vh" boxShadow="0px 4px 8px rgba(0, 0, 0, 0.2)">
            <Flex direction="column" align="center">
                <Box>{catImage && <Image src={catImage} alt="Imagen de gato" mb={4} w="100vw" h={{ base: "30vh", md: "30vh", lg: "25vh" }} objectFit="cover" />}</Box>
            </Flex>
            <Box pl="2vh" pr="2vh" pb="2vh">
                <Text as="b" fontSize={{ base: "1.2em", md: "1.2em", lg: "1.3em" }} pb="4%">
                    {post.title}
                </Text>
                <Text fontSize="md">{post.text}</Text>
                <Collapse startingHeight={0} in={show}>
                    {post.collapse}
                </Collapse>
                <Button size="sm" bg="#ffc700" _hover={{ bg: "#ffde59" }} onClick={handleToggle} mt="1rem">
                    Ver {show ? "menos" : "más"}
                </Button>
            </Box>
        </Card>
    );
};

export default Post;
