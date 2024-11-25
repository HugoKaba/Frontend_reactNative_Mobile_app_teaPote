import * as React from 'react';
import Svg, {SvgProps, G, Path} from 'react-native-svg';
const SliderIcon = () => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={32}
    height={32}
    viewBox="0 0 256 256">
    <G fill="#000">
      <Path
        d="M128 80a24 24 0 1 1-24-24 24 24 0 0 1 24 24m40 72a24 24 0 1 0 24 24 24 24 0 0 0-24-24"
        opacity={0.2}
      />
      <Path d="M40 88h33a32 32 0 0 0 62 0h81a8 8 0 0 0 0-16h-81a32 32 0 0 0-62 0H40a8 8 0 0 0 0 16m64-24a16 16 0 1 1-16 16 16 16 0 0 1 16-16m112 104h-17a32 32 0 0 0-62 0H40a8 8 0 0 0 0 16h97a32 32 0 0 0 62 0h17a8 8 0 0 0 0-16m-48 24a16 16 0 1 1 16-16 16 16 0 0 1-16 16" />
    </G>
  </Svg>
);
export default SliderIcon;
