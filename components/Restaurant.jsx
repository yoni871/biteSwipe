import { View, Text, ActivityIndicator } from 'react-native'
import React, { useCallback } from 'react'

import { RestaurantCard, CustomButton } from '.'
import useFetch from '../lib/useFetch'

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
    </View>
  )
}

export default Restaurant