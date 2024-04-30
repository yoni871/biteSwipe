import { View, Text, ActivityIndicator, TouchableOpacity, Image} from 'react-native'
import React, { useCallback } from 'react'

import { RestaurantCard, CustomButton, CustomIcon } from '.'
import useFetch from '../lib/useFetch'
import { images, icons } from '../constants'


const Restaurant = () => {
  const {data, loading, error, refetch} = useFetch();

  const onRefresh = useCallback(() => {
    refetch()
  }, []);

  return (
    <View>
		{loading ? (
       		<ActivityIndicator size='large' color="#36383A" />
		) : error ? (
			<View className="py-6 justify-center items-center flex">
				<Text className="text-3xl text-white font-pbold ">Something went wrong</Text>
				<CustomButton 
					title='Refresh'
					handlePress={onRefresh}
				/>
			</View>
		) : (
			<RestaurantCard restaurant={data}/>
		)}
		<CustomIcon 
          containerStyles={"border-8 border-white bg-white rounded-full absolute left-6 top-80 scale-150"}
          icon={icons.x}
          iconStyles={"w-7 h-7"}
          handlePress={onRefresh}
        />
        <CustomIcon
          containerStyles={"border-8 border-gold-light bg-gold-light rounded-full absolute right-6 top-80 scale-150"}
          icon={icons.heart}
          iconStyles={"w-7 h-7"}
          color={"#F4F4F5"}
          handlePress={onRefresh}
          loading={loading}
        />
    </View>
  )
}

export default Restaurant