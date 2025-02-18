import { View, Text, Image } from 'react-native'
import { Tabs, Redirect } from 'expo-router';
import { StatusBar } from 'expo-status-bar'

import { icons } from '../../constants'

const TabIcon = ({ icon, color, focused }) => {
  return (
    <View className="items-center justify-center gap-1">
      <Image
        source={icon}
        resizeMode='contain'
        tintColor={color}
        className="w-7 h-7"
      />
    </View>
  )
}

const TabsLayout = () => {
  return (
    <>
      <Tabs
        screenOptions={{
          tabBarShowLabel: false,
          tabBarActiveTintColor: "#FFBF10",
          tabBarInactiveTintColor: "#C49450",
          tabBarStyle: {
            backgroundColor: "#36383A",
            height: 80,
          }
        }}
      >
        <Tabs.Screen 
          name="home"
          options={{
            title: 'Home',
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <TabIcon 
                icon={icons.restaurant}
                color={color}
                focused={focused}
              />
            )
          }}
        />
        <Tabs.Screen 
          name="leaderboard"
          options={{
            title: 'Leaderboard',
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <TabIcon 
                icon={icons.leaderboard}
                color={color}
                focused={focused}
              />
            )
          }}
        />
        <Tabs.Screen 
          name="profile"
          options={{
            title: 'Profile',
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <TabIcon 
                icon={icons.profile}
                color={color}
                focused={focused}
              />
            )
          }}
        />
      
      <Tabs.Screen 
          name="LikedRestaurants"
          options={{
            title: 'LikedRestaurants',
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <TabIcon 
                icon={icons.heart}
                color={color}
                focused={focused}
              />
            )
          }}
        />
      </Tabs>
      <StatusBar style="light"/>
    </>
  )
}

export default TabsLayout