import * as React from 'react';

import { FocusAwareStatusBar, Text, View } from '@/components/ui';

const Trends = () => {
  return (
    <View className="flex-1 items-center justify-center">
      <FocusAwareStatusBar />
      <Text className="text-base">Trends Screen</Text>
    </View>
  );
};

export default Trends;
