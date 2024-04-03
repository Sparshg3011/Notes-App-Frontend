import {
  Button,
  Flex,
  HStack,
  Heading,
  Image,
  Spacer,
  Stack,
  Text,
  useBreakpointValue,
} from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import NoteImage from '../Images/sticky-note.png'; 

export default function Homepage() {
  const nav = useNavigate();
  return (
    <Stack minH={'100vh'} direction={{ base: 'column', md: 'row' }}>
      <Flex p={8} flex={1} align={'center'} alignItems={'center'} justify={'center'}>
        <Stack spacing={6} w={'full'} maxW={'lg'}>
          <Heading fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}>
            <Text color={'black'} as={'span'}>
              Note Manager
            </Text>{' '}
          </Heading>
          <Stack direction={'row'} spacing={4}>
            <Button
              _hover={{
                bg: '#01d8fb',
              }}
              onClick={() => {
                nav("/login")
              }}>
              Log In
            </Button>
            <Button
              _hover={{
                bg: '#01d8fb',
              }} onClick={() => { nav("/register") }}>
              Sign Up
            </Button>
          </Stack>
          <Spacer />
        </Stack>
      </Flex>
      <Flex flex={1} justify={'center'} align={'center'}>
        <Image src={NoteImage} alt="Note Image" />
      </Flex>
    </Stack>
  );
}
