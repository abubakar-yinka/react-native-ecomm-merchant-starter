/* eslint-disable max-lines-per-function */
import { FlashList } from '@shopify/flash-list';
import React from 'react';
import { StyleSheet } from 'react-native';

import { type Product, type Rating, useCategories, useProducts } from '@/api';
import { CategoryCard } from '@/components/search/category-card';
import { ProductCard } from '@/components/search/product-card';
import {
  EmptyList,
  FocusAwareStatusBar,
  Input,
  Pressable,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from '@/components/ui';
import {
  Filter as FilterIcon,
  InputSearch as InputSearchIcon,
} from '@/components/ui/icons';
import {
  CATEGORY_MAPPING,
  CATEGORY_STYLES,
  useSearchStore,
} from '@/lib/store/search';

type ItemType = 'category' | 'product';
interface CategoryItem {
  type: ItemType;
  name: string;
  color: string;
  borderColor: string;
  image: any;
}

interface ProductItem {
  type: ItemType;
  title: string;
  id: number;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: Rating;
}

type MergedItem = CategoryItem | ProductItem;

function isCategoryItem(item: MergedItem): item is CategoryItem {
  return item.type === 'category';
}

function isProductItem(item: MergedItem): item is ProductItem {
  return item.type === 'product';
}

const Search = () => {
  const {
    data: categories,
    isPending: categoriesPending,
    isError: hasCategoriesError,
  } = useCategories();
  const {
    data: products,
    isPending: productsPending,
    isError: hasProductsError,
  } = useProducts();

  const {
    searchValue,
    searchHistory,
    setSearchValue,
    addToSearchHistory,
    clearSearchHistory,
  } = useSearchStore();

  if (hasCategoriesError || hasProductsError) {
    return (
      <View className="flex-1 items-center justify-center">
        <FocusAwareStatusBar />
        <Text className="text-base"> Error Loading data </Text>
      </View>
    );
  }

  const mergedList: MergedItem[] = [
    ...(categories || []).map((category: string, index: number) => ({
      type: 'category' as ItemType,
      name: CATEGORY_MAPPING[category as keyof typeof CATEGORY_MAPPING],
      ...CATEGORY_STYLES[index % CATEGORY_STYLES.length],
    })),
    ...(products || []).map((product: Product) => ({
      type: 'product' as ItemType,
      ...product,
    })),
  ];


  const filteredResult = mergedList.filter((item) => {
    const search = searchValue.toLowerCase();
    return (
      (isCategoryItem(item) && item.name.toLowerCase().includes(search)) ||
      (isProductItem(item) && item.title.toLowerCase().includes(search))
    );
  });

  const handleSearch = () => {
    if (searchValue.trim() === '') return;
    addToSearchHistory(searchValue);
    setSearchValue('');
  };

  return (
    <SafeAreaView className="mx-7 flex-1" edges={['top', 'left', 'right']}>
      <FocusAwareStatusBar />
      <View className="gap-10">
        <View className="flex-row items-center gap-5">
          <Input
            prependedIcon={<InputSearchIcon />}
            inputContainerClassName="flex-1 flex-row items-center gap-4 rounded-[10px] border border-[#EFEFEF] bg-[#FCFCFD] px-5 dark:border-neutral-700 dark:bg-neutral-800 dark:text-white"
            value={searchValue}
            placeholder="Search Categories or Products"
            style={{ color: '#FF882E5E' }}
            placeholderTextColor="#FF882E5E"
            onChangeText={(text) => setSearchValue(text)}
            onSubmitEditing={handleSearch}
          />
          <Pressable>
            <View
              className="rounded-[14px] bg-white px-[18px] py-4 dark:border-neutral-700 dark:bg-neutral-800"
              style={styles.shadow}
            >
              <FilterIcon />
            </View>
          </Pressable>
        </View>

        <View className="mb-2.5 flex-row items-center justify-between">
          <Text className="text-lg font-bold">Search History</Text>
          <TouchableOpacity onPress={clearSearchHistory}>
            <Text className="text-[#FF882EC2]">Clear</Text>
          </TouchableOpacity>
        </View>
      </View>
      {searchHistory.length > 0 && (
        <View className="mb-10">
          <FlashList
            data={searchHistory}
            keyExtractor={(_, index) => index.toString()}
            horizontal
            showsHorizontalScrollIndicator={false}
            renderItem={({ item }) => (
              <View className="p-1">
                <Text
                  className="p-1 text-sm font-medium text-[#8688897A]"
                  onPress={() => setSearchValue(item)}
                >
                  {item}
                </Text>
              </View>
            )}
          />
        </View>
      )}

      <FlashList
        data={filteredResult}
        keyExtractor={(_, index) => index.toString()}
        numColumns={2}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => {
          if (isCategoryItem(item)) {
            return (
              <CategoryCard
                borderColor={item.borderColor}
                color={item.color}
                image={item.image}
                name={item.name}
              />
            );
          }

          if (isProductItem(item)) {
            return (
              <ProductCard
                description={item.description}
                image={item.image}
                price={item.price}
                title={item.title}
              />
            );
          }

          return null;
        }}
        ListEmptyComponent={
          <EmptyList isLoading={categoriesPending || productsPending} />
        }
        estimatedItemSize={24}
        ItemSeparatorComponent={() => <View style={{ height: 15 }} />}
      />
    </SafeAreaView>
  );
};

export default Search;

const styles = StyleSheet.create({
  shadow: {
    shadowColor: '#E9EDF2',
    shadowOffset: { width: 0, height: 15 },
    shadowOpacity: 0.5,
    shadowRadius: 30,
    elevation: 10,
  },
});
