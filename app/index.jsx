import { StatusBar } from 'expo-status-bar'
import React, { useState, useEffect } from 'react'
import { Text, ScrollView , View, Image } from 'react-native'
import { router } from 'expo-router'
import { SafeAreaView } from 'react-native-safe-area-context'
import { images } from '../constants'
import { CustomButton } from '../components'
import * as Location from 'expo-location'

export default function App() {
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync()
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
      console.log(location);
    }) ();
  }, []);

  return (
    <SafeAreaView className= "bg-primary h-full">
      <ScrollView contentContainerStyle={{ height: '100%', justifyContent: 'center', alignItems: 'center'}}>
        <View className= "w-full min-h-[85vh] justify-center items-center px-4">
          <Image
            source={images.logo}
            className="w-[175px] h-[175px]"
            resizeMode="contain"
          />

          <View className="relative items-center">
            <Text className="text-3xl font-pbold text-white text-center">
              Discover Local{"\n"}
              Food with{" "}
              <Text className="text-gold-light">biteswipe</Text>
            </Text>
            <Text className="text-base font-pregular text-white text-center mt-7">
              Don't know what to eat? Quickly find the best places to eat around town with biteswipe!
            </Text>
          </View>
          
          <CustomButton
              title="Continue with Email"
              handlePress={() => {router.push('/signin')}}
              containerStyles="w-full mt-5"
            />
        </View>
      </ScrollView>
      <StatusBar style='light'/>
    </SafeAreaView>
  );
}