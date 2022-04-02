import { Box, Button, Center, Container, Text, Heading, HStack, Icon, useBreakpointValue, SimpleGrid, Link, ButtonGroup, IconButton, useColorModeValue, useColorMode, Tooltip } from '@chakra-ui/react'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { topBar, cards } from '../data/apps'
import { MoonIcon, SunIcon } from '@chakra-ui/icons'

export default function Home() {
  const shouldScroll = useBreakpointValue({ base: 'hidden', xs: 'scroll' })
  const { colorMode, toggleColorMode } = useColorMode()

  return (
    <>
    <Head>
      <title>App launcher | JacobHQ</title>
    </Head>
      <Box as="nav" w="100vw">
        <Container maxW="container.xl">
          <Center justifyContent="space-between" h="100%" py={5}>
            <Heading size="md">App launcher</Heading>
            <ButtonGroup>
            <Tooltip label={'Set theme to'.concat(' ', colorMode === 'light' ? 'dark' : 'light')} aria-label={'Set theme to'.concat(' ', colorMode === 'light' ? 'dark' : 'light')}>
              <IconButton variant="ghost" onClick={toggleColorMode} icon={colorMode === 'light' ? <MoonIcon /> : <SunIcon />} aria-label={'Set theme to'.concat(' ', colorMode === 'light' ? 'dark' : 'light')} />
            </Tooltip>
              <a href='https://github.com/jacobhq/app-launcher'>
                <Button>Star on github</Button>
              </a>
            </ButtonGroup>
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
      <Box as="section" my={10}>
        <Container maxW="container.xl">
          <SimpleGrid spacing={6} px={8} columns={[1, null, 3]}>
            {cards.map((i) => <Box key={i.id.toString()} p={6} borderWidth="1px" borderRadius={6} display="flex" justifyContent="space-between" flexDir="column">
              <Box>
                <Heading size="md" mb={2}>
                  {i.title}
                </Heading>
                <Text>
                  {i.description}
                </Text>
              </Box>
              <Link mt={6} href={i.href} target="_blank">
                <Button variant="link" colorScheme="blue">
                  Visit
                </Button>
              </Link>
            </Box>)}
          </SimpleGrid>
        </Container>
      </Box>
    </>
  )
}
