import { TouchableOpacity, Image } from 'react-native'
import React from 'react'

const CustomIconButton = ({ icon, color, containerStyles, iconStyles, handlePress, isLoading }) => {
  return (
    <TouchableOpacity 
      className={`justify-center items-center ${containerStyles} ${isLoading ? 'opacity-70' : ''}`}
      onPress={handlePress}
      activeOpacity={0.7}
      disabled={isLoading}
    >
      <Image 
        source={icon}
        resizeMode='contain'
        tintColor={color}
        className={`${iconStyles}`}
      />
    </TouchableOpacity>
  )
}

export default CustomIconButton