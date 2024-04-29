import { TouchableOpacity, Image } from 'react-native'
import React from 'react'

const CustomIconButton = ({ icon, color, containerStyles, iconStyles, handlePress, loading }) => {
  return (
    <TouchableOpacity 
      className={`justify-center items-center ${containerStyles} ${loading ? 'opacity-70' : ''}`}
      onPress={handlePress}
      activeOpacity={0.7}
      disabled={loading}
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