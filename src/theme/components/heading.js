export const headingStyles = {
  components: {
    Text: {
      baseStyle: {
        fontFamily: 'Plus Jakarta Sans',
        color: 'neutral.400',
        fontSize: { base: '15px', md: '18px' },
        lineHeight: { base: '20px', md: '26px' },
        fontWeight: '500',
      },
      // font size and line height set for md. base and sm assumed till mobile is ready. Default text is body1
      sizes: {
        semibold18: {
          fontSize: { base: '16px', md: '20px' },
          fontWeight: { base: '600' },
          lineHeight: { base: '21px', md: '26px' },
        },
        regular18: {
          fontSize: { base: '15px', md: '18px' },
          fontWeight: { base: '400' },
          lineHeight: { base: '21px', md: '26px' },
          color: 'neutral.600',
        },
        regular16: {
          fontSize: { base: '13px', md: '16px' },
          fontWeight: { base: '400' },
          lineHeight: { base: '20px', md: '24px' },
          color: 'neutral.500',
        },
        regular12: {
          fontSize: { base: '10px', md: '12' },
          fontWeight: { base: '400' },
          lineHeight: { base: '13px', md: '16px' },
          color: 'tertiary',
        },
        medium18: {
          fontSize: { base: '15px', md: '18px' },
          lineHeight: { base: '21px', md: '26px' },
          color: '#9CA4AB',
        },
        medium16: {
          fontSize: { base: '13px', md: '16px' },
          lineHeight: { base: '20px', md: '24px' },
          color: '#9CA4AB',
        },
        medium12: {
          fontSize: { base: '10px', md: '12' },
          lineHeight: { base: '13px', md: '16px' },
        },
      },
    },
    Heading: {
      baseStyle: {
        fontFamily: 'Plus Jakarta Sans',
        fontSize: { base: '16px', md: '20px' },
        lineHeight: { base: '22px', md: '28px' },
        fontWeight: '600',
        color: 'secondary',
      },

      // font size and line height set for md. base and sm assumed till mobile is ready. Default heading is display2
      sizes: {
        semiBold24: {
          fontSize: { base: '20px', md: '24px' },
          lineHeight: { base: '26px', md: '32px' },
          fontWeight: '600',
          color: 'tertiary',
        },
        semiBold20: {
          fontSize: { base: '16px', md: '20px' },
          lineHeight: { base: '22px', md: '28px' },
          fontWeight: '600',
          color: 'secondary',
        },
      },
    },
  },
};
