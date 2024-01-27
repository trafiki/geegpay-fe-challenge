import React from 'react';
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
  Box,
  Text,
  Flex,
  Icon,
} from '@chakra-ui/react';
import {
  Marcus,
  Jaydon,
  Corey,
  Cooper,
  Philip,
  DownloadIcon,
} from '../../assets';
// import Marcus from '../../assets/marcus.svg';

export default function LastOrders() {
  const tableData = [
    {
      id: 1,
      name: 'Marcus Bergson',
      image: Marcus,
      Date: 'Nov 15, 2023',
      amount: '$80,000',
      status: 'Paid',
    },
    {
      id: 2,
      name: 'Jaydon Vaccaro',
      image: Jaydon,
      Date: 'Nov 15, 2023',
      amount: '$150,000',
      status: 'Refund',
    },
    {
      id: 3,
      name: 'Corey Schleifer',
      image: Corey,
      Date: 'Nov 14, 2023',
      amount: '$87,000',
      status: 'Paid',
    },
    {
      id: 4,
      name: 'Cooper Press',
      image: Cooper,
      Date: 'Nov 14, 2023',
      amount: '$100,000',
      status: 'Refund',
    },
    {
      id: 5,
      name: 'Phillip Lubin',
      image: Philip,
      Date: 'Nov 13, 2023',
      amount: '$78,000',
      status: 'Paid',
    },
  ];

  return (
    <Box
      bg="white"
      p="16px 20px"
      borderRadius="14px"
      border="1px solid #EDF2F7"
    >
      <Flex justify="space-between" align="center" mb={4}>
        <Text size="semibold18" color="secondary">
          Top Platform
        </Text>
        <Text size="medium18" color="primary">
          See All
        </Text>
      </Flex>
      <TableContainer>
        <Table variant="simple">
          <Thead>
            <Tr>
              <Th textTransform="none">
                <Text size="medium16">Name</Text>
              </Th>
              <Th textTransform="none">
                <Text size="medium16">Date</Text>
              </Th>
              <Th textTransform="none">
                <Text size="medium16">Amount</Text>
              </Th>
              <Th textTransform="none">
                <Text size="medium16">Status</Text>
              </Th>
              <Th textTransform="none">
                <Text size="medium16">Invoice</Text>
              </Th>
            </Tr>
          </Thead>
          <Tbody>
            {tableData.map((data) => (
              <Tr key={data.id}>
                <Td>
                  <Flex gap="10px" align="center">
                    <data.image />{' '}
                    <Text size="medium16" color="#3A3F51">
                      {data.name}
                    </Text>
                  </Flex>
                </Td>
                <Td>
                  <Text size="regular16">{data.Date}</Text>
                </Td>
                <Td>
                  <Text size="medium16" color="#0D062D">
                    {data.amount}
                  </Text>
                </Td>
                <Td>
                  <Text
                    size="regular16"
                    color={data.status === 'Paid' ? 'primary' : 'red'}
                  >
                    {data.status}
                  </Text>
                </Td>
                <Td>
                  <Flex gap="6px" align="center">
                    <DownloadIcon />{' '}
                    <Text size="regular16" color="#0D062D">
                      View
                    </Text>
                  </Flex>
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>
    </Box>
  );
}
