import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";
import { Button, Input, Center, VStack, Box } from "@chakra-ui/react";
import { useState } from "react";

export default function Home() {
  const router = useRouter();
  const [queryInput, setQueryInput] = useState("");

  return (
    <>
      <Center minH={"100vh"}>
        <VStack w={["90%", "50%"]}>
          <Input
            value={queryInput}
            onChange={(e) => setQueryInput(e.target.value)}
            placeholder="Cari..."
          />
          <Button
            px="30px"
            onClick={() => {
              router.push({
                pathname: "/search/[q]",
                query: { q: queryInput },
              });
            }}
          >
            Cari
          </Button>
        </VStack>
      </Center>
    </>
  );
}
