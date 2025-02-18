import { View, Text, FlatList, Image, TouchableOpacity } from 'react-native'
import React, { useCallback }from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

import { CustomButton, CustomIcon, Restaurant } from '../../components'
import { images, icons } from '../../constants'
import ReactDOM from "react-dom";
import useFetch from '../../lib/useFetch'
import { router } from 'expo-router'


const Home = () => {
  const filters = [
    { key: '1', type: 'Mexican' },
    { key: '2', type: 'Asian' },
    { key: '3', type: 'Italian' },
    { key: '4', type: 'Fast-food' },
    { key: '5', type: 'Mediterranean' },
  ];

  const {data, loading, error, refetch,} = useFetch();

  const rest = <Restaurant/>

  const onRefresh = useCallback(() => {
    refetch()
  }, []);

  return (
    <SafeAreaView className="bg-primary h-full">
        {/* <CustomIcon 
          containerStyles={"border-8 border-white bg-white rounded-full absolute left-6 bottom-6 z-40 scale-150"}
          icon={icons.x}
          iconStyles={"w-7 h-7"}
          handlePress={onRefresh}
        />
        <CustomIcon
          containerStyles={"border-8 border-amber-500 bg-amber-500 rounded-full absolute right-6 bottom-6 z-40 scale-150"}
          icon={icons.heart}
          iconStyles={"w-7 h-7"}
          color={"#F4F4F5"}
          handlePress={onRefresh}
          loading={loading}
        /> */}
      <View className="flex my-6 space-y-1">
        <View className="flex-row justify-between rounded-3xl px-4 py-2">
          <View>
            <Text className="text-3xl text-white font-pbold">biteswipe</Text>
            <Text className="text-xl text-white font-pregular">Welcome, Yoo Min Park</Text>

          </View>
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
          {rest}
        </View>
      </View>
    </SafeAreaView>
  )
}


export default Home