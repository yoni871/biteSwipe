import { View, Text, TextInput, TouchableOpacity, Image} from 'react-native'
import React, { useState } from 'react'

import { icons } from "../constants";

const FormField = ({ title, value, placeholder, handleChangeText, otherStyles, ...props }) => {
  const [showPassword, setShowPassword] = useState(false)

  return (
    <View className={`space-y-2 ${otherStyles}`}>
      <View className="w-full min-h-[60px] rounded-2xl px-4 bg-primary-light flex flex-row items-center"> 
        <TextInput
          className="flex-1 text-white font-pregular text-lg"
          value={value}
          placeholder={placeholder}
          placeholderTextColor="#202224"
          onChangeText={handleChangeText}
          secureTextEntry={title === 'Password' && !showPassword}
        />

        {title === 'Password' && (
          <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
            <Image 
              source={ !showPassword ? icons.eye : icons.eyeHide } 
              className="w-6 h-6"
              resizeMode='contain'
            />
          </TouchableOpacity>
        )}
      </View>
    </View>
  )
}

export default FormField