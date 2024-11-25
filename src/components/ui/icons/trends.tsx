import * as React from 'react';
import type { SvgProps } from 'react-native-svg';
import Svg, { Path } from 'react-native-svg';

export function Trends({ color = '#000', ...props }: SvgProps) {
  return (
    <Svg width={20} height={21} viewBox="0 0 20 21" fill="none" {...props}>
      <Path
        d="M17.4 1.507H2.674A1.473 1.473 0 001.2 2.979v14.726a1.473 1.473 0 001.473 1.473H17.4a1.472 1.472 0 001.472-1.473V2.98A1.472 1.472 0 0017.4 1.507z"
        stroke={color}
        strokeOpacity={0.56}
        strokeWidth={1.96347}
        strokeLinejoin="round"
      />
      <Path
        d="M4.853 13.207L7.63 10.43l2.154 2.148 5.161-5.18"
        stroke={color}
        strokeOpacity={0.56}
        strokeWidth={1.96347}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M11.018 7.397h3.927v3.927"
        stroke={color}
        strokeOpacity={0.56}
        strokeWidth={1.96347}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}
