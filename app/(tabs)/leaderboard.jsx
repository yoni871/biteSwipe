import { View, Text, ScrollView, Image} from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { FormField, CustomButton, CustomIcon, HistoryCard } from "../../components"

const Leaderboard = () => {
  return (
    <SafeAreaView className="bg-primary h-1/2 h-full">
    <View className="bg-primary h-3/5 rounded-2xl z-40">
    <View className="flex-row justify-between rounded-3xl px-4 py-2">
          <View>
            <Text className="text-3xl text-white font-pbold">top 10</Text>
            <Text className="text-xl text-white font-pregular">month of april</Text>
          </View>
          {/* <CustomIcon 
            icon={icons.options}
            iconStyles={"w-[45px] h-[45px] rounded-2xl"}
          /> */}
    </View>
    <View className="w-full items-center">
    <View className="flex-col items-center">
      <View className="relative">
      <View className="w-20 h-20 border-2 border-[#d4af37] rounded-full flex justify-center items-center">
        <Image
          source={{ uri: "https://lh5.googleusercontent.com/p/AF1QipP_LYJ0sLIA5CT5tDL2qMqGiu4WcRZViGF6DhyM=w421-h240-k-no"}}
          className="w-[95%] h-[95%] rounded-full"
          resizeMode="cover"
        />
        </View>
          <View className="border-8 border-white bg-white rounded-full absolute right-0 top-0">
            <Text>#1</Text>
          </View>
      </View>
        <Text className="text-xl text-white font-pbold mt-2">McDonalds</Text>
        <Text className="text-xs text-white font-pbold">102 N University Ave</Text>
        <Text className="text-xl text-white font-pbold">38.8k pts</Text>
      </View>
    </View>
    <View className="items-center mt-5">
    <View className="w-5/6 flex-row">
      <View className="w-full items-start absolute">
      <View className="flex-col items-center">
      <View className="relative">
      <View className="w-20 h-20 border-2 border-[#C0C0C0] rounded-full flex justify-center items-center">
        <Image
          source={{ uri: "https://lh5.googleusercontent.com/p/AF1QipPqPwWGsb2syUwcMGjKt0rMGXnqy0BImhPn0EWQ=w408-h306-k-no"}}
          className="w-[95%] h-[95%] rounded-full"
          resizeMode="cover"
        />
        </View>
          <View className="border-8 border-white bg-white rounded-full absolute right-0 top-0">
            <Text>#2</Text>
          </View>
      </View>
        <Text className="text-xl text-white font-pbold mt-2">Chipotle</Text>
        <Text className="text-xs text-white font-pbold">2411 Glenna Goodacre</Text>
        <Text className="text-xl text-white font-pbold">35.5k pts</Text>
      </View>
    </View>
    <View className="absolute w-full items-end">
    <View className="flex-col items-center">
      <View className="relative">
      <View className="w-20 h-20 border-2 border-[#905923] rounded-full flex justify-center items-center">
        <Image
          source={{ uri: "https://lh5.googleusercontent.com/p/AF1QipON_xH0EDVrIQkiY5040-HhlW7mk3VfQdJCI1g=w408-h408-k-no"}}
          className="w-[95%] h-[95%] rounded-full"
          resizeMode="cover"
        />
        </View>
          <View className="border-8 border-white bg-white rounded-full absolute right-0 top-0">
            <Text>#3</Text>
          </View>
      </View>
        <Text className="text-xl text-white font-pbold mt-2">Canes</Text>
        <Text className="text-xs text-white font-pbold">907 Univeristy Ave</Text>
        <Text className="text-xl text-white font-pbold">29.8k pts</Text>
      </View>
      </View>
    </View>
    </View>

    </View>
    <View className="bg-primary-light h-full rounded-2xl">
      <ScrollView className="rounded-xl mb-96 px-3 mt-1">
                <HistoryCard 
                  placename="The Pecan Grill"
                  address = "2322 Mac Davis Ln"
                  datevisited = "#4"
                  placephoto = "https://lh5.googleusercontent.com/p/AF1QipPyyg6NCpU0i7i7-cCrgOH4HvCdRbqyrpM7DrkA=w408-h306-k-no"
                  />
                  <HistoryCard 
                  placename="Wrecked Burgers & Brews"
                  address = "2420 Broadway St"
                  datevisited = "#5"
                  placephoto = "https://lh5.googleusercontent.com/p/AF1QipMyfUmUWjmMGlCBiMUnn15XMd4AZss3B7v-aIm9=w457-h240-k-no"
                  />
                  <HistoryCard 
                  placename="BierHaus Lubbock"
                  address = "2009 Broadway St"
                  datevisited = "#6"
                  placephoto = "https://lh5.googleusercontent.com/p/AF1QipPvFEcCtrmrruTU9q-wYGe6M3DykZsoRhH7hrU2=w408-h304-k-no"
                  />
                  <HistoryCard 
                  placename="The Meltdown"
                  address = "607 Ave Q"
                  datevisited = "#7"
                  placephoto = "https://lh5.googleusercontent.com/p/AF1QipPUF-lEZZO1CfZ4-AyJ7qTN8PAQtbKqLsf_2B3A=w426-h240-k-no"
                  />
                  <HistoryCard 
                  placename="Taco Bell"
                  address = "402 Avenue Q"
                  datevisited = "#8"
                  placephoto = "https://lh5.googleusercontent.com/p/AF1QipNd3f9Zp9QjgrX6JpcD2IW8LqbdnBDCpg58Q_Y=w408-h306-k-no"
                  />
                  <HistoryCard 
                  placename="Burger King"
                  address = "1801 Marsha Sharp Fwy"
                  datevisited = "#9"
                  placephoto = "https://lh5.googleusercontent.com/p/AF1QipPQ-YaKJcxLWKpmAsj8MgkcMSVv1ggwRj9Uz-x0=w408-h305-k-no"
                  />
                  <HistoryCard 
                  placename="Wienerschnitzel"
                  address = "301 University Ave"
                  datevisited = "#10"
                  placephoto = "https://lh5.googleusercontent.com/p/AF1QipO3O7t0WwoK_tdBXKsJXH8LWZt6uAtpXazZkEgQ=w408-h251-k-no"
                  />
                  
      </ScrollView>
      </View>
    </SafeAreaView>

  )
}

export default Leaderboard