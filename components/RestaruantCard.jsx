import { View, Text, FlatList, Image, TouchableOpacity } from 'react-native'
import React, { useState, useEffect } from 'react'

import { images } from '../constants'
import { CustomIcon } from '../components'
import { icons } from '../constants'
import useFetch from '../lib/useFetch'

const RestaruantCard = ({ restaurant }) => {
  const pictures = [
    { key: '1', uri: images.taco1 },
    { key: '2', uri: images.taco2 },
    { key: '3', uri: images.taco3 }
  ];

  console.log(restaurant);

  return (
      <View className="rounded-3xl px-4 py-4">
        <View className="space-y-1 flex-col">
          <View className="flex-row space-x-3">
            <Text className="text-white text-3xl font-pbold">
              Taqueria Autlan
            </Text>
            <View className="w-1 h-1 border-8 border-green bg-green rounded-full mt-2"/>
          </View>
          <Text className="text-white text-base font-pregular">
            3333 Random St Address
          </Text>
          <Text className="text-white text-base font-pregular mb-2">
           4.2 (131 ratings) 
          </Text>
        </View>


        <FlatList
          className="mb-96 rounded-xl"
          data={pictures}
          keyExtractor={(item) => item.$key}
          renderItem={({ item }) => (
            <Image
              source={item.uri}
              className="w-[400px] h-[400px] bg-primary "
              resizeMode='cover'
            />
          )}
        />

        <View className="px-4 py-4 flex-row justify-between">
          <CustomIcon
            icon={icons.x}
            iconStyles={"w-[45px] h-[45px] bg-red rounded-full "}

          />

          <CustomIcon 
            icon={icons.heart}
            iconStyles={"w-[45px] h-[45px] bg-green rounded-full "}
          />

        </View>
      </View>
  );
};

export default RestaruantCard