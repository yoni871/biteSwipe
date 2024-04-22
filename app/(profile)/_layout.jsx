import { Stack } from 'expo-router'
import { StatusBar } from 'expo-status-bar'

const ProfileLayout = () => {
  return (
    <>
      <Stack>
        <Stack.Screen 
          name="editprofile"
          options={{
            headerShown: false
          }}
        />

        <Stack.Screen 
          name="settings"
          options={{
            headerShown: false
          }}
        />
      </Stack>
      <StatusBar style="light"/>
    </>
  )
}

export default ProfileLayout