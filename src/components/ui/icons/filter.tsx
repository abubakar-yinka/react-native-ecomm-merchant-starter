import * as React from 'react';
import type { SvgProps } from 'react-native-svg';
import Svg, { Path } from 'react-native-svg';

export function Filter({ color = '#5F9117', ...props }: SvgProps) {
  return (
    <Svg width={23} height={23} viewBox="0 0 23 23" fill="none" {...props}>
      <Path
        d="M8.313 18.07H1"
        stroke={color}
        strokeWidth={2}
        strokeLinecap="round"
      />
      <Path
        d="M21.475 18.07H8.313"
        stroke={color}
        strokeOpacity={0.59}
        strokeWidth={2}
        strokeLinecap="round"
      />
      <Path
        d="M11.469 17.931c0-1.87-1.505-3.386-3.36-3.386-1.856 0-3.36 1.516-3.36 3.386s1.504 3.387 3.36 3.387c1.855 0 3.36-1.517 3.36-3.387z"
        fill={color}
        stroke={color}
        strokeWidth={1.5}
      />
      <Path
        d="M14.162 4.247h7.313"
        stroke={color}
        strokeWidth={2}
        strokeLinecap="round"
      />
      <Path
        d="M1 4.247h13.162"
        stroke={color}
        strokeOpacity={0.59}
        strokeWidth={2}
        strokeLinecap="round"
      />
      <Path
        d="M11.006 4.386c0 1.87 1.505 3.387 3.36 3.387 1.856 0 3.36-1.517 3.36-3.387S16.222 1 14.366 1c-1.855 0-3.36 1.516-3.36 3.386z"
        fill={color}
        stroke={color}
        strokeWidth={1.5}
      />
    </Svg>
  );
}
