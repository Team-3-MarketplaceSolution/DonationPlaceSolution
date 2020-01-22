import * as React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';

export default class AssetExample extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.paragraph}>

        </Text>
                <Text style={styles.paragraph}>

        </Text>
        <Image style={styles.logo} source={require('../assets/DonationPlace Solutions.png')} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: -20,
  },
  paragraph: {
    margin: 10,
    marginTop: 0,
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  logo: {
    height: 900,
    width: 375,
  }
});
