import { Link } from 'expo-router';
import React from 'react';

import type { Product } from '@/api';
import { Image, Pressable, Text, View } from '@/components/ui';
import { Add as AddIcon } from '@/components/ui/icons';

type Props = Pick<Product, 'description' | 'image' | 'price' | 'title'>;

const blurhash =
  '|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayfQfQM{M|azj[azf6fQfQfQIpWXofj[ayj[j[fQayWCoeoeaya}j[ayfQa{oLj?j[WVj[ayayj[fQoff7azayj[ayj[j[ayofayayayj[fQj[ayayj[ayfjj[j[ayjuayj[';

export const ProductCard = ({ image, description, price, title }: Props) => {
  return (
    <Link href="/search" asChild>
      <Pressable>
        <View className="flex h-[249px] w-[170px] items-start gap-2 overflow-hidden rounded-[18px] border border-[#E2E2E2] pl-4 pt-3">
          <Image
            source={{ uri: image }}
            style={{
              flex: 1,
              width: 118.65,
              height: 100,
              margin: 'auto',
            }}
            placeholder={{ blurhash }}
            contentFit="contain"
            transition={1000}
          />

          <View>
            <View className="gap-2">
              <Text
                className="pr-2 text-base font-normal text-[#181725]"
                numberOfLines={1}
              >
                {title}
              </Text>
              <Text
                className="pr-2 text-xs font-normal text-[#7C7C7C]"
                numberOfLines={1}
              >
                {description}
              </Text>
              <Text className="text-base font-normal text-[#FD903E]">
                #{price}
              </Text>
            </View>

            <View className="mb-1.5 self-end">
              <AddIcon />
            </View>
          </View>
        </View>
      </Pressable>
    </Link>
  );
};
