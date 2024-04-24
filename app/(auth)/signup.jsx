import React, { useState } from 'react';
import { View, Text, ScrollView, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { icons, images } from '../../constants';
import { Link, router } from 'expo-router'
import { FormField, CustomButton, CustomIcon } from '../../components';
import axios from 'axios';

axios.defaults.baseURL = 'http://153.33.75.161:5000';
axios.defaults.timeout = 10000;

const SignUp = () => {

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState(null);
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [form, setForm] = useState({
    username: '',
    email: '',
    password: ''
  }); 
  console.log(form);

  const handleSubmit = async () => {
    setIsSubmitting(true);
    try {
      const response = await axios.post('/signup', {
        username: form.username,
        email: form.email,
        password: form.password
      });
      console.log('User registered successfully:', response.data);
      setForm({ username: '', email: '', password: '' });
      router.replace("/home");
      setError(null);
    } catch (error) {
      console.error('Error registering user:', error);
      setError('Failed to register user. Please try again.');
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
            isLoading={isSubmitting}
          />


        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default SignUp