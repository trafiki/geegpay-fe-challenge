import React, { useState, useReducer } from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import faker from 'faker';
import { Box, Flex, Text, Select } from '@chakra-ui/react';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
);

const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
      display: false,
    },
    // title: {
    //   display: true,
    //   text: 'Chart.js Bar Chart',
    // },
  },
  scales: {
    x: {
      grid: {
        display: false,
      },
    },
    y: {
      border: {
        dash: [8, 5],
      },
      ticks: { stepSize: 10000 },
    },
  },
};

const labels = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec',
];

const data = {
  labels,
  datasets: [
    {
      data: labels.map(() => faker.datatype.number({ min: 0, max: 50000 })),
      backgroundColor: '#34CAA5',
      borderRadius: 100,
    },
  ],
};

export default function SalesTrends() {
  // border="1px solid #DADDDD"
  const [, forceUpdate] = useReducer((x) => x + 1, 0);
  const [selectedPeriod, setSelectedPeriod] = useState('weekly');
  const [re, setRe] = useState(false);

  const handleChange = (e) => {
    console.log('TARGETTT', e.target.value);
    setSelectedPeriod(e.target.value);
  };

  return (
    <Box
      bg="white"
      borderRadius="14px"
      p="16px 20px"
      border="1px solid #EDF2F7"
    >
      <Flex justify="space-between" align="center" mb={5}>
        <Text size="semibold18" color="secondary">
          Sales Trend
        </Text>
        <Select
          // placeholder="Select option"
          width="96px"
          borderRadius="20px"
          // size="md"
          borderColor="#DADDDD"
          _selected={{ borderColor: 'red' }}
          fontSize="12px"
          fontWeight="400"
          color="tertiary"
          onChange={handleChange}
          value={selectedPeriod}
        >
          <option value="daily">Daily</option>
          <option value="weekly">Weekly</option>
          <option value="monthly">Monthly</option>
          <option value="yearly">Yearly</option>
        </Select>
      </Flex>
      <Bar options={options} data={data} />
    </Box>
  );
}
