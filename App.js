import React, { useRef } from 'react';
import { 
  View, 
  Text, 
  Button,
  StyleSheet, 
  useWindowDimensions,
  ImageBackground,
  ScrollView, 
  StatusBar, 
  Animated,
  
} from 'react-native'



import Locations from './src/Locations';


const App = () =>{
  const { width: windowWidth, height: windowHeight } = useWindowDimensions();
  const scrollX = useRef( new Animated.Value(0)).current;
    return (
    <>
      <StatusBar barStyle= "light-content" />
      <ScrollView
        horizontal={true}
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onScroll={Animated.event(
          [
            {
              nativeEvent: {
                contentOffset:{
                  x: scrollX
                },
              },
            },
          ], {useNativeDriver: false}
        )} 
        scrollEventThrottle= {1}
      >

        
        {Locations.map((location, index) => {
          if(location.weatherType == 'Night' ){
            bgImg = require('./assets/moon2.jpg');
          } else if(location.weatherType == 'Sunny'){
            bgImg = require('./assets/moon1.jpg');
          } else if(location.weatherType == 'Cloudy'){
            bgImg = require('./assets/moon1.jpg');
          } 

          return(
            <View 
              style={{width: windowWidth, height:windowHeight}}
              key={index}>
              <ImageBackground
                source={bgImg}
                style={{
                          flex: 1
                        }}>
              <View
                style={{
                          backgroundColor: 'rgba(0,0,0,0.1)',
                          flex: 1,
                          padding:20
                  
                }}>
              <View style={styles.topInfoWrapper}>
                <View>
                <Text style={styles.city}> {location.city}</Text>
                <Text style={styles.dateTime}> {location.dateTime}</Text>
                </View>

                <View>
                  <Text style={styles.temperature}>{location.temperature}</Text>
                </View>

              </View>
              <View style={{borderBottomColor:'rgba(255,255,255,0.7)',marginTop:20, borderBottomWidth:1}}></View>
              <View style={styles.bottonInfoWrapper}></View>
              </View>
              </ImageBackground>
            </View>
          );
        })}
      </ScrollView>

   
        <View 
        style={styles.indicatorWrapper}>
 
        {Locations.map((location, index) => {
          const width = scrollX.interpolate(
            {
                 inputRange: [
                  windowWidth * (index - 1),
                  windowWidth * index,
                  windowWidth * (index + 1),
                 ],

                 outputRange: [
                   5, 12, 5
                 ],
                 extrapolate: 'clamp'
            }
          );

          return( <Animated.View 
          key={index}
          style = {[styles.normalDot, {width}]}
          />
          );
        })}  
        </View>

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

  normalDot: {
    height: 5,
    width:5,
    borderRadius: 4,
    marginHorizontal:4, 
    backgroundColor: 'white'
  },

  indicatorWrapper: {
    position:'absolute',
    top: 60,
    left: 20,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  topInfoWrapper: {
    flex: 1,
    marginTop: 110,
    justifyContent: 'space-between' 
  },
  bottomInfoWrapper: {

  },
  city: {
    color: 'white',
    fontSize: 30,
    fontFamily: 'Lato-Regular',
    fontWeight: 'bold'
  },

  dateTime: {
    color: 'white',
    fontFamily: 'Lato-Regular',
    fontWeight: 'bold'
  },

  temperature: {
    color: 'white',
    fontSize: 85,
    fontFamily: 'Lato-Light'
  }
});
