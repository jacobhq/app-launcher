import { Box, Button, Center, Container, Text, Heading, HStack, Icon, useBreakpointValue } from '@chakra-ui/react'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { topBar } from '../data/apps'

export default function Home() {
  const shouldScroll = useBreakpointValue({ base: 'hidden', xs: 'scroll' })
  return (
    <>
      <Box as="nav" w="100vw">
        <Container maxW="container.xl">
          <Center justifyContent="space-between" h="100%" py={5}>
            <Heading size="md">App launcher</Heading>
            <a href='https://github.com/jacobhq/app-launcher'>
              <Button>Star on github</Button>
            </a>
          </Center>
        </Container>
      </Box>
      <Box as="section" my={10}>
        <Container maxW="container.xl">
          {/* @ts-ignore */}
          <HStack spacing={6} px={8} overflowX={shouldScroll}>
            {topBar.map((i) =>
              <Box as="a" key={i.id.toString()} href={i.href} target="_blank" userSelect="none">
                <Box bg="blue.500" p={6} borderRadius={8}>
                  <Center>
                    <Icon as={i.icon} boxSize={7} color="white" />
                  </Center>
                </Box>
                <Text w="full" textAlign="center" mt={2} color="gray.500">{i.title}</Text>
              </Box>
            )}
          </HStack>
        </Container>
      </Box>
    </>
  )
}
