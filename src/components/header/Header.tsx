import React from 'react';
import {
  Box,
  Icon,
  Flex,
  Heading,
  InputGroup,
  InputLeftElement,
  Input,
  Avatar,
  Text,
  useDisclosure,
  Button,
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  IconButton,
} from '@chakra-ui/react';
import {
  SearchIcon,
  CalendarIcon,
  BellIcon,
  ProfilePicture,
  ArrowDownBig,
  MobileMenuIcon,
} from '../../assets';
import Sidebar from '../sidebar/Sidebar';

export default function Header() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef(null);

  return (
    <Flex
      as="header"
      position="sticky"
      top="0"
      right="0"
      height="88px"
      borderBottom="1px solid #EDF2F7"
      p={5}
      justify="space-between"
      align="center"
    >
      <Heading size="semiBold20">Dashboard</Heading>

      <Flex gap={5} align="center">
        <InputGroup
          bg="white"
          w="300px"
          display={{ base: 'none', md: 'block' }}
        >
          <InputLeftElement pointerEvents="none">
            <SearchIcon />
          </InputLeftElement>
          <Input
            type="tel"
            placeholder="Search..."
            borderRadius="20px"
            border="1px solid #DADDDD"
            _placeholder={{
              fontFamily: 'inter',
              fontWeight: '400',
              lineHeight: '24px',
              fontSize: '1rem',
            }}
          />
        </InputGroup>

        <Flex
          p="9px 16px"
          align="center"
          gap="10px"
          display={{ base: 'none', md: 'block' }}
        >
          <CalendarIcon />
          <Text
            fontSize="14px"
            fontWeight="500"
            lineHeight="22px"
            color="#26282C"
            fontFamily="inter"
          >
            November 15, 2023
          </Text>
        </Flex>
        <Icon
          as={BellIcon}
          borderRadius="100%"
          border="1px solid #DADDDD"
          boxSize={10}
          padding={2.5}
          display={{ base: 'none', md: 'block' }}
        />

        <Flex
          gap={2}
          p="6px 8px"
          alignItems="center"
          borderRadius="28px"
          border="1px solid #DADDDD"
          bg="white"
        >
          <ProfilePicture />

          <Flex
            gap={3}
            alignItems="center"
            display={{ base: 'none', md: 'block' }}
          >
            <Box textAlign="right">
              <Text
                fontSize="16px"
                fontWeight="400"
                lineHeight="19px"
                color="#26282C"
                fontFamily="inter"
              >
                Justin Bergson
              </Text>
              <Text
                fontSize="14px"
                fontWeight="400"
                lineHeight="17px"
                color="#787486"
                fontFamily="inter"
              >
                Justin@gmail.com
              </Text>
            </Box>
            <ArrowDownBig />
          </Flex>
          <Button ref={btnRef} onClick={onOpen} padding="0" bg="transparent">
            <MobileMenuIcon />
          </Button>

          <>
            <Drawer
              isOpen={isOpen}
              placement="right"
              onClose={onClose}
              finalFocusRef={btnRef}
            >
              <DrawerOverlay />
              <DrawerContent maxW="80px">
                <DrawerCloseButton />
                <Sidebar />
              </DrawerContent>
            </Drawer>
          </>
        </Flex>
      </Flex>
    </Flex>
  );
}
