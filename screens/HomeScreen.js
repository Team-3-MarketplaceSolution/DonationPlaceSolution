// This is a test
import * as WebBrowser from 'expo-web-browser';
import React from 'react';
import Constants from 'expo-constants';
import { LinearGradient } from 'expo-linear-gradient';

import {

  Platform,
  ScrollView,
  StyleSheet,
  Text,
  View,
  Button,
  Alert,
  Dimensions,
  Image,
  Picker,
  TouchableHighlight,


} from 'react-native';

import Swiper from "react-native-web-swiper";

var {
  height
} = Dimensions.get('window');
var box_count = 3;
var box_height = height / box_count;

export default function HomeScreen() {
  createImages =()=>{
    let myimage=[]
    for(let i=0;i<10;i++){
        myimage.push(
          <TouchableHighlight  onPress={() => alert('Do something!')} underlayColor="white">
          <Image 
            style={ styles.logo }
            source={{ uri: 'https://www.bbcgoodfood.com/sites/default/files/editor_files/2019/10/hydration-guide-main-image-700-350.jpg' }}
          />
        </TouchableHighlight>
          )
    }
    return myimage
  }

  return (
  

    <View style={ styles.container }>
      <LinearGradient colors={['#4c669f', '#3b5998', '#192f6a']}style={{ position: 'absolute', left: 0,right: 0, top: 0, height:Math.round(Dimensions.get('window').height)}}/>
      <ScrollView nativeID="OverAllVerticalScroll">
        <View nativeID="titleContainer"  style={styles.titleContainer}>
          <Text nativeID="title" style={styles.mainTitle }>Donation Place Solution</Text>
        </View>
        <View nativeID="itemsContainer" style={styles.itemsContainer }>
          <Text style={ styles.itemTitle }>Items</Text>
          <ScrollView nativeID="itemsImages" horizontal={true}>
            {this.createImages()}
          </ScrollView>
        </View>
        <View nativeID="nonProfitOgranizationContainer" style={styles.nonProfitOgranizationContainer }>
            <Text>Non-Profit</Text>
            <Text>Ogranizations</Text>
            <ScrollView nativeID="nonProfitOgranizationImages" horizontal={true}>
              {this.createImages()}
            </ScrollView>
        </View>
        <View nativeID="recentWorldNewsContainer" style={styles.recentWorldNewsContainer}>
          <Text>Recent World News</Text>
          <ScrollView nativeID="recentWorldNewsImages">
            {this.createImages()}
          </ScrollView>
        </View>
      </ScrollView>
    </View>


  );
}

HomeScreen.navigationOptions = {
  header: null
};


const styles = StyleSheet.create({
  contentContainer: {
    flex: 1,
    flexDirection: 'column'

  },
  itemTitle: {
    marginVertical: 5
  },
  titleContainer: {
    marginVertical: 10
  },
  itemsContainer: {
    marginVertical: 10
  },
  nonProfitOgranizationContainer: {
    flex: 1,
    marginVertical: 10
  },
  recentWorldNewsContainer: {
    flex: 2,
    marginVertical: 10
  },
  container: {
    flex: 3,
    flexDirection: 'column',
    paddingTop: Constants.statusBarHeight,
    //backgroundColor: 'blue',
    padding: 8
  },

  mainTitle: {
    textAlign: 'center',
    // borderBottomWidth: StyleSheet.hairlineWidth,
    fontSize: 30
  },
  logo: {
    resizeMode: "cover",
    borderRadius: 10,
    height: 200,
    width: 128,
    paddingHorizontal: 25,
    paddingVertical: 25,
    marginHorizontal: 5,
    marginVertical: 5,
    aspectRatio: 0.75
  }
});
