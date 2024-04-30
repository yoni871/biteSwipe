import { FlatList, StyleSheet, Text, TouchableOpacity, View, Image, ScrollView } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Link, router } from 'expo-router'
import { icons } from "../../constants";
import { FormField, CustomButton, CustomIcon, HistoryCard } from "../../components"


const LikedRestaurants = () => {

  return (
    <SafeAreaView className="bg-primary h-full overscroll-none">
        <View className="h-auto w-full flex justify-center items-center mt-12 mb-12 px-4">

          <View className="relative w-full flex flex-row">
            <View className="w-1/2 items-start">
              <Text className="text-3xl text-white font-pbold">biteswipe</Text>
            </View> 
            </View>

          <View className="my-20">
            <Text className="text-4xl text-white font-pbold">Liked</Text>
          </View>
              
             

            <View className="h-4/6 w-full rounded-xl">
              <ScrollView className="rounded-xl">
                <HistoryCard 
                  placename="McDonalds"
                  address = "102 N University Ave"
                  datevisited = "4/21/2024"
                  placephoto = "https://lh5.googleusercontent.com/p/AF1QipP_LYJ0sLIA5CT5tDL2qMqGiu4WcRZViGF6DhyM=w421-h240-k-no"
                  />
                <HistoryCard 
                  placename="McDonalds"
                  address = "102 N University Ave"
                  datevisited = "4/20/2024"
                  placephoto = "https://lh5.googleusercontent.com/p/AF1QipP_LYJ0sLIA5CT5tDL2qMqGiu4WcRZViGF6DhyM=w421-h240-k-no"
                  />
                <HistoryCard 
                  placename="Canes"
                  address = "907 University Ave"
                  datevisited = "4/19/2024"
                  placephoto = "https://lh5.googleusercontent.com/p/AF1QipON_xH0EDVrIQkiY5040-HhlW7mk3VfQdJCI1g=w408-h408-k-no"
                  />   
                  <HistoryCard 
                  placename="Chipotle"
                  address = "2411 Glenna Goodacre"
                  datevisited = "4/18/2024"
                  placephoto = "https://lh5.googleusercontent.com/p/AF1QipPqPwWGsb2syUwcMGjKt0rMGXnqy0BImhPn0EWQ=w408-h306-k-no"
                  />  
                  <HistoryCard 
                  placename="The Pecan Grill"
                  address = "2322 Mac Davis Ln"
                  datevisited = "4/17/2024"
                  placephoto = "https://lh5.googleusercontent.com/p/AF1QipPyyg6NCpU0i7i7-cCrgOH4HvCdRbqyrpM7DrkA=w408-h306-k-no"
                  />  
                  <HistoryCard 
                  placename="Taco Bell"
                  address = "402 Avenue Q"
                  datevisited = "4/16/2024"
                  placephoto = "https://lh5.googleusercontent.com/p/AF1QipNd3f9Zp9QjgrX6JpcD2IW8LqbdnBDCpg58Q_Y=w408-h306-k-no"
                  />                           
            </ScrollView>
            </View>

        </View>

    </SafeAreaView>
  )
}

export default LikedRestaurants;
