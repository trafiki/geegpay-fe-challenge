import React from 'react';
import { Box, Flex, Center, Icon, VStack } from '@chakra-ui/react';
import ColorModeToggler from './ColorModeToggler';
import { LogoIcon } from '../../assets';
import {
  Menu_1_Icon,
  Menu_2_Icon,
  Menu_3_Icon,
  Menu_4_Icon,
  Menu_5_Icon,
  Menu_6_Icon,
  Menu_7_Icon,
  Menu_8_Icon,
  Menu_9_Icon,
  MenuInidicator,
} from '../../assets';

export default function Sidebar() {
  return (
    <Flex
      height="100vh"
      bg="red"
      position="fixed"
      w="80px"
      direction="column"
      p="20px"
      overflow="hidden"
      background="#F7F8FA"
      borderRight="1px solid #EBECF2"
      justify="space-between"
    >
      {/* <VStack justify="space-between"> */}
      <Box>
        <Icon as={LogoIcon} mb={5} boxSize={10} />
        <VStack gap={4}>
          <Center position="relative">
            <Icon as={Menu_1_Icon} boxSize={6} />
            <Icon
              as={MenuInidicator}
              height={5}
              position="absolute"
              right="-34px"
            />
          </Center>
          <Icon as={Menu_2_Icon} boxSize={6} />
          <Icon as={Menu_3_Icon} boxSize={6} />
          <Icon as={Menu_4_Icon} boxSize={6} />
          <Icon as={Menu_5_Icon} boxSize={6} />
          <Icon as={Menu_6_Icon} boxSize={6} />
          <ColorModeToggler />
        </VStack>
      </Box>

      <VStack gap={4}>
        <Icon as={Menu_7_Icon} boxSize={6} />
        <Icon as={Menu_8_Icon} boxSize={6} />
        <Icon as={Menu_9_Icon} boxSize={6} />
      </VStack>

      {/* </VStack> */}
    </Flex>
  );
}
