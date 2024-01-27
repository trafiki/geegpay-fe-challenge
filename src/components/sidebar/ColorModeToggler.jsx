import React from 'react';
import { Button, useColorMode, Box, VStack, Icon } from '@chakra-ui/react';
import { LightModeIcon, DarkModeIcon } from '../../assets';

export default function ColorModeToggler() {
  const { colorMode, toggleColorMode } = useColorMode();

  const handleColorToggle = (mode) => {
    if (mode !== colorMode) toggleColorMode();
    return;
  };

  return (
    <Box w="46px" bg="white" p={2} borderRadius="100px">
      <VStack gap={2}>
        <Icon
          as={LightModeIcon}
          boxSize="30px"
          onClick={() => handleColorToggle('light')}
          cursor="pointer"
          sx={
            colorMode !== 'light' && {
              path: { fill: '#b2abab' },
              rect: { fill: 'white' },
            }
          }
        />
        <Icon
          as={DarkModeIcon}
          boxSize="30px"
          onClick={() => handleColorToggle('dark')}
          cursor="pointer"
          sx={
            colorMode === 'dark' && {
              path: { fill: 'white' },
              // rect: { fill: 'blue' },
            }
          }
          bg={colorMode === 'dark' && 'primary'}
          borderRadius="100%"
          padding="5px"
        />
      </VStack>
    </Box>
  );
}
