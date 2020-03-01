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
    type: 'number',
    name: 'Shirts',
    label: 'Shirts',
  },
    {
    type: 'number',
    name: 'pants',
    label: 'Pants',
  },
    {
    type: 'number',
    name: 'jackets',
    label: 'Jackets',
  },
    {
    type: 'number',
    name: 'sweaters',
    label: 'Sweaters',
  },
  {
    type: 'text',
    name: 'inHonorOf',
    label: 'Donate in Honor of Someone?',
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
          <Button block onPress={() => console.log(this.formGenerator.getValues())}>
            <Text>Create List</Text>
          </Button>
        </View>
      </View>
    );
  }
}

AppRegistry.registerComponent('FormGenerator', () => FormGenerator);


