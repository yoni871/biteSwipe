import { FlatList, StyleSheet, Text, TouchableOpacity, View, Image, ScrollView } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { router } from "expo-router";
import { icons } from "../../constants";
import { FormField, CustomButton, CustomIcon, HistoryCard } from "../../components"
import ReactImagePickerEditor, { ImagePickerConf } from 'react-image-picker-editor';


const Profile = () => {

  const CurrentUser = {
    // Users name goes here
    name : "Jungle Kok", 
    // Users profile picture goes here
    profilepic : "https://ew.com/thmb/BjUrPQmw5dJl5A2TD9BLfwAEcYE=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Jungkook-6837e9da24d24d428979a41d6df11012.jpg"
  }

  const logout = async () => {
    router.replace("//index");
  }

  const editprofile = async () => {
    router.navigate("/editprofile")
  }

  return (
    <SafeAreaView className="bg-primary h-full overscroll-none">
      {/* <FlatList
        data={places}
        keyExtractor={(item) => item.$id}
        renderItem={({ item }) => (
          <HistoryCard
            placename={item.placename}
            address = {item.address}
            datevisited = {item.datevisited}
            placephoto = {item.placephoto} />
        )}
      ListHeaderComponent={() => ( */}
        <View className="h-auto w-full flex justify-center items-center mt-12 mb-12 px-4">

          <View className="relative w-full flex flex-row">
            <View className="w-1/2 items-start">
              <Text className="text-3xl text-white font-pbold">biteswipe</Text>
            </View> 
          
            <View className="w-1/2 items-end">

              <View className="flex-row space-x-4">
                <TouchableOpacity
                  onPress={logout}
                  className="mb-10"
                  >
                    <Image
                      source={icons.logout}
                      resizeMode="contain"
                      className="w-6 h-6"
                      tintColor={"#FFBF10"}
                      />
                </TouchableOpacity>

                <TouchableOpacity
                  // onPress={logout}
                  className="flex mb-10"
                  >
                    <Image
                      source={icons.settings}
                      resizeMode="contain"
                      className="w-6 h-6"
                      tintColor={"#FFBF10"}
                      />
                  </TouchableOpacity>

              </View>
            </View>
          </View>

          <TouchableOpacity
            onPress={editprofile}>
          <View className="relative scale-150">
            <View className="w-20 h-20 border-2 border-amber-500 rounded-full flex justify-center items-center">
              <Image
                source={{ uri: CurrentUser.profilepic}}
                className="w-[95%] h-[95%] rounded-full"
                resizeMode="cover"
              />
            </View>

            <View 
            className="border-8 border-white bg-white rounded-full absolute right-0 top-0">
            <TouchableOpacity
              onPress={editprofile}>
                <Image
                  source={icons.edit}
                  resizeMode="contain"
                  className="w-2 h-2"
                  />
              </TouchableOpacity>
              </View>
          </View>
          </TouchableOpacity>

            <Text
             className="font-pbold text-4xl text-white mt-8">
              {CurrentUser.name}
            </Text>

            <View className="w-full items-start mt-6 mb-1">
              <Text className="text-4xl text-white font-pbold">History</Text>
            </View> 

            <View className="h-4/6 w-full rounded-xl">
              <ScrollView className="rounded-xl">
                <HistoryCard 
                  placename="McDonalds"
                  address = "3333 Random Adress Ave"
                  datevisited = "4/21/2024"
                  placephoto = "https://nationaltoday.com/wp-content/uploads/2022/08/27-McDonalds-Day-1200x834.jpg"
                  />
                <HistoryCard 
                  placename="McDonalds"
                  address = "3333 Random Adress Ave"
                  datevisited = "4/21/2024"
                  placephoto = "https://nationaltoday.com/wp-content/uploads/2022/08/27-McDonalds-Day-1200x834.jpg"
                  />
                <HistoryCard 
                  placename="McDonalds"
                  address = "3333 Random Adress Ave"
                  datevisited = "4/21/2024"
                  placephoto = "https://nationaltoday.com/wp-content/uploads/2022/08/27-McDonalds-Day-1200x834.jpg"
                  />   
                  <HistoryCard 
                  placename="McDonalds"
                  address = "3333 Random Adress Ave"
                  datevisited = "4/21/2024"
                  placephoto = "https://nationaltoday.com/wp-content/uploads/2022/08/27-McDonalds-Day-1200x834.jpg"
                  />  
                  <HistoryCard 
                  placename="McDonalds"
                  address = "3333 Random Adress Ave"
                  datevisited = "4/21/2024"
                  placephoto = "https://nationaltoday.com/wp-content/uploads/2022/08/27-McDonalds-Day-1200x834.jpg"
                  />  
                  <HistoryCard 
                  placename="McDonalds"
                  address = "3333 Random Adress Ave"
                  datevisited = "4/21/2024"
                  placephoto = "https://nationaltoday.com/wp-content/uploads/2022/08/27-McDonalds-Day-1200x834.jpg"
                  />                           
            </ScrollView>
            </View>

        </View>
      {/* )}
      /> */}
    </SafeAreaView>
  )
}

export default Profile

const styles = StyleSheet.create({})