import { View, Text, FlatList, Image, TouchableOpacity, ScrollView } from 'react-native'
import React, { useState, useEffect } from 'react'

import { images } from '../constants'
import { CustomIcon } from '../components'
import { icons } from '../constants'
import useFetch from '../lib/useFetch'
import { SafeAreaView } from 'react-native-safe-area-context'

const RestaruantCard = ({ restaurant }) => {
  const pictures = [
    { key: '1', uri: images.taco1},
    { key: '2', uri: images.taco2 },
    { key: '3', uri: images.taco3 }
  ];
  console.log(restaurant)
  return (
      <View className="rounded-3xl px-4 py-4 mb-[500px]">
        <View className="space-y-1 flex-col">
          <View className="flex-row space-x-3">
            <Text className="text-white text-3xl font-pbold">
            {restaurant?.name}
            </Text>
            <View className="w-1 h-1 border-8 border-green bg-green rounded-full mt-2"/>
          </View>
          <Text className="text-white text-base font-pregular">
            {restaurant?.location.address1}
          </Text>
          <Text className="text-white text-base font-pregular mb-2">
           {restaurant?.rating} ★ ({restaurant?.review_count} reviews) {restaurant?.price}
          </Text>
        </View>

        <FlatList
          className="mb-[40px] rounded-xl"
          data={pictures}
          keyExtractor={(item) => item.$key}
          scrollEnabled
          renderItem={({ item }) => (
            <Image
              source={item.uri}
              className="w-[360px] h-[300px] bg-primary rounded-xl mb-2 flex-1"
              resizeMode='cover'
            />
          )}
        />
      </View>
  );
};

export default RestaruantCard