import * as React from 'react';
import type { SvgProps } from 'react-native-svg';
import Svg, { Path, Rect } from 'react-native-svg';

export const Add = ({
  textColor = '#fff',
  color = '#087319',
  ...props
}: SvgProps & { textColor?: string }) => (
  <Svg width={46} height={46} viewBox="0 0 46 46" fill="none" {...props}>
    <Rect width={45.67} height={45.6684} rx={17} fill={color} />
    <Path
      d="M30.09 23c0 .379-.14.744-.402 1.01a1.337 1.337 0 01-.973.422h-5.497v5.704c0 .378-.145.744-.407 1.01a1.342 1.342 0 01-.967.416c-.364 0-.717-.152-.973-.417a1.44 1.44 0 01-.407-1.01v-5.703h-5.497c-.365 0-.717-.151-.973-.422a1.472 1.472 0 010-2.019c.256-.265.608-.417.973-.417h5.497V15.87c0-.378.146-.744.408-1.009a1.324 1.324 0 011.94 0c.26.265.406.63.406 1.01v5.703h5.497c.365 0 .718.151.973.416.262.272.402.631.402 1.01z"
      fill={textColor}
    />
  </Svg>
);
