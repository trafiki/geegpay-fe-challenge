import { extendTheme } from '@chakra-ui/react';
import { globalStyles } from './styles';
import { headingStyles } from './components/heading';

const config = {
  initialColorMode: 'system',
  useSystemColorMode: true,
};

const theme = extendTheme(
  {
    semanticTokens: {
      colors: {
        ...globalStyles.colors,
      },
    },
  },
  globalStyles,
  headingStyles,
  { config },
);

export default theme;
