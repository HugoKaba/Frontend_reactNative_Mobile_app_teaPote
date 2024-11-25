import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

const TeaLeave = color => {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" width={35} height={35} fill="none">
      <Path
        fill={color.color}
        d="M2.148 24.932c-.168-1.456-.476-5.152.672-6.272 0 0 4.508.56 7.952-.392C19.228 15.944 22.392 8.3 22.924.124 19.928 6.48 11.584 4.128 6.152 5.668 2.092 6.816.076 10.652.468 14.684c3.612-8.428 13.412-4.732 19.516-9.8C15.168 9.84 6.572 8.72 2.428 14.292 1.28 15.888.216 18.548.076 21.152c0 0-.168 2.576 2.072 3.78Z"
      />
    </Svg>
  );
};
export default TeaLeave;
