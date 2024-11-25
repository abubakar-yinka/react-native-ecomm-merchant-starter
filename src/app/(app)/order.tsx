import * as React from 'react';

import { FocusAwareStatusBar, Text, View } from '@/components/ui';

const Order = () => {
  return (
    <View className="flex-1 items-center justify-center">
      <FocusAwareStatusBar />
      <Text className="text-base">Order Screen</Text>
    </View>
  );
};

export default Order;
