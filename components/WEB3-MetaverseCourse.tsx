import {
  Badge,
  Button,
  Center,
  Flex,
  Heading,
  Image,
  Link,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";

export default function Web3Metaverse() {
  return (
    <Center py={6}>
      <Stack
        borderWidth="1px"
        borderRadius="lg"
        w={{ sm: "100%", md: "540px" }}
        height={{ sm: "476px", md: "20rem" }}
        direction={{ base: "column", md: "row" }}
        bg={useColorModeValue("white", "gray.900")}
        boxShadow={"2xl"}
        padding={4}
      >
        <Flex flex={1} bg="blue.200">
          <Image
            objectFit="cover"
            boxSize="100%"
            src={
              "https://techbullion.com/wp-content/uploads/2022/09/metaverse-EN-e1664360462990-1000x600.jpeg"
            }
          />
        </Flex>
        <Stack
          flex={1}
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          p={1}
          pt={2}
        >
          <Heading fontSize={"2xl"} fontFamily={"body"}>
            Web 3.0 (Blockchain) and Metaverse
          </Heading>
          <Text
            textAlign={"center"}
            color={useColorModeValue("gray.700", "gray.400")}
            px={3}
          >
            Metaverse experiences for the next generation of the internet by
            specializing in building worlds that merge the best of cutting-edge
            decentralized distributed blockchains with 3D metaverse client
            experiences.
          </Text>

          <Stack
            width={"100%"}
            mt={"2rem"}
            direction={"row"}
            padding={2}
            justifyContent={"space-between"}
            alignItems={"center"}
          >
            <Button
              as="a"
              href="https://www.piaic.org/"
              flex={1}
              fontSize={"sm"}
              rounded={"full"}
              bg={"blue.400"}
              color={"white"}
              boxShadow={
                "0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)"
              }
              _hover={{
                bg: "blue.700",
              }}
              _focus={{
                bg: "blue.700",
              }}
            >
              Apply
            </Button>
          </Stack>
        </Stack>
      </Stack>
    </Center>
  );
}
