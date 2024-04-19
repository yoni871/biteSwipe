import { View, Text, FlatList, Image } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

import { CustomButton, RestaurantCard } from '../../components'
import { images, icons } from '../../constants'

const Home = () => {

  return (
    <SafeAreaView className="bg-primary h-full">
      <View className="flex my-6 px-4 space-y-6 w-full">
        <View className="justify-betweem flex-row">
            <Text className="text-3xl text-white font-pbold">biteswipe</Text>
        </View>

        <View className="bg-secondary px-4 py-4 w-full rounded-xl">
          <RestaurantCard/>
        </View>
      </View>
    </SafeAreaView>
  )
}

export default Home