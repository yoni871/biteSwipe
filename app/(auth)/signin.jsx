import { View, Text, ScrollView, Image } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Link, router } from 'expo-router'
import { images, icons } from "../../constants"
import { FormField, CustomButton, CustomIcon } from "../../components"
import useFetch from '../../lib/useFetch'

const SignIn = () => {
  const [form, setForm] = useState({
    email: '',
    password: ''
  })

  const [isSumbitting, setIsSubmitting] = useState(false)

  const Submit = async () => {
    router.replace("/home");
  }

  return (
    <SafeAreaView className="bg-primary h-full">
      <ScrollView>
        <CustomIcon 
          title="Back Button"
          icon={icons.leftArrow}
          handlePress={() => {router.back()}}
          containerStyles="w-20 h-20"
          color="#E1D5CA"
        />

        <View className="w-full min-h-[60vh] px-4 justify-center">
          <Image source={images.logo} resizeMode='contain' className="w-[150px] h-[150px]"/>
          <Text className="font-pbold text-white text-2xl">
            Log in to biteswipe
          </Text>

          <FormField
            title="Email"
            value={form.email}
            handleChangeText={(e) => setForm({ ...form, email: e })}
            otherStyles="mt-7"
            keyboardType="email-address"
            placeholder="Email"
          />

          <FormField
            title="Password"
            value={form.password}
            handleChangeText={(e) => setForm({ ...form, password: e })}
            otherStyles="mt-7"
            placeholder="Password"
          />

          <CustomButton 
            title="Log In"
            handlePress={
              Submit
            }
            containerStyles="mt-8"
            isLoading={isSumbitting}
          />

          <View className="justify-center pt-5 flex-row">
            <Text className="text-lg font-pbold text-white">
              Don't have an account?{" "}
            </Text>
            <Link push href="/signup" className="text-lg font-pbold text-gold-light underline">Sign Up</Link>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default SignIn