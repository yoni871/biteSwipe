import { View, Text, FlatList, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import * as Animatable from "react-native-animatable"

import { images } from '../constants'
import { getRandomRestaurants } from '../lib/fetchFunctions'
import useFetch from '../lib/useFetch'
import getLocation from '../lib/getLocation'
import { CustomButton } from '../components'

const RestaruantCard = () => {
  // const { data: test } = useFetch(getRandomRestaurants());

  return (
    <View>
      <CustomButton
        title="hi"
        handlePress={getLocation}
      />
    </View>
  )
}

export default RestaruantCard