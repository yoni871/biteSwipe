import { TouchableOpacity, Text } from 'react-native'
import React from 'react'

const CustomButton = ({ title, handlePress, containerStyles, textStyles, isLoading }) => {
  return (
    <TouchableOpacity 
      className={`bg-gold-light rounded-xl min-h-[60px] justify-center items-center
      ${containerStyles} ${isLoading ? 'opacity-70' : ''}`}
      onPress={handlePress}
      activeOpacity={0.7}
      disabled={isLoading}
    >
      <Text className={`text-secondary text-lg text-primary font-pbold ${textStyles}`}>{title}</Text>
    </TouchableOpacity>
  )
}

export default CustomButton