import * as React from 'react';
import Svg, {Path, Rect} from 'react-native-svg';

const TimerIcon = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={94}
    height={94}
    fill="none"
    viewBox="0 0 74 74"
    {...props}>
    <Rect width={73} height={73} x={0.5} y={0.5} fill="#fff" rx={36.5} />
    <Rect width={73} height={73} x={0.5} y={0.5} stroke="#DDE0F3" rx={36.5} />
    <Path
      fill="#1C213C"
      fillRule="evenodd"
      d="M37 57c8.266 0 12.4 0 13.604-2.6.104-.224.19-.455.26-.692.82-2.774-2.104-5.99-7.948-12.42L39 37h-4l-3.916 4.286c-5.844 6.432-8.766 9.648-7.948 12.42.07.238.156.47.26.696C24.6 57 28.734 57 37 57Z"
      clipRule="evenodd"
    />
    <Path
      fill="#C1C6E2"
      d="M50.604 19.6C49.4 17 45.266 17 37 17c-8.266 0-12.4 0-13.604 2.6-.104.224-.19.455-.26.692-.82 2.774 2.104 5.99 7.948 12.42L35 37h4l3.916-4.286c5.844-6.432 8.766-9.648 7.948-12.42-.07-.24-.156-.47-.26-.694Z"
      opacity={0.5}
    />
  </Svg>
);
export default TimerIcon;
