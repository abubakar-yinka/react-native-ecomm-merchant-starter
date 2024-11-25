import * as React from 'react';
import type { SvgProps } from 'react-native-svg';
import Svg, { Path } from 'react-native-svg';

export function Order({ color = '#000', ...props }: SvgProps) {
  return (
    <Svg width={20} height={23} viewBox="0 0 20 23" fill="none" {...props}>
      <Path
        d="M15.935 1.525H4.015A2.384 2.384 0 001.63 3.909v15.497a2.384 2.384 0 002.384 2.385h11.921a2.384 2.384 0 002.385-2.385V3.91a2.384 2.384 0 00-2.385-2.384z"
        stroke={color}
        strokeOpacity={0.56}
        strokeWidth={1.96347}
      />
      <Path
        d="M6.398 7.486h7.153m-7.153 4.769h7.153m-7.153 4.768h4.769"
        stroke={color}
        strokeOpacity={0.56}
        strokeWidth={1.96347}
        strokeLinecap="round"
      />
    </Svg>
  );
}
