import { StatusBar } from 'expo-status-bar';
import { Text, ScrollView , View, Image } from 'react-native';
import { Link } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import { images } from '../constants';
import { CustomButton } from '../components';

export default function App() {
  return (
    <SafeAreaView className= "bg-primary h-full">
      <ScrollView contentContainerStyle={{ height: '100%', justifyContent: 'center', alignItems: 'center'}}>
        <View className= "w-5/6 h-5/6 justify-center items-center px-5 bg-secondary rounded-2xl">
          <Image
            source={images.logo}
            className="w-[200px] h-[150]"
            resizeMode="contain"
          />
          <View className="relative mt-5 items-center">
            <Text className="text-2xl font-bold text-white text-center">
              Discover Local Restaurants Around You Now!
            </Text>
            <Text className="font-sm font-pregular text-white text-center mt-3">
              Yoo Min Park is gay!!!!!!!
            </Text>
            <CustomButton/>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}