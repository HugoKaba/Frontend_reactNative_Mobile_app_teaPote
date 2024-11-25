import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

const ProfilIcon = ({
  colorPrimary = '#1C213C',
  colorSecondary = '#C1C6E2',
  colorTertiary = '#fff',
  ...props
}) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={23}
    height={23}
    fill="none"
    {...props}>
    <Path
      fill={colorTertiary}
      opacity={0.5}
      d="M22.653 22.062a.877.877 0 0 1-.758.438H.875a.877.877 0 0 1-.758-1.314c1.668-2.883 4.237-4.95 7.236-5.93a7.883 7.883 0 1 1 8.064 0c2.998.98 5.568 3.047 7.235 5.93a.875.875 0 0 1 .001.876Z"
    />
    <Path
      fill={colorSecondary}
      d="M18.002 8.5a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z"
      opacity={0.5}
    />
    <Path
      fill={colorPrimary}
      d="M22.645 21.19c-1.666-2.88-4.233-4.946-7.23-5.925a7.876 7.876 0 1 0-8.057 0c-2.996.978-5.563 3.043-7.229 5.924a.875.875 0 1 0 1.515.876c2.06-3.562 5.703-5.689 9.743-5.689s7.682 2.127 9.743 5.689a.875.875 0 1 0 1.515-.876ZM5.261 8.5a6.126 6.126 0 1 1 6.126 6.126 6.132 6.132 0 0 1-6.126-6.125Z"
    />
  </Svg>
);
export default ProfilIcon;
