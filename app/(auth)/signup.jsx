import { View, Text, ScrollView, Image, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { router } from 'expo-router'
import { images, icons } from "../../constants"
import { FormField, CustomButton, CustomIcon } from "../../components"
import axios from 'axios';

const SignUp = () => {
  const [form, setForm] = useState({
    username: '',
    email: '',
    password: ''
  })

  const [isSumbitting, setIsSubmitting] = useState(false)

  const handleSubmit = async () => {
    setIsSubmitting(true);
    try {
      await axios.post('/signup', form); 
      setForm({
        username: '',
        email: '',
        password: ''
      });
      console.log('User registered successfully');
    } catch (error) {
      console.error('Error registering user', error);
    } finally {
      setIsSubmitting(false);
    }
  };

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
            Sign up for biteswipe
          </Text>

          <FormField
            title="Username"
            value={form.username}
            handleChangeText={(e) => setForm({ ...form, username: e })}
            otherStyles="mt-7"
            placeholder="Username"
          />

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
            title="Sign Up"
            handlePress={handleSubmit}
            containerStyles="mt-8"
            isLoading={isSumbitting}
          />


        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default SignUp