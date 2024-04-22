import { View, Text, FlatList, Image, TouchableOpacity } from 'react-native'
import React, { useState, useEffect }from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import * as Location from 'expo-location'

import { CustomButton, CustomIcon, RestaurantCard } from '../../components'
import { images, icons } from '../../constants'
import useFetch from '../../lib/useFetch'

const Home = () => {
  const [location, setLocation] = useState(null);
  const {data: restaurant} = useFetch();

  useEffect(() => {
    (async () => {
      let _location = await Location.getCurrentPositionAsync({});
      setLocation(_location);
    }) ();
  }, []);

  const filters = [
    { key: '1', type: 'Mexican' },
    { key: '2', type: 'Asian' },
    { key: '3', type: 'Italian' },
    { key: '4', type: 'Fast-food' },
    { key: '5', type: 'Mediterranean' },
  ];



  return (
    <SafeAreaView className="bg-primary h-full">
        <View 
            className="border-8 border-white bg-white rounded-full absolute left-6 bottom-6 z-40 scale-150 ">
            <TouchableOpacity>
                <Image
                  source={icons.x}
                  resizeMode="contain"
                  className="w-7 h-7"
                  />
              </TouchableOpacity>
        </View>
        <View 
            className="border-8 border-amber-500 bg-amber-500 rounded-full absolute right-6 bottom-6 z-40 scale-150 ">
            <TouchableOpacity>
                <Image
                  source={icons.heart}
                  tintColor={"white"}
                  resizeMode="contain"
                  className="w-7 h-7 "
                  />
              </TouchableOpacity>
        </View>
      <View className="flex my-6 space-y-1">
        <View className="flex-row justify-between rounded-3xl px-4 py-2">
          <View>
            <Text className="text-3xl text-white font-pbold">biteswipe</Text>
            <Text className="text-xl text-white font-pregular">Welcome, Yoo Min Park</Text>
          </View>
          {/* <CustomIcon 
            icon={icons.options}
            iconStyles={"w-[45px] h-[45px] rounded-2xl"}
          /> */}
        </View>

        <View className="ml-4">
        <FlatList 
          data={filters}
          horizontal
          keyExtractor={(item) => item.$key}
          renderItem={({ item }) => (
            <CustomButton
              title={item.type}
              containerStyles={"w-[90px] h-1 border-2 border-white bg-primary mr-3 rounded-full"}
              textStyles={"text-white text-sm font-pregular"}
            />
          )}
        />
        </View>

        <View className="w-full">
          {restaurant && (
            <RestaurantCard
              restaurant={restaurant}
            />
          )}
        </View>
      </View>
    </SafeAreaView>
  )
}

export default Home