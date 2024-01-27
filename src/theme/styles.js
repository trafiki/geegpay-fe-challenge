export const globalStyles = {
  fonts: {
    heading: `'Plus Jakarta Sans', sans-serif`,
    body: `'Plus Jakarta Sans', sans-serif`,
  },

  styles: {
    global: () => ({
      body: {
        overflowX: 'hidden',
        // bg: 'blackShade.1',
        fontFamily: 'Plus Jakarta Sans',
        // letterSpacing: '-0.5px',
        // fontSize: '1.6rem',
        // color: 'blackShade.4',
      },
      html: {
        fontFamily: 'Plus Jakarta Sans',
      },
    }),
  },
  breakpoints: { sm: '608px', md: '1000px', lg: '1200px', xl: '1400px' },

  colors: {
    primary: {
      default: '#34CAA5',
      _dark: '#34CAA5',
    },
    secondary: {
      default: '#26282C',
      _dark: '#3A3F51',
    },
    tertiary: {
      default: '#3A3F51',
    },
    transparent: 'transparent',
    black: '#000',
    white: '#fff',
    red: '#ED544E',
    purple: '#6160DC',
    blue: '#54C5EB',
    orange: '#FFB74A',
    neutral: {
      600: '#525252',
      500: '#737373',
      // 60: '#606060',
      400: '#898989',
      300: '#A3A3A3',
      200: '#EBECF2',
      100: '#FAFAFA',
    },
  },
};
