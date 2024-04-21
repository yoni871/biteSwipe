import { View, Text, ScrollView, Image, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { router } from 'expo-router'
import { images, icons } from "../../constants"
import { FormField, CustomButton, CustomIcon } from "../../components"

const EditProfile = () => {

  const CurrentUser = {
    // Users name goes here
    name : "Jungle Kok", 
    // Users profile picture goes here
    profilepic : "https://ew.com/thmb/BjUrPQmw5dJl5A2TD9BLfwAEcYE=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Jungkook-6837e9da24d24d428979a41d6df11012.jpg",
    username : "junglekok",
    email : "junglekok@bts.com"
  }

  const [form, setForm] = useState({
    username: '',
    email: '',
    password: ''
  })

  const [isSumbitting, setIsSubmitting] = useState(false)

  const Done = () => {
    router.replace("/profile")
  }
  return (
    <SafeAreaView className="bg-primary h-full">
      <ScrollView>

      <View className="relative w-full flex flex-row mt-5">
            <View className="w-full items-end">
              <TouchableOpacity
                  onPress={Done}
                  className="mr-7">
                <Text className="text-2xl text-amber-400 font-pbold">Done </Text>
              </TouchableOpacity>            
              </View> 
          </View>
        <View className="h-full w-full px-4 justify-center items-center">
          <View className="scale-150">
            <View className="w-20 h-20 border-2 border-amber-500 rounded-full flex justify-center items-center mb-4">
              <Image
                source={{ uri: CurrentUser.profilepic}}
                className="w-[95%] h-[95%] rounded-full"
                resizeMode="cover"
              />
            </View>
          </View>

            <View className="w-full items-start">
              <Text className="text-2xl text-white font-pbold">NAME</Text>
            </View> 
              <FormField
                title="Name"
                value={form.username}
                handleChangeText={(e) => setForm({ ...form, username: e })}
                otherStyles="mt-1"
                placeholder={CurrentUser.name}
              />

              <View className="w-full items-start mt-4">
                <Text className="text-2xl text-white font-pbold">USERNAME</Text>
              </View> 
              <FormField
                title="Username"
                value={form.username}
                handleChangeText={(e) => setForm({ ...form, username: e })}
                otherStyles="mt-1"
                placeholder={CurrentUser.username}
              />

            <View className="w-full items-start mt-4">
              <Text className="text-2xl text-white font-pbold">EMAIL</Text>
            </View> 
              <FormField
                title="Email"
                value={form.email}
                handleChangeText={(e) => setForm({ ...form, email: e })}
                otherStyles="mt-1"
                keyboardType="email-address"
                placeholder={CurrentUser.email}
              />

            </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default EditProfile