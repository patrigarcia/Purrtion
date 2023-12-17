import { Flex, Box, Text, Card, Spacer, HStack, Image } from "@chakra-ui/react";
import useStore from "../../store/store";
import Header from "../Header/Header";
import { FaCat } from "react-icons/fa";
import Faqs from "../Faqs/Faqs";
import dibujo from "../../assets/images/2.svg";

const Results = () => {
    const { nombre, peso, edad, tipoGato, nivelActividad } = useStore();

    const calcularNecesidadesCaloricas = () => {
        let TMB = Math.pow(peso, 0.75) * 70; // Tasa Metabólica Basal

        switch (nivelActividad) {
            case "perezoso":
                TMB *= 1.2;
                break;
            case "normal":
                TMB *= 1.4;
                break;
            case "activo":
                TMB *= 1.6;
                break;
        }

        if (edad < 1) {
            TMB *= 2.5; // Gatitos menores de un año
        } else if (edad > 7) {
            TMB *= 1.2; // Gatos mayores
        }

        return TMB;
    };

    const calcularRacion = () => {
        if (edad === 1 && tipoGato === "cachorro") {
            return "sólo leche materna durante el primer mes, pues este alimento le aporta los nutrientes necesarios. El destete suele comenzar en la cuarta semana de vida del gatito.";
        }

        const caloriasDiarias = calcularNecesidadesCaloricas();
        const caloriasPorGramo = 350 / 100; // 350 kcal por cada 100 gr
        const racionGramos = caloriasDiarias / caloriasPorGramo;

        return `${racionGramos.toFixed(0)} gr. de pienso al día aproximadamente.`;
    };

    const racionRecomendada = calcularRacion();

    return (
        <>
            <Header />
            <Flex direction="column" minHeight="100vh">
                {" "}
                <Box bgGradient="linear(to-r, #ffde59, #ffc700)" mt="3vh" ml="-5vh" w={{ base: "100%", md: "80%", lg: "40%" }} p="2vh" borderRadius="full">
                    <HStack justify="space-between">
                        <Text as="b" fontSize={{ base: "1.4em", md: "1.5em", lg: "1.6em" }} ml={{ base: "7vh", md: "10vh", lg: "20vh" }}>
                            {nombre}
                        </Text>
                        <Box mr="4%" fontSize="1.5em" color="orange.500">
                            <FaCat />
                        </Box>
                    </HStack>
                </Box>
                <Box p="6%">
                    <Image src={dibujo} w={{ base: "100%", md: "80%", lg: "40%" }} ml={{ base: "7vh", md: "10vh", lg: "30vh" }} />
                    <Text textAlign="center">
                        En base a nuestros cálculos, {nombre} debe comer {racionRecomendada}
                    </Text>
                </Box>
                <Spacer />
                <Card p="3%" m="2%">
                    <Text as="b">Nota:</Text>
                    <Text mb="3vh">
                        Para obtener información precisa sobre el contenido calórico y las recomendaciones específicas de alimentación según el tipo de pienso que estás utilizando, consulta con tu
                        veterinario. Este cálculo está destinado a servir como una guía general y no reemplaza el consejo profesional de un veterinario.
                    </Text>
                    <Faqs />
                </Card>
            </Flex>
        </>
    );
};

export default Results;
