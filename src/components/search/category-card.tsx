import { Link } from 'expo-router';
import React from 'react';

import type { Category } from '@/api';
import { Image, Pressable, Text, View } from '@/components/ui';

type Props = Category;

const blurhash =
  '|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayfQfQM{M|azj[azf6fQfQfQIpWXofj[ayj[j[fQayWCoeoeaya}j[ayfQa{oLj?j[WVj[ayayj[fQoff7azayj[ayj[j[ayofayayayj[fQj[ayayj[ayfjj[j[ayjuayj[';

export const CategoryCard = ({ borderColor, color, image, name }: Props) => {
  return (
    <Link href="/search" asChild>
      <Pressable>
        <View
          className="flex h-[189.11px] w-[174.5px] items-center justify-center gap-9 overflow-hidden rounded-[18px] border px-6 py-7"
          style={{
            backgroundColor: color,
            borderColor: borderColor,
          }}
        >
          <Image
            source={image}
            style={{ flex: 1, width: '100%' }}
            placeholder={{ blurhash }}
            contentFit="contain"
            transition={1000}
          />

          <Text className="text-center text-base font-bold text-[#181725]">
            {name}
          </Text>
        </View>
      </Pressable>
    </Link>
  );
};
