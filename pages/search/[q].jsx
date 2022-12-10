/* eslint-disable react-hooks/exhaustive-deps */
import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";
import {
  Box,
  Button,
  Flex,
  Heading,
  HStack,
  Input,
  Link,
  Text,
  VStack,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";

const API_BASE_URL_SEARCH = "http://34.121.38.63:8000/search/";

export default function Home() {
  const router = useRouter();
  const [queryInput, setQueryInput] = useState("");
  const [results, setResults] = useState({});

  const handleSubmit = () => {
    setQueryInput(queryInput);
    router.push({
      pathname: "/search/[q]",
      query: { q: queryInput },
    });
  };

  useEffect(() => {
    const getResult = async (query) => {
      let res = await fetch(API_BASE_URL_SEARCH + query + "/");
      res = await res.json();
      setResults(res);
    };

    router.query.q && setQueryInput(router.query.q);
    try {
      getResult(queryInput);
      console.log(results);
    } catch (error) {
      console.log(error);
    }
  }, [router.query]);

  return (
    <Box mx="1rem">
      <Flex
        direction={["column", "row"]}
        gap="3"
        w={["90%", "50%"]}
        mb={"2rem"}
      >
        <Heading w="7rem">Logo</Heading>
        <Flex w="100%" direction={"column"}>
          <HStack w="100%">
            <Input
              value={queryInput}
              onChange={(e) => setQueryInput(e.target.value)}
              onKeyPress={(e) => e.key === "Enter" && handleSubmit()}
            ></Input>
            <Button
              px="30px"
              onClick={() => {
                handleSubmit();
              }}
            >
              Cari
            </Button>
          </HStack>
          <Text mt="10px" fontSize={"small"}>
            Found {results.total} results in s
          </Text>
        </Flex>
      </Flex>
      <Flex direction={"column"} ml={["0px", "7rem"]}>
        {results.results &&
          results.results.map((doc, index) => (
            <Box key={doc[0]} mb="2rem" w={["90%", "40%"]}>
              <Link href="https://farahnazihah.com" isExternal color="blue.600">
                {doc[0]}
              </Link>
              <Text>{doc[1]}</Text>
            </Box>
          ))}
      </Flex>
    </Box>
  );
}
