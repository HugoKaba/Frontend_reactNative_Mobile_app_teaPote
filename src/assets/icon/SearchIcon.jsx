import * as React from 'react';
import Svg, {G, Circle, Path} from 'react-native-svg';
const SearchIcon = () => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={32}
    height={32}
    viewBox="0 0 24 24">
    <G fill="none" stroke="#000" strokeWidth={1.5}>
      <Circle cx={11.5} cy={11.5} r={9.5} />
      <Path strokeLinecap="round" d="M18.5 18.5 22 22" />
    </G>
  </Svg>
);
export default SearchIcon;
