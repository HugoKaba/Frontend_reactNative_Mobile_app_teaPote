import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
const ShareIcon = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={32}
    height={32}
    viewBox="0 0 24 24"
    {...props}>
    <Path
      fill="#000"
      fillRule="evenodd"
      d="M16.5 2.25a3.25 3.25 0 0 0-3.2 3.824L8.57 9.386a.757.757 0 0 0-.068.053 3.25 3.25 0 1 0 0 5.121.755.755 0 0 0 .068.054l4.73 3.312a3.25 3.25 0 1 0 .617-1.4l-4.479-3.135c.2-.422.312-.893.312-1.391s-.112-.97-.312-1.391l4.48-3.136A3.25 3.25 0 1 0 16.5 2.25M14.75 5.5a1.75 1.75 0 1 1 3.5 0 1.75 1.75 0 0 1-3.5 0M6.5 10.25a1.75 1.75 0 1 0 0 3.5 1.75 1.75 0 0 0 0-3.5m10 6.5a1.75 1.75 0 1 0 0 3.5 1.75 1.75 0 0 0 0-3.5"
      clipRule="evenodd"
    />
  </Svg>
);
export default ShareIcon;
