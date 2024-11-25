import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
const RightArrow = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={32}
    height={32}
    viewBox="0 0 24 24"
    {...props}>
    <Path
      fill="#000"
      fillRule="evenodd"
      d="M8.512 4.43a.75.75 0 0 1 1.057.082l6 7a.75.75 0 0 1 0 .976l-6 7a.75.75 0 0 1-1.138-.976L14.012 12 8.431 5.488a.75.75 0 0 1 .08-1.057"
      clipRule="evenodd"
    />
  </Svg>
);
export default RightArrow;
