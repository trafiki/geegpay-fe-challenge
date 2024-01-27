import React from 'react';
import { VStack, Flex, Text, Progress } from '@chakra-ui/react';

export default function TopPlatform() {
  const data = [
    {
      name: 'Book Bazaar',
      color: 'purple',
      amount: '$2,500,000',
      change: '+15%',
      progress: 50,
    },
    {
      name: 'Artisan Aisle',
      color: 'blue',
      amount: ' $1,800,000',
      change: '+10%',
      progress: 40,
    },
    {
      name: 'Toy Troop',
      color: 'orange',
      amount: ' $1,200,000',
      change: '+8%',
      progress: 28,
    },
    {
      name: 'XStore',
      color: 'red',
      amount: '$2,500,000',
      change: '+15%',
      progress: 28,
    },
  ];
  return (
    <Flex
      bg="white"
      p="16px 20px"
      borderRadius="14px"
      border="1px solid #EDF2F7"
      gap={5}
      direction="column"
    >
      <Flex justify="space-between" align="center">
        <Text size="semibold18" color="secondary">
          Top Platform
        </Text>
        <Text size="medium18" color="primary">
          See All
        </Text>
      </Flex>

      {data.map((item) => (
        <Flex gap={4} direction="column">
          <Text size="semibold18" color="#22242C">
            {item.name}
          </Text>
          <Progress
            value={item.progress}
            colorScheme={'primary'}
            borderRadius="40px"
            sx={{
              '& > div': {
                background: item.color,
              },
            }}
          />
          <Flex justify="space-between" align="center">
            <Text size="regular18">{item.amount}</Text>
            <Text size="regular18">{item.change}</Text>
          </Flex>
        </Flex>
      ))}
    </Flex>
  );
}
