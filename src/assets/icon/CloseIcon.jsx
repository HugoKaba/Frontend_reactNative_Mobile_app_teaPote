import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
const CloseIcon = ({color = '#000', ...props}) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={15}
    height={15}
    fill="none"
    {...props}>
    <Path
      fill={color}
      d="M2.98.548A1.72 1.72 0 0 0 .548 2.98l4.52 4.52-4.52 4.52a1.722 1.722 0 1 0 2.432 2.432l4.52-4.52 4.52 4.52a1.721 1.721 0 0 0 2.432-2.432L9.932 7.5l4.52-4.52A1.72 1.72 0 0 0 12.58.149c-.211.094-.401.23-.559.399L7.5 5.068 2.98.548Z"
    />
  </Svg>
);
export default CloseIcon;
