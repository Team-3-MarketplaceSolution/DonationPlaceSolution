import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
import { View, Text, Button } from 'native-base';
import GenerateForm from 'react-native-form-builder';
 
const styles = {
  wrapper: {
    flex: 1,
    marginTop: 150,
  },
  submitButton: {
    paddingHorizontal: 10,
    paddingTop: 20,
  },
};
const fields = [
  {
    type: 'text',
    name: 'item_name',
    required: true,
    label: 'Item Name',
    icon: 'ios-shirt'
  },
  {
    type: 'text',
    name: 'item_description',
    required: true,
    label: 'Description',
  },
  {
    type: 'number',
    name: 'OriginalPrice',
    required: true,
    label: 'Price (USD)',
    icon: 'ios-cash',
  },
  {
    type: 'picker',
    name: 'country',
    mode: 'dialog',
    label: 'Select Condition',
    defaultValue: 'Good',
    options: ['New', 'Good', 'OK', 'Poor'],
  },
];
export default class FormGenerator extends Component {
  add() {
    const formValues = this.formGenerator.getValues();
    console.log('FORM VALUES', formValues);
  }
  render() {
    return (
      <View style={styles.wrapper}>
        <View>
          <GenerateForm
            ref={(c) => {
              this.formGenerator = c;
            }}
            fields={fields}
          />
        </View>
        <View style={styles.submitButton}>
          <Button block onPress={() => alert('Item Submitted Successfully!')}>
            <Text>ADD ITEM</Text>
          </Button>
        </View>
      </View>
    );
  }
}
 
AppRegistry.registerComponent('FormGenerator', () => FormGenerator);