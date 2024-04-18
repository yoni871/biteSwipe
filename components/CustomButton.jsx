import { TouchableOpacity, Text } from 'react-native'
import React from 'react'

const CustomButton = ({ title, handlePress, containerStyles, textStyles, isLoading }) => {
  return (
    <TouchableOpacity 
      className={`bg-gold-bright rounded-xl min-h-[60px] justify-center items-center
      ${containerStyles} ${isLoading ? 'opacity-70' : ''}`}
      onPress={handlePress}
      activeOpacity={0.7}
      disabled={isLoading}
    >
      <Text className="text-secondary text-lg font-pbold">{title}</Text>
    </TouchableOpacity>
  )
}

export default CustomButton