import { useState } from "react";
import { Container, FormControl, FormLabel, Input, Button, Text, RadioGroup, Radio, Stack, Slider, SliderFilledTrack, SliderThumb, SliderTrack, Card } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import useStore from "../../store/store";

const Calc = () => {
    const navigate = useNavigate();
    const { setNombre, setEdad, setTipoGato, setPeso, setNivelActividad, nombre } = useStore();

    const { edad, tipoGato, peso } = useStore((state) => ({ edad: state.edad, tipoGato: state.tipoGato, peso: state.peso }));
    const [isNombreValido, setIsNombreValido] = useState(true);

    const maxPeso = 10;
    const step = 0.1;

    const handleSubmit = () => {
        if (!nombre.trim()) {
            setIsNombreValido(false);
            return;
        }
        setIsNombreValido(true);
        navigate("/spinner");
        setTimeout(() => {
            navigate("/results");
        }, 2000);
    };

    return (
        <Container mt="2vh">
            <Text fontSize={{ base: "1.05em", md: "1.2em", lg: "1.5em" }} fontWeight="bold" textAlign="center" mt="3vh" mb="3vh">
                Calcula la ración de comida para tu gato
            </Text>

            <Stack spacing={4}>
                <FormControl>
                    <FormLabel>Peso (kg)</FormLabel>
                    <Card p="3" mb="2vh">
                        <Slider defaultValue={peso} min={0.2} max={maxPeso} step={step} onChange={(val) => setPeso(val)}>
                            <SliderTrack bg="orange.200">
                                <SliderFilledTrack bg="orange" />
                            </SliderTrack>
                            <SliderThumb />
                        </Slider>
                        <Text mt={2}>{peso.toFixed(1)} kg</Text>
                    </Card>
                </FormControl>

                <FormControl>
                    <FormLabel>Edad</FormLabel>
                    <RadioGroup
                        defaultValue="cachorro"
                        onChange={(val) => {
                            if (val === "cachorro" || val === "adulto" || val === "exterior" || val === "interior" || val === "mixto") {
                                setTipoGato(val);
                            }
                        }}
                    >
                        <Stack direction="row">
                            <Radio colorScheme="yellow" value="cachorro">
                                Cachorro (hasta 1 año)
                            </Radio>
                            <Radio colorScheme="yellow" value="adulto">
                                Jóven / adulto
                            </Radio>
                        </Stack>
                    </RadioGroup>
                </FormControl>

                {tipoGato === "cachorro" ? (
                    <Card p="3" mb="2vh">
                        <FormControl>
                            <FormLabel>Edad (en meses)</FormLabel>
                            <Slider defaultValue={edad} min={1} max={11} step={1} onChange={(val) => setEdad(val)}>
                                <SliderTrack bg="orange.200">
                                    <SliderFilledTrack bg="orange" />
                                </SliderTrack>
                                <SliderThumb />
                            </Slider>
                            <Text mt={2}>
                                {edad} {edad === 1 ? "mes" : "meses"}
                            </Text>
                        </FormControl>
                    </Card>
                ) : (
                    <Card p="3" mb="2vh">
                        <FormControl>
                            <FormLabel>Edad (en años)</FormLabel>
                            <Slider defaultValue={edad} min={1} max={30} step={1} onChange={(val) => setEdad(val)}>
                                <SliderTrack bg="orange.200">
                                    <SliderFilledTrack bg="orange" />
                                </SliderTrack>
                                <SliderThumb />
                            </Slider>
                            <Text mt={2}>
                                {edad} {edad === 1 ? "año" : "años"}
                            </Text>
                        </FormControl>
                    </Card>
                )}

                <FormControl mb="3vh">
                    <FormLabel>Tipo</FormLabel>
                    <RadioGroup
                        defaultValue="interior"
                        onChange={(val) => {
                            if (val === "cachorro" || val === "adulto" || val === "exterior" || val === "interior" || val === "mixto") {
                                setTipoGato(val);
                            }
                        }}
                    >
                        <Stack direction="row">
                            <Radio colorScheme="yellow" value="interior">
                                🏠 Interior
                            </Radio>
                            <Radio colorScheme="yellow" value="exterior">
                                🌳 Exterior
                            </Radio>
                            <Radio colorScheme="yellow" value="mixto">
                                🏡 Mixto
                            </Radio>
                        </Stack>
                    </RadioGroup>
                </FormControl>

                <FormControl mb="3vh">
                    <FormLabel>Nivel de Actividad</FormLabel>
                    <RadioGroup
                        defaultValue="activo"
                        onChange={(val) => {
                            if (val === "activo" || val === "normal" || val === "perezoso") {
                                setNivelActividad(val);
                            }
                        }}
                    >
                        <Stack direction="row">
                            <Radio colorScheme="yellow" value="activo">
                                Activo
                            </Radio>
                            <Radio colorScheme="yellow" value="normal">
                                Normal
                            </Radio>
                            <Radio colorScheme="yellow" value="perezoso">
                                Perezoso
                            </Radio>
                        </Stack>
                    </RadioGroup>
                </FormControl>
                <FormControl isInvalid={!isNombreValido} mb="3vh">
                    <FormLabel>Nombre del michi</FormLabel>
                    <Input placeholder="Nombre" onChange={(e) => setNombre(e.target.value)} onBlur={() => setIsNombreValido(!!nombre.trim())} />
                    {!isNombreValido && <Text color="red.500">Por favor, ingresa el nombre de tu gato</Text>}
                </FormControl>

                <Button w="full" mb="2vh" bg="#ffc700" _hover={{ bg: "#ffde59" }} onClick={handleSubmit}>
                    Calcular
                </Button>
            </Stack>
        </Container>
    );
};

export default Calc;