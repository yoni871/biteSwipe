import Geolocation from '@react-native-community/geolocation';

const getLocation = () => {
    const requestPermission = () => {
        Geolocation.requestAuthorization('whenInUse').then((result) => {
          console.log('Authorization result:', result);
        });
      };
}