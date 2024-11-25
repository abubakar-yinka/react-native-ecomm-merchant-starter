import * as React from 'react';
import type { SvgProps } from 'react-native-svg';
import Svg, { Circle, Path } from 'react-native-svg';

export function Profile({ color = '#000', ...props }: SvgProps) {
  return (
    <Svg
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className="lucide lucide-user"
      {...props}
    >
      <Path d="M19 21v-2a4 4 0 00-4-4H9a4 4 0 00-4 4v2" stroke={color} />
      <Circle cx={12} cy={7} r={4} stroke={color} />
    </Svg>
  );
}
