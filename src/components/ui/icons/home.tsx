import * as React from 'react';
import type { SvgProps } from 'react-native-svg';
import Svg, { Path } from 'react-native-svg';

export function Home({ color = '#000', ...props }: SvgProps) {
  return (
    <Svg width={27} height={25} viewBox="0 0 27 25" fill="none" {...props}>
      <Path
        d="M3.963 9.415l9.541-6.872 9.541 6.872v10.8c0 .52-.223 1.02-.62 1.388a2.21 2.21 0 01-1.5.575H6.083a2.21 2.21 0 01-1.5-.575 1.893 1.893 0 01-.62-1.389V9.415z"
        stroke={color}
        strokeOpacity={0.56}
        strokeWidth={1.96347}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M10.324 22.178V12.36h6.36v9.818"
        stroke={color}
        strokeOpacity={0.56}
        strokeWidth={1.96347}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}
