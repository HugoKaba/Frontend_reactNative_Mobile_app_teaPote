import * as React from 'react';
import Svg, {Ellipse, Path} from 'react-native-svg';

const SearchIcon = ({
  colorPrimary = '#C1C6E2',
  colorSecondary = '#1C213C',
  ...props
}) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={30}
    height={30}
    fill="none"
    viewBox="0 0 29 28"
    {...props}>
    <Ellipse
      cx={14}
      cy={13.5}
      fill={colorPrimary}
      opacity={0.5}
      rx={11}
      ry={10.5}
    />
    <Path
      fill={colorSecondary}
      fillRule="evenodd"
      d="M13.917 3.208a10.208 10.208 0 1 0 0 20.417 10.208 10.208 0 0 0 0-20.417ZM1.958 13.417c0-6.604 5.355-11.959 11.959-11.959 6.603 0 11.958 5.355 11.958 11.959 0 2.986-1.096 5.719-2.906 7.814l3.816 3.817a.876.876 0 1 1-1.237 1.237l-3.817-3.816a11.911 11.911 0 0 1-7.814 2.906c-6.604 0-11.959-5.355-11.959-11.958Z"
      clipRule="evenodd"
    />
  </Svg>
);
export default SearchIcon;
