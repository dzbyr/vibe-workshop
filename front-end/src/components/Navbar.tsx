"use client";

import { Box, Container, Flex, Link, Button } from "@chakra-ui/react";
import { isDevnetEnvironment } from "@/lib/contract-utils";
import { useDevnetWallet } from "@/lib/devnet-wallet-context";
import { DevnetWalletButton } from "./DevnetWalletButton";
import { ConnectWalletButton } from "./ConnectWallet";

export const Navbar = () => {
  const { currentWallet, wallets, setCurrentWallet } = useDevnetWallet();

  return (
    <Box
      as="nav"
      bgGradient="linear(to-r, #2E7D32, #81D4FA)"
      boxShadow="sm"
    >
      <Container maxW="container.xl">
        <Flex justify="space-between" h={16} align="center">
          <Flex align="center">
            <Flex
              bg="whiteAlpha.800"
              borderRadius="md"
              border="2px"
              borderColor="#2E7D32"
              letterSpacing="-.05em"
              fontSize="2xl"
              fontWeight="bold"
              w="52px"
              h="52px"
              justify="center"
              align="center"
              color="#2E7D32"
              shrink="0"
              mr={2}
            >
              🌊🦦
            </Flex>
            <Link href="/" textDecoration="none">
              <Box fontSize="lg" fontWeight="bold" color="white" ml={2} letterSpacing="-0.01em">
                Wildlife Compatible Conservation
              </Box>
            </Link>
          </Flex>
          <Flex align="center" gap={6}>
            <Link href="#about" color="white" fontWeight="medium">About</Link>
            <Link href="#impact" color="white" fontWeight="medium">Impact</Link>
            <Link href="#art" color="white" fontWeight="medium">Art Gallery</Link>
            <Button
              as="a"
              href="#donate"
              colorScheme="green"
              bg="#2E7D32"
              color="white"
              borderRadius="full"
              px={6}
              fontWeight="bold"
              _hover={{ bg: "#388e3c" }}
            >
              Donate
            </Button>
            {isDevnetEnvironment() ? (
              <DevnetWalletButton
                currentWallet={currentWallet}
                wallets={wallets}
                onWalletSelect={setCurrentWallet}
              />
            ) : (
              <ConnectWalletButton />
            )}
          </Flex>
        </Flex>
      </Container>
    </Box>
  );
};
