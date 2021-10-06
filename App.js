import React from 'react'
import { 
  View, 
  Text, 
  Button,
  StyleSheet, 
  useWindowDimensions,
  ImageBackground,
  ScrollView, 
  StatusBar
} from 'react-native'

import Locations from './src/Locations';


const App = () =>{
  const { width: windowWidth, height: windowHeight } = useWindowDimensions();
    return (
    <>
      <StatusBar barStyle= "light-content" />
      <ScrollView
        horizontal={true}
        pagingEnabled
        showsHorizontalScrollIndicator={false}
      >

        
        {Locations.map((location, index) => {
          if(location.weatherType == 'Night' ){
            bgImg = require('./assets/moon2.jpg');
          } else if(location.weatherType == 'Sunny'){
            bgImg = require('./assets/moon1.jpg');
          } else if(location.weatherType == 'Cloudy'){
            bgImg = require('./assets/moon1.jpg');
          } 
        })}

        <View style={{width: windowWidth, height:windowHeight}}>
          <ImageBackground
          source={require('./assets/moon1.jpg')}
          style={{flex: 1}}
          />
        </View>
        
        <View style={{width: windowWidth, height:windowHeight}}>
          <ImageBackground
          source={require('./assets/moon2.jpg')}
          style={{flex: 1}}
          />
        </View>

      </ScrollView>
    </>
  );
};

export default  App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
