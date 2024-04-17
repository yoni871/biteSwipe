import { View, Text, Image } from 'react-native'
import { Tabs, Redirect } from 'expo-router';

import { icons } from '../../constants'

const TabIcon = ({ icon, color, focused }) => {
  return (
    <View className="items-center justify-center gap-1">
      <Image
        source={icon}
        resizeMode='contain'
        tintColor={color}
        className="w-8 h-8"
      />
    </View>
  )
}

const TabsLayout = () => {
  return (
    <>
      <Tabs
        screenOptions={{
          tabBarShowLabel: false
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
      </Tabs>
    </>
  )
}

export default TabsLayout