import { TouchableOpacity, Text, View, Image } from 'react-native'
import React from 'react'

const HistoryCard = ({ placename, address, datevisited, placephoto}) => {
  return (
    <TouchableOpacity className="h-20 w-full bg-[#36383A] rounded-2xl flex flex-row items-center mb-1">
        <Image 
            source={ {uri: placephoto} }
            resizeMode="cover"
            className="w-full h-full rounded-2xl opacity-25" />

        <View className="w-1/2 flex-col absolute px-4 items-start">
            <Text className="text-2xl text-white font-pbold"
                >{placename}</Text>
            <Text className="text-l text-white font-pbold"
                >{address}</Text>    
        </View>
        <View className="w-full absolute items-end px-4">
            <Text className="text-2xl text-white font-pbold"
                >{datevisited}</Text>    
        </View>
    </TouchableOpacity>
  )
}
export default HistoryCard