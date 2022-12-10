/* eslint-disable react-hooks/exhaustive-deps */
import { useRouter } from "next/router";
import { Box, Heading, Text, Flex, Button } from "@chakra-ui/react";
import { useEffect, useState } from "react";

const API_BASE_URL_DOC = "http://127.0.0.1:8000/doc/";

export default function Home() {
  const router = useRouter();
  const { doc } = router.query;
  const [queryInput, setQueryInput] = useState(doc);
  const [results, setResults] = useState({});

  useEffect(() => {
    if (!doc) return;
    const getResult = async () => {
      let res = await fetch(API_BASE_URL_DOC + doc + "/");
      res = await res.json();
      setResults(res);
    };

    doc && setQueryInput(doc);
    try {
      getResult();
      console.log(results);
    } catch (error) {
      console.log("what");
    }
  }, [doc]);

  return (
    <>
      <Button
        onClick={() => {
          router.back();
        }}
      >
        Back
      </Button>
      <Flex mt="1rem" direction={"column"} w="90%">
        <Heading>{results.doc_id}</Heading>
        <Text>{results.content}</Text>
      </Flex>
    </>
  );
}
