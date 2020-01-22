import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  ScrollView,
  Image,
  TouchableHighlight,
  Picker
} from 'react-native';
import Constants from 'expo-constants';

// You can import from local files

// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';

export default class App extends React.Component {
   state = {user: ''}
   updateUser = (user) => {
      this.setState({ user: user })
   }

  render() {

    return ( 
      <View style={styles.container}>
        <ScrollView nativeID="OverAllVerticalScroll">
          <View nativeID="titleContainer" style={styles.titleContainer}>
            <Text nativeID="title" style={styles.mainTitle}>
              Donation Place Solution
            </Text>
          </View>
          <View nativeID="itemsContainer" style={styles.itemsContainer}>
            <Text style={styles.itemTitle}>Items</Text>
            <ScrollView
              nativeID="itemsImages"
              contentContainerStyle={{ flex: 1, flexDirection: 'row' }}
              horizontal="true">
              <Image
                style={styles.logo}
                source={{
                  uri:
                    'https://www.bbcgoodfood.com/sites/default/files/editor_files/2019/10/hydration-guide-main-image-700-350.jpg',
                }}
              />

              <Image
                style={styles.logo}
                source={{
                  uri:
                    'https://scotscoop.com/wp-content/uploads/2013/11/fopoodddd.jpg',
                }}
              />
              <Image
                style={styles.logo}
                source={{
                  uri:
                    'https://cnet3.cbsistatic.com/img/6M-eVqyyJMjerNVlIa7R8P6Dnx8=/756x567/2019/09/16/622574d0-0581-42a4-a07e-ef0644028c68/dollars-money-bills-currency-6.jpg',
                }}
              />
              <Image
                style={styles.logo}
                source={{
                  uri:
                    'https://www.ancient-origins.net/sites/default/files/field/image/Dragons_0.jpg',
                }}
              />
              <Image
                style={styles.logo}
                source={{
                  uri:
                    'https://www.ancient-origins.net/sites/default/files/field/image/Dragons_0.jpg',
                }}
              />
              <Image
                style={styles.logo}
                source={{
                  uri:
                    'https://www.ancient-origins.net/sites/default/files/field/image/Dragons_0.jpg',
                }}
              />
            </ScrollView>
          </View>
          <View nativeID="nonProfitOgranizationContainer"
            style={styles.nonProfitOgranizationContainer}>
            <View nativeID="Header">
              <Text>Non-Profit Ogranizations</Text>
              <ScrollView
                nativeID="nonProfitOgranizationImages"
                contentContainerStyle={{ flex: 1, flexDirection: 'row' }}
                horizontal="true">
                <Image
                  style={styles.logo}
                  source={{
                    uri:
                      'https://www.ancient-origins.net/sites/default/files/field/image/Dragons_0.jpg',
                  }}
                />

                <Image
                  style={styles.logo}
                  source={{
                    uri:
                      'https://www.ancient-origins.net/sites/default/files/field/image/Dragons_0.jpg',
                  }}
                />
                <Image
                  style={styles.logo}
                  source={{
                    uri:
                      'https://www.ancient-origins.net/sites/default/files/field/image/Dragons_0.jpg',
                  }}
                />
                <Image
                  style={styles.logo}
                  source={{
                    uri:
                      'https://www.ancient-origins.net/sites/default/files/field/image/Dragons_0.jpg',
                  }}
                />
                <Image
                  style={styles.logo}
                  source={{
                    uri:
                      'https://www.ancient-origins.net/sites/default/files/field/image/Dragons_0.jpg',
                  }}
                />
                <Image
                  style={styles.logo}
                  source={{
                    uri:
                      'https://www.ancient-origins.net/sites/default/files/field/image/Dragons_0.jpg',
                  }}
                />
              </ScrollView>
            </View>
          </View>
          <View nativeID="recentWorldNewsContainer"
            style={styles.recentWorldNewsContainer}>
            <View nativeID="recentWorldNewsTitle">
              <Text>Recent World News </Text>
            </View>
            <ScrollView nativeID="recentWorldNewsImages"
              contentContainerStyle={styles.contentContainer}
              horizontal="true">
              <Image
                style={styles.logo}
                source={{
                  uri:
                    'https://www.ancient-origins.net/sites/default/files/field/image/Dragons_0.jpg',
                }}
              />

              <Image
                style={styles.logo}
                source={{
                  uri:
                    'https://www.ancient-origins.net/sites/default/files/field/image/Dragons_0.jpg',
                }}
              />
              <Image
                style={styles.logo}
                source={{
                  uri:
                    'https://www.ancient-origins.net/sites/default/files/field/image/Dragons_0.jpg',
                }}
              />
              <Image
                style={styles.logo}
                source={{
                  uri:
                    'https://www.ancient-origins.net/sites/default/files/field/image/Dragons_0.jpg',
                }}
              />
              <Image
                style={styles.logo}
                source={{
                  uri:
                    'https://www.ancient-origins.net/sites/default/files/field/image/Dragons_0.jpg',
                }}
              />
              <Image
                style={styles.logo}
                source={{
                  uri:
                    'https://www.ancient-origins.net/sites/default/files/field/image/Dragons_0.jpg',
                }}
              />
            </ScrollView>
          </View>

          <View>
            <Picker selectedValue = {this.state.user} onValueChange = {this.updateUser}>
               <Picker.Item label = "Steve" value = "steve" />
               <Picker.Item label = "Ellen" value = "ellen" />
               <Picker.Item label = "Maria" value = "maria" />
            </Picker>
            <Text style = {styles.text}>{this.state.user}</Text>
         </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  contentContainer: {
    flex: 1,
    flexDirection: 'row',
   
  },
  itemTitle: {
    marginVertical: 5,
  },
  titleContainer: {
    marginVertical: 10,
  },
  itemsContainer: {
    marginVertical: 10,
  },
  nonProfitOgranizationContainer: {
    flex: 1,
    marginVertical: 10,
  },
  recentWorldNewsContainer: {
    flex: 2,
    marginVertical: 10,
  },
  container: {
    flex: 3,
    flexDirection: 'col',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },

  mainTitle: {
    textAlign: 'center',
    //borderBottomWidth: StyleSheet.hairlineWidth,
    fontSize: 30,
  },
  logo: {
    resizeMode:"cover",
    borderRadius: 10,
    height: 200,
    width: 128,
    paddingHorizontal: 25,
    marginHorizontal: 5,
    aspectRatio: 0.75,
  },
});
