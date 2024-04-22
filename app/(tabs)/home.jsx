import { View, Text, FlatList, Image } from 'react-native'
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
      <View className="flex my-6 px-4 space-y-6">
        <View className="flex-row justify-between bg-primary-light rounded-3xl px-4 py-2">
          <View>
            <Text className="text-3xl text-white font-pbold">biteswipe</Text>
            <Text className="text-xl text-white font-pregular">Welcome, Yoo Min Park</Text>
          </View>
          {/* <CustomIcon 
            icon={icons.options}
            iconStyles={"w-[45px] h-[45px] rounded-2xl"}
          /> */}
        </View>

        <FlatList 
          data={filters}
          horizontal
          keyExtractor={(item) => item.$key}
          renderItem={({ item }) => (
            <CustomButton
              title={item.type}
              containerStyles={"w-[120px] h-[50px] bg-primary-light mr-3 rounded-3xl"}
              textStyles={"text-white text-l font-pregular"}
            />
          )}
        />

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