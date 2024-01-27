import { Global } from '@emotion/react';

/* Sales Trend  - 18, 600, 26 (#26282C)

    Dashboard - 20, 600, 28 (#26282C)

    Search - 16, 400, 24 (#A3A3A3)

    50,000 - 12, 600, 16 (#525252)

    Short by - 14, 500, 22 (#3A3F51)

    Weekly - 12, 400, 16 (#3A3F51)

    Jan - 14, 600, 22 (#525252)

    Invoice - 16, 500, 24 (#9CA4AB)

    Total Order - 18, 500, 26 (#898989)

    23,5% - 12, 500, 16 (#34CAA5)

    jakar (400, 500, 600)
    inter (400, 500)

*/

const Fonts = () => (
  <Global
    styles={`
    /* inter-regular - latin */
    @font-face {
      font-display: swap; 
      font-family: 'Inter';
      font-style: normal;
      font-weight: 400;
      src: url('./fonts/inter-v12-latin-regular.ttf') format('truetype');
    }
    /* inter-500 - latin */
    @font-face {
      font-display: swap; 
      font-family: 'Inter';
      font-style: normal;
      font-weight: 500;
      src: url('./fonts/inter-v12-latin-500.ttf') format('truetype');
    }
    /* plus-jakartasans-400 */
    @font-face {
      font-display: swap; 
      font-family: 'Plus Jakarta Sans';
      font-style: normal;
      font-weight: 400;
      src: url('./fonts/PlusJakartaSans-Regular.ttf') format('truetype');
    }
    /* plus-jakartasans-500 */
    @font-face {
      font-display: swap; 
      font-family: 'Plus Jakarta Sans';
      font-style: normal;
      font-weight: 500;
      src: url('./fonts/PlusJakartaSans-Medium.ttf') format('truetype');
    }
    /* plus-jakartasans-600 */
    @font-face {
      font-display: swap;
      font-family: 'Plus Jakarta Sans';
      font-style: normal;
      font-weight: 600;
      src: url('./fonts/PlusJakartaSans-SemiBold.ttf') format('truetype');
    }
      `}
  />
);

export default Fonts;