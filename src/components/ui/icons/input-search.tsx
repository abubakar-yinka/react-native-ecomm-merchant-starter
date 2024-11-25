import * as React from 'react';
import Svg, { Circle, Path, type SvgProps } from 'react-native-svg';

export const InputSearch = (props: SvgProps) => (
  <Svg
    width={16}
    height={16}
    viewBox="0 0 24 24"
    fill="none"
    stroke="#ff882e"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    className="lucide lucide-search"
    {...props}
  >
    <Circle cx={11} cy={11} r={8} />
    <Path d="M21 21l-4.3-4.3" />
  </Svg>
);
