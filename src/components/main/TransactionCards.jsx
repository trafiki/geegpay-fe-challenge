import React from 'react';
import { SimpleGrid, Box, Flex, Text, Icon, Heading } from '@chakra-ui/react';
import {
  TrendingUpGraph,
  TrendingDownGraph,
  TrendingUp,
  TrendingDown,
  OrderIcon,
  RefundIcon,
  SalesIcon,
  IncomeIcon,
} from '../../assets';

const TransactionCard = ({ trxInfo }) => {
  const { title, icon, change, amount } = trxInfo;

  const graph =
    change === 'positive' ? <TrendingUpGraph /> : <TrendingDownGraph />;
  const trendIcon = change === 'positive' ? <TrendingUp /> : <TrendingDown />;

  const percentageChangeColor = change === 'positive' ? 'primary' : 'red';
  const percentageChangeBg = change === 'positive' ? '#34CAA51F' : '#ED544E1F';

  return (
    <Flex
      border="1px solid #EDF2F7"
      bg="white"
      borderRadius="14px"
      padding={4}
      gap="10px"
      flexDirection="column"
    >
      <Flex justify="space-between" align="center">
        <Icon
          as={icon}
          borderRadius="100%"
          border="1px solid #DADDDD"
          boxSize={10}
          padding={2}
        />
        {graph}
      </Flex>

      <Text>{title}</Text>

      <Heading size="semiBold24">{amount}</Heading>

      <Flex gap="10px" align="center">
        <Flex
          bg={percentageChangeBg}
          p="4px 8px"
          borderRadius="100px"
          align="center"
          gap="6px"
        >
          {trendIcon}
          <Text size="medium12" color={percentageChangeColor}>
            23.5
          </Text>
        </Flex>
        <Text
          fontSize="14px"
          fontWeight="400"
          lineHeight="17px"
          fontFamily="inter"
          color="#606060"
        >
          vs. previous month
        </Text>
      </Flex>
    </Flex>
  );
};

const data = [
  {
    id: '1',
    title: 'Total Order',
    amount: '350',
    icon: OrderIcon,
    change: 'positive',
  },
  {
    id: '2',
    title: 'Total Refund',
    amount: '270',
    icon: RefundIcon,
    change: 'negative',
  },
  {
    id: '3',
    title: 'Sales Sals',
    amount: '1567',
    icon: SalesIcon,
    change: 'negative',
  },
  {
    id: '4',
    title: 'Total Income',
    amount: '$350,000',
    icon: IncomeIcon,
    change: 'positive',
  },
];

export default function TransactionCards() {
  return (
    <SimpleGrid columns={{ base: 1, md: 2 }} spacing={4}>
      {data.map((item) => (
        <TransactionCard trxInfo={item} key={item.id} />
      ))}
    </SimpleGrid>
  );
}
