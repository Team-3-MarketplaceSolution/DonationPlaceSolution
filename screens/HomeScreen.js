import * as WebBrowser from 'expo-web-browser';
import React from 'react';

import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import { whileStatement } from '@babel/types';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.contentContainer}>
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
        <View style={styles.ActivityTitleContainer}>
          <Text style={styles.ActivityTitleText}>
            Activity Board
          </Text>
        </View>
        
        <View style={styles.ActivityContainer}>
        <Text style={styles.ActivityListText}>
            Activity 1  {"\n"}
            Activity 2  {"\n"}
            Activity 3  {"\n"}
            Activity 4  {"\n"}
          </Text>

        </View>

        <View style = {styles.ItemsTitleContainer}>
          <Text style = {styles.ItemsTitleText}>
            Items
          </Text>
        </View>
        <View style = {styles.itemsContainer}>
          <Text style = {styles.itemsText}>
           You currently have [placeholder] item(s) ready to be donated.   {"\n"}
          </Text>
        </View>

        <View style = {styles.organizationsTitleContainer}>
          <Text style = {styles.organizationsTitleText}>
            Your Organizations
          </Text>

        </View>
        <View style = {styles.organizationsContainer}>
          <Text style = {styles.organizationsText}>
           these are your orgnizations: {"\n"}

          </Text>
        </View>









      </ScrollView>

      <View style={styles.tabBarInfoContainer}>
        <Text style={styles.tabBarInfoText}>
          Tab Bar (Placeholder)
        </Text>

        <View
          style={[styles.codeHighlightContainer, styles.navigationFilename]}
        />
      </View>
    </View>
  
  );
}

HomeScreen.navigationOptions = {
  header: null,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },

  contentContainer: {
    paddingTop: 30,
  },
  welcomeContainer: {
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 20,
  },
  welcomeImage: {
    width: 100,
    height: 80,
    resizeMode: 'contain',
    marginTop: 3,
    marginLeft: -10,
  },

  howtoDonateContainer: {
    marginTop: 10,
    alignItems: 'center',
   
  },
  homeScreenFilename: {
    marginVertical: 7,
  },
  codeHighlightContainer: {
    backgroundColor: 'rgba(0,0,0,0.05)',
    borderRadius: 3,
    paddingHorizontal: 4,
  },
  howtoDonateText: {
  
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    lineHeight: 24,
    textAlign: 'center',
    marginHorizontal: 50,
    marginTop: 25,
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
    marginTop: 25,
    alignItems: 'center',
    backgroundColor: '#89cff0',
    borderRadius: 3,
    paddingHorizontal: 4,

  },
  ActivityTitleText: {
    marginHorizontal: 50,
    color: 'white',
    fontSize: 24,

  },
  titleContainer:{
    alignItems: 'center',
    backgroundColor: '#89cff0',
    borderRadius: 3,
    paddingHorizontal: 4,

  },
  titleText:{
    color: 'white',
    fontSize: 24,

  },
  ActivityContainer: {

  },
  ActivityListText: {
    marginTop: 10,
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    lineHeight: 24,
    textAlign: 'center',
    marginHorizontal: 50,

  },
  ItemsTitleContainer:{
    alignItems: 'center',
    backgroundColor: '#89cff0',
  },
  ItemsTitleText:{
    color: 'white',
    fontSize: 24,

  },
  itemsText: {
    marginTop: 10,
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    lineHeight: 24,
    textAlign: 'center',
    marginHorizontal: 50,

  },
  organizationsTitleContainer:{
    alignItems: 'center',
    backgroundColor: '#89cff0',
  },
  organizationsTitleText:{
    color: 'white',
    fontSize: 24,
  },
  organizationsContainer:{
    marginTop: 25,
    marginBottom: 25,

  },
  organizationsText:{
    marginTop: 10,
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    lineHeight: 24,
    textAlign: 'center',
    marginHorizontal: 50,

  },
});
