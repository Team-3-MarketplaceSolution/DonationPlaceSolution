import * as WebBrowser from 'expo-web-browser';
import React from 'react';

import {

  Platform,
  ScrollView,
  StyleSheet,
  Text,
  View,
  Button,
  Alert,
  Dimensions,

} from 'react-native';

import Swiper from "react-native-web-swiper";

var { height } = Dimensions.get('window');
var box_count = 3;
var box_height = height / box_count;

export default function HomeScreen() {
  return (

    <View style={styles.container}>
      <ScrollView

        style={styles.container}

        contentContainerStyle={styles.contentContainer}>

        <View style={[styles.box, styles.box1]}>



          <View style={styles.titleContainer}>

            <Text style={styles.titleText}>
              Donation Instructions
          </Text>
          </View>

          <View style={styles.howtoDonateContainer}>

            <Text style={styles.howtoDonateText}>
              To donate click on your desired organization, and select the
              items you would like to send for donation.
          </Text>

            <View
              style={[styles.codeHighlightContainer, styles.homeScreenFilename]}
            />
          </View>
        </View>


        <View style={[styles.box, styles.box2]}>
          <View style={styles.ActivityTitleContainer}>
            <Text style={styles.ActivityTitleText}>
              Activity Board
          </Text>
          </View>

          <View style={styles.ActivityContainer}>
            <Text style={styles.ActivityListText}>
              Activity 1 {'\n'}
              Activity 2 {'\n'}
              Activity 3 {'\n'}
              Activity 4 {'\n'}
              Activity 5 {'\n'}
            </Text>
          </View>
        </View>
        
        {/*  ### NOT IMPLEMENTING THIS SECTION UNTIL NEXT SEMESTER! ### 

        <View style={[styles.box, styles.box3]}>
          <View style={styles.ItemsTitleContainer}>
            <Text style={styles.ItemsTitleText}>
              Items
          </Text>
          </View>
          <View style={styles.itemsContainer}>
            <Text style={styles.itemsText}>
              Item 1   {"\n"}
              Item 2    {"\n"}
              Item 3    {"\n"}
              Item 4    {"\n"}
              Item 5    {"\n"}
            </Text>
            <Button
              title="Add Items"
              color=''
              onPress={() => Alert.alert('The item has been added to your items.')}
            />
          </View>
        </View>
        */}

        <View style={[styles.box, styles.box4]}>

          <View style={styles.organizationsTitleContainer}>
            <Text style={styles.organizationsTitleText}>
              Organization Description
          </Text>

          </View>
          <View style={styles.organizationsContainer}>
            <Text style={styles.organizationsText}>
              Donationplace Solution is a one stop shop to donate and get tax benefits.
         </Text>
            <View style={styles.organizationGallery}>
            </View>
            <View style={styles.organizationButton}>
            </View>
          </View>
        </View>


        <View style={styles.tabBarInfoContainer}>

          <Text style={styles.tabBarInfoText}>
            Tab Bar (Placeholder)
        </Text>

          <View
            style={[styles.codeHighlightContainer, styles.navigationFilename]}
          />
        </View>
      </ScrollView>
    </View>


  );
}

HomeScreen.navigationOptions = {
  header: null,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //backgroundColor: '#fff',
    flexDirection: 'column'

  },

  contentContainer: {

  },
  welcomeContainer: {
    alignItems: 'center',

  },


  howtoDonateContainer: {

    alignItems: 'center',

  },

  howtoDonateText: {

    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    lineHeight: 24,
    textAlign: 'center',
    marginHorizontal: 50,
    marginTop: 10,
    marginBottom: 10,

  },
  tabBarInfoContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: '#89f0de',

    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: { width: 0, height: -3 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
      },
      android: {
        elevation: 20,
      },
    }),
    alignItems: 'center',
    backgroundColor: '#fbfbfb',
    paddingVertical: 20,
  },
  tabBarInfoText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    textAlign: 'center',
  },
  navigationFilename: {
    marginTop: 5,
  },
  ActivityTitleContainer: {

    alignItems: 'center',
    backgroundColor: 'black',
    borderRadius: 3,
    paddingHorizontal: 4,

  },
  ActivityTitleText: {


    color: 'white',
    fontSize: 24,

  },
  titleContainer: {

    alignItems: 'center',
    backgroundColor: 'black',
    borderRadius: 3,


  },
  titleText: {

    color: 'white',
    fontSize: 24,

  },
  ActivityContainer: {


  },
  ActivityListText: {
    marginTop: 10,
    marginBottom: 10,
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    lineHeight: 24,
    textAlign: 'center',


  },
  ItemsTitleContainer: {

    alignItems: 'center',
    backgroundColor: 'black',
  },
  ItemsTitleText: {

    color: 'white',
    fontSize: 24,

  },
  itemsText: {
    marginTop: 10,
    marginBottom: 10,
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    lineHeight: 24,
    textAlign: 'center',


  },
  organizationsTitleContainer: {

    alignItems: 'center',
    backgroundColor: 'black',
  },
  organizationsTitleText: {
    color: 'white',
    fontSize: 24,
  },
  organizationsContainer: {

  },
  organizationsText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    lineHeight: 24,
    textAlign: 'center',
    marginHorizontal: 50,
    marginTop: 10,
    marginBottom: 10,


  },
  itemsButton: {
    marginHorizontal: 50,
    color: 'black',
  },
  organizationGallery: {
    alignItems: 'center',
  },
  box: {
    height: box_height
  },
  box1: {
    backgroundColor: '#fff'

  },
  box2: {
    backgroundColor: '#fff'
  },
  box3: {
    backgroundColor: '#fff'
  },
  box4: {
    backgroundColor: '#fff'
  },
});
