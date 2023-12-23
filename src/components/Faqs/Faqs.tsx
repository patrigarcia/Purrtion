import { useDisclosure, Button, Collapse, Box, Text } from "@chakra-ui/react";

const Faqs: React.FC = () => {
    const { isOpen, onToggle } = useDisclosure();

    return (
        <>
            {" "}
            <Box>
                <Button bg="#ffc700" _hover={{ bg: "#ffde59" }} onClick={onToggle}>
                    Saber más
                </Button>
                <Collapse in={isOpen} animateOpacity>
                    <Box p="20px" mt="4" bg="orange.200" rounded="md" shadow="md">
                        <Text as="b">
                            La información y las recomendaciones proporcionadas por esta aplicación de cálculo de ración para gatos se basan en promedios y estimaciones generales. Cada gato es único y
                            sus necesidades nutricionales pueden variar debido a factores como la edad, el peso, la raza, la actividad física, el estado de salud y las condiciones ambientales.
                            <br /> Recomendamos encarecidamente consultar a un veterinario antes de hacer cambios significativos en la dieta de tu gato, especialmente si tu gato tiene condiciones de
                            salud especiales, está embarazada, en periodo de lactancia, o es de edad avanzada. <br /> Al usar esta aplicación, reconoces y aceptas que la responsabilidad del cuidado y
                            bienestar de tu gato recae en ti como dueño. No nos hacemos responsables de las consecuencias directas o indirectas que puedan derivarse del uso de la información
                            proporcionada por esta aplicación.
                        </Text>
                    </Box>
                </Collapse>
            </Box>
        </>
    );
};

export default Faqs;
