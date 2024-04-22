import { View, Text, FlatList, Image, TouchableOpacity } from 'react-native'
import React, { useState, useEffect } from 'react'
import * as Animatable from "react-native-animatable"

import { images } from '../constants'
import { CustomIcon } from '../components'
import { icons } from '../constants'

const Photos = ({ item }) => {
  return (
    <Animatable
    className="mr-5"
    >
      <TouchableOpacity
        className="flex justify-center items-center"
        activeOpacity={0.7}
      >
        <Image
          source={images.burger}
        />
      </TouchableOpacity>
    </Animatable>
  );
};

const RestaruantCard = ({ restaurant }) => {
  const pictures = [
    { key: '1', uri: images.taco1 },
    { key: '2', uri: images.taco2 },
    { key: '3', uri: images.taco3 }
  ];

  return (
      <View className="bg-primary-light rounded-3xl px-4 py-4">
        <View className="space-y-1">
          <Text className="text-white text-3xl font-pbold">
            Taqueria Autlan
          </Text>
          <Text className="text-white text-base font-pregular">
            4.2 (131 ratings)
          </Text>
          <Text className="text-white text-base font-pbold">
            $ | Mexican
          </Text>
        </View>


        <FlatList
          data={pictures}
          horizontal
          keyExtractor={(item) => item.$key}
          renderItem={({ item }) => (
            <Image
              source={item.uri}
              className="w-[325px] h-[325px] mr-5 bg-primary rounded-3xl"
              resizeMode='contain'
            />
          )}
        />

        <View className="px-4 py-4 flex-row justify-between">
          <CustomIcon
            icon={icons.x}
            iconStyles={"w-[45px] h-[45px] bg-red rounded-2xl "}

          />

          <CustomIcon 
            icon={icons.heart}
            iconStyles={"w-[45px] h-[45px] bg-green rounded-2xl "}
          />

        </View>
      </View>
  );
};

export default RestaruantCard